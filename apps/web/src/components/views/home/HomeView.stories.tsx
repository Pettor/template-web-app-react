import type { Meta, StoryObj } from "@storybook/react";
import { DefaultHeaderComponents } from "shared-ui";
import { HomeView as Component } from "./HomeView";
import type { HomeViewProps as Props } from "./HomeView";

const meta = {
  component: Component,
  title: "Views/Home",
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

const defaultArgs = {
  onGithubClick: (): void => console.log("onGithubClick"),
  onLinkedInClick: (): void => console.log("onLinkedInClick"),
  components: <DefaultHeaderComponents />,
} satisfies Props;

export const Home = {
  args: defaultArgs,
} satisfies Story;
