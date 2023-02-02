import { ComponentStoryObj } from "@storybook/react";
import CommonDecorator from "../../../stories/decorators/CommonDecorator";
import MaxWidthDecorator from "../../../stories/decorators/MaxWidthDecorator";
import Component from "./Search";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Library/Search",
  decorators: [MaxWidthDecorator, CommonDecorator],
};

export const Search: Story = {};
