import type { Meta, StoryObj } from "@storybook/react";
import Component from "./HeaderLayout";
import { ContentComponent } from "~/stories/data/ContentData";
import { DefaultHeaderComponents } from "~/stories/data/HeaderData";

const meta = {
  component: Component,
  title: "Layout/Templates",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderLayout = {
  args: {
    headerOptions: {
      label: "This is a Header",
    },
    children: <ContentComponent />,
    headerComponents: <DefaultHeaderComponents />,
  },
} satisfies Story;
