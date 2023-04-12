import type { Meta, StoryObj } from "@storybook/react";
import Search from "../../library/search/Search";
import Component from "./AppHeader";
import { DefaultHeaderComponents } from "~/stories/data/HeaderData";

const meta = {
  component: Component,
  title: "Layout/Header",
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

export const HeaderComponents = {
  args: {
    isMobile: false,
    subheader: false,
    headerComponents: <DefaultHeaderComponents />,
  },
} satisfies Story;
