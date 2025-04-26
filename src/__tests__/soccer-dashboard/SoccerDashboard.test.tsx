import { screen, render, waitFor } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import mockData from "./scratch_files/premier_league_fetch.json";

import SoccerDashboard from "../../app/soccer-dashboard/page";

jest.mock("next/navigation", () => {
  return {
    useRouter: () => ({
      replace: jest.fn(),
    }),
    usePathname: () => "/",
  };
});

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockData),
    })
  ) as jest.Mock;
});

afterEach(() => {
  jest.restoreAllMocks();
});

expect.extend(toHaveNoViolations);
describe("<SoccerDashboard />", () => {
  test("It should render a loading spinner when loading", async () => {
    render(<SoccerDashboard />);

    const spinner = await screen.findByTestId("loading-spinner");

    expect(spinner).toBeInTheDocument();
  });

  test("It should render a table when loaded", async () => {
    render(<SoccerDashboard />);

    const renderedTable = await screen.findAllByRole("table");

    expect(renderedTable).toHaveLength(1);
  });

  test("It should fetch data on render", async () => {
    render(<SoccerDashboard />);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "/api/soccer-dashboard/standings"
      );
    });
  });

  test("It should be accessible", async () => {
    const { container } = render(<SoccerDashboard />);
    const results = await waitFor(() => axe(container));

    expect(results).toHaveNoViolations();
  });
});
