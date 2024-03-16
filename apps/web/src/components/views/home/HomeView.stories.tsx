import type { Meta, StoryObj } from "@storybook/react";
import { FullSizeDecorator } from "storybook-base";
import { HomeView as Component } from "./HomeView";
import type { HomeViewProps as Props } from "./HomeView";
import { DefaultAppNavbarComponent } from "~/storybook/components/DefaultAppNavbarComponent";

const meta = {
  component: Component,
  title: "Views/Home",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    navbarElement: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  onGithubClick: (): void => console.log("onGithubClick"),
  onLinkedInClick: (): void => console.log("onLinkedInClick"),
  navbarElement: <DefaultAppNavbarComponent />,
} satisfies Props;

export const Fullscreen = {
  args: defaultArgs,
  decorators: [FullSizeDecorator],
  parameters: { viewport: { defaultViewport: "full" } },
} satisfies Story;

export const Phone = {
  args: defaultArgs,
  parameters: { viewport: { defaultViewport: "iphonex" } },
} satisfies Story;
