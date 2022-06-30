import { ComponentMeta, ComponentStory } from "@storybook/react";
import Logo from "./Logo";
import LogoFull from "./LogoFull";

export default {
  component: Logo,
  title: "Common/Logo",
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => {
  return <Logo {...args} />;
};

const TemplateFull: ComponentStory<typeof LogoFull> = (args) => {
  return <LogoFull {...args} />;
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Full = TemplateFull.bind({});
Full.args = {};
