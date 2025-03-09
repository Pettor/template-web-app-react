import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { AppDrawer as Component } from "./AppDrawer";
import type { AppDrawerProps as Props } from "./AppDrawer";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Navigation/Drawer",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  open: true,
  name: faker.internet.userName(),
  email: faker.internet.email(),
  onAbout: () => console.log("onAbout"),
  onLogout: () => console.log("onLogout"),
  onClose: () => console.log("onClose"),
} satisfies Props;

export const Application: Story = {
  args: defaultArgs,
};
