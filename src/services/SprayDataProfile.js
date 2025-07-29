export class SprayDataProfile {
  constructor(filePath, threshold = 100, sigma = 2, cropRadius = 200) {
    this.filePath = filePath;
    this.threshold = threshold;
    this.sigma = sigma;
    this.cropRadius = cropRadius;
    this.originaMatrix = null;
    this.formattedMatrix = null;
  }

  async loadData() {
    const fileResponse = await fetch(this.filePath);
    const fileText = await fileResponse.text();

    let rows = fileText.trim().split("\n");

    console.log("Total rows before filtering:", rows.length);

    rows = rows.filter((row) => !row.startsWith("#") && /\d/.test(row));

    this.originaMatrix = rows.map((row) => row.trim().split(/\s+/).map(Number));

    console.log("Original matrix length ", this.originaMatrix.length);
    console.log(`${this.filePath} loaded!`);

    this.originaMatrix = this.downSampleMatrix(this.originaMatrix, 3, 3);
    console.log(
      "Formatted matrix has been downsized to ",
      this.originaMatrix.length
    );
  }

  downSampleMatrix(inputMatrix, xDownSample, yDownSample) {
    if (!(inputMatrix.length > 0)) {
      console.warn("Matrix is empty or invalid. Skipping downsample.");
      return;
    }

    const downSampleMatrix = [];

    for (let y = 0; y < inputMatrix.length; y += yDownSample) {
      const originalRow = inputMatrix[y];
      const newRow = [];

      for (let x = 0; x < originalRow.length; x += xDownSample) {
        newRow.push(originalRow[x]);
      }

      downSampleMatrix.push(newRow);
    }

    return downSampleMatrix;
  }

  applyThreshold(originalArray, threshold) {
    const filteredArray = originalArray.map((row) => [...row]);

    for (let y = 0; y < filteredArray.length; y++) {
      for (let x = 0; x < filteredArray[0].length; x++) {
        if (filteredArray[y][x] < threshold) {
          filteredArray[y][x] = NaN;
        }
      }
    }

    console.log(`Applied threshold: values below ${threshold} set to NaN.`);
    return filteredArray;
  }

  formatToEcharts() {
    if (!this.originaMatrix) {
      throw new Error("Data not loaded. Call loadData() first");
    }

    this.formattedMatrix = [];
    const numRows = this.originaMatrix.length;
    const numCols = this.originaMatrix[0].length;

    for (let y = 0; y < numRows; y++) {
      for (let x = 0; x < numCols; x++) {
        const positionalValue = this.originaMatrix[y][x];
        if (!isNaN(positionalValue)) {
          this.formattedMatrix.push([x, y, positionalValue]);
        }
      }
    }

    console.log(this.formattedMatrix);
  }

  getMin() {
    if (!this.formattedMatrix || this.formattedMatrix.length === 0) {
      throw new Error("Formatted data not available");
    }

    return this.formattedMatrix.reduce(
      (min, [, , value]) => (value < min ? value : min),
      Infinity
    );
  }

  getMax() {
    if (!this.formattedMatrix || this.formattedMatrix.length === 0) {
      throw new Error("Formatted data not available");
    }

    return this.formattedMatrix.reduce(
      (max, [, , value]) => (value > max ? value : max),
      -Infinity
    );
  }
}
