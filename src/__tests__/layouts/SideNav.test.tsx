import SideNav from "../../app/components/SideNav";
import { routingLinks } from "../../utils/links";

import { screen, render } from "@testing-library/react";
import { act } from "react";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import userEvent from "@testing-library/user-event";
import mockRouter from "next-router-mock";
import nextRouterMock from "next-router-mock";
import { axe, toHaveNoViolations } from "jest-axe";

jest.mock("next/router", () => nextRouterMock);

expect.extend(toHaveNoViolations);

describe("<SideNav />", () => {
  describe("When SideNav is closed", () => {
    const setupInitialView = () => {
      const view = render(<SideNav />);

      return view;
    };

    test("SideNav should not be visible", async () => {
      setupInitialView();
      const navElement = screen.queryByRole("navigation");
      expect(navElement).not.toBeInTheDocument();
    });

    test("Page should be accessible", async () => {
      const view = setupInitialView();
      const container = view.container;
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe("When SideNav is open", () => {
    const setupOpenNavView = () => {
      mockRouter.setCurrentUrl("/");
      const view = render(<SideNav />, {
        wrapper: MemoryRouterProvider,
      });
      return view;
    };

    test("SideNav should be visible", async () => {
      setupOpenNavView();
      const toggleButton = screen.getByRole("button", { name: "openSideNav" });
      await userEvent.click(toggleButton);

      const navElement = screen.getByRole("navigation");
      expect(navElement).toBeVisible();
    });

    it.each(routingLinks)(
      "Should render and verify the $linkName link",
      async ({ linkName, href }) => {
        setupOpenNavView();

        const toggleButton = screen.getByRole("button", {
          name: "openSideNav",
        });
        await userEvent.click(toggleButton);

        const testLink = screen.getByRole("link", { name: linkName });
        expect(testLink).toBeInTheDocument();
        expect(testLink).toHaveAttribute("href", href);
      }
    );

    it.each(routingLinks)(
      "Clicking the $linkName link should navigate to $href",
      async ({ linkName, href }) => {
        setupOpenNavView();

        const toggleButton = screen.getByRole("button", {
          name: "openSideNav",
        });
        await userEvent.click(toggleButton);

        const testLink = screen.getByRole("link", { name: linkName });

        await userEvent.click(testLink);

        act(() => {
          mockRouter.push(href);
        });

        expect(mockRouter.asPath).toEqual(href);
      }
    );

    test("Page should be accessible", async () => {
      const view = setupOpenNavView();
      const toggleButton = screen.getByRole("button", {
        name: "openSideNav",
      });
      await userEvent.click(toggleButton);

      expect(screen.getByRole("navigation")).toBeVisible();

      const results = await axe(view.container);
      expect(results).toHaveNoViolations();
    });
  });
});
