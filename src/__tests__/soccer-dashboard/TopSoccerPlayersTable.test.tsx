import { screen, render } from "@testing-library/react";
import TopSoccerPlayersTable from "../../app/soccer-dashboard/components/TopSoccerPlayersTable";
import mockData from "./scratch_files/liverpool_scoring_summary_sample.json";
import { axe } from "jest-axe";
import "jest-axe/extend-expect";

describe("<TopSoccerPlayersTable />", () => {
  test("It should render scoring leaders", async () => {
    render(<TopSoccerPlayersTable rowData={mockData} />);

    const mohamed = await screen.findByText("Mohamed Salah");

    expect(mohamed).toBeInTheDocument();
  });

  test("It should be accessible", async () => {
    const { container } = render(<TopSoccerPlayersTable rowData={mockData} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
