import type { Meta, StoryObj } from "@storybook/react";
import { GridItem as Component } from "./GridItem";
import type { GridItemProps as ComponentProps } from "./GridItem";
import storbookImgSrc from "~/assets/images/logo/storybook.png";

const meta: Meta<typeof Component> = {
  title: "Display/Grid Item",
  component: Component,
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  title: "Title",
  imageSrc: storbookImgSrc,
  description: "Description",
} satisfies ComponentProps;

export const Default: Story = {
  args: defaultArgs,
};

export const Inverted: Story = {
  args: {
    ...defaultArgs,
    invertColor: true,
  },
};
