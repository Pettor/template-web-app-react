import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { sleep } from "react-utils";
import { DefaultHeaderComponents } from "Storybook/Data";
import { Search } from "../../Library/Search/Search";
import { AppHeader as Component } from "./AppHeader";

const meta = {
  component: Component,
  title: "Navigation/Header",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppHeader = {
  args: {
    label: "This is a Header",
  },
} satisfies Story;

export const SubHeader = {
  args: {
    subheader: true,
    label: "This is a SubHeader",
  },
} satisfies Story;

export const SubHeaderWithSearch = {
  args: {
    subheader: true,
    headerComponents: [<Search key="search" width="100%" />],
    headerComponentOptions: {
      flexItem: true,
      fill: true,
    },
  },
} satisfies Story;

export const HeaderComponents: Story = {
  args: {
    isMobile: false,
    subheader: false,
    headerComponents: <DefaultHeaderComponents />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.click(canvas.getByRole("checkbox"));

    await sleep(500);

    expect(canvas.getByTestId("app-header-group__theme-toggle-box")).toHaveTextContent("dark");

    userEvent.click(canvas.getByRole("checkbox"));

    await sleep(500);

    expect(canvas.getByTestId("app-header-group__theme-toggle-box")).toHaveTextContent("light");
  },
} satisfies Story;
