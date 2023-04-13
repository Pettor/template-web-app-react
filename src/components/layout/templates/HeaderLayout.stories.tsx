import type { Meta, StoryObj } from "@storybook/react";
import Component from "./HeaderLayout";
import { ContentComponent } from "~/stories/data/ContentData";
import { DefaultHeaderComponents } from "~/stories/data/HeaderData";

const meta = {
  component: Component,
  title: "Layout/Templates",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    headerOptions: {
      table: {
        disable: true,
      },
    },
    headerComponents: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderLayout = {
  args: {
    headerOptions: {
      label: "This is a Header",
    },
    headerComponents: <DefaultHeaderComponents />,
  },
  render: (args) => (
    <Component {...args}>
      <ContentComponent />
    </Component>
  ),
} satisfies Story;
