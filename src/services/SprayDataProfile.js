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

    const exampleSplit = rows[0].trim().split(/\s+/);
    console.log("First row split into columns:", exampleSplit);
    console.log("First row parsed as numbers:", exampleSplit.map(Number));
    // this.originaMatrix = rows.map((row) => row.trim().split(/\s+/).map(Number));

    // console.log(this.originaMatrix);
    // console.log(`${this.filePath} loaded!`);
  }

  //   formatToEcharts(){

  //   }
}
