import MainHeader from "../../app/components/MainHeader";
import { routingLinks } from "../../utils/links";
import { screen, render, waitFor } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { useRouter } from "next/navigation";

expect.extend(toHaveNoViolations);

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("<MainHeader />", () => {
  const pushMock = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("It should be accessible", async () => {
    const { container } = render(<MainHeader />);
    const results = await waitFor(() => axe(container));

    expect(results).toHaveNoViolations();
  });

  test.each(routingLinks)("Renders '%s' link in the header", ({ linkName }) => {
    render(<MainHeader />);
    const link = screen.getByRole("link", { name: linkName });
    expect(link).toBeInTheDocument();
  });

  test.each(routingLinks)(
    "$linkName header routes to '$href'",
    async ({ linkName, href }) => {
      render(<MainHeader />);
      const headerLink = await screen.findByRole("link", { name: linkName });

      expect(headerLink).toHaveAttribute("href", href);
    }
  );
});
