import type { Meta, StoryObj } from "@storybook/react";
import { DefaultHeaderComponents } from "Storybook/Data";
import { ContentComponent } from "storybook-base";
import { HeaderLayout as Component } from "./HeaderLayout";
import type { HeaderLayoutProps as Props } from "./HeaderLayout";

const meta = {
  component: Component,
  title: "Layout/Header",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    components: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

function render(args: Props) {
  return (
    <Component {...args}>
      <ContentComponent />
    </Component>
  );
}

export const Header = {
  args: {
    title: "Some Label",
    components: <DefaultHeaderComponents />,
  },
  render,
} satisfies Story;
