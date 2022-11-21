import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CommonDecorator } from "../../../../stories/decorators/CommonDecorator";
import ThemeToggle from "./ThemeToggle";

export default {
  component: ThemeToggle,
  title: "Common/Toggle",
  decorators: [CommonDecorator],
} as ComponentMeta<typeof ThemeToggle>;

const Template: ComponentStory<typeof ThemeToggle> = (args) => <ThemeToggle {...args} />;

export const Default = Template.bind({});
Default.args = {};
