import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ContentComponent } from "../../../stories/data/ContentData";
import AppMenu from "../menu/AppMenu";
import HeaderLayout from "./HeaderLayout";
import { MenuItem } from "@mui/material";

export default {
  component: HeaderLayout,
  title: "Layout/Templates",
} as ComponentMeta<typeof HeaderLayout>;

const Template: ComponentStory<typeof HeaderLayout> = (args) => {
  return <HeaderLayout {...args} />;
};

export const Header = Template.bind({});
Header.args = {
  label: "This is a Header",
  children: <ContentComponent />,
};

export const HeaderWithMenu = Template.bind({});
HeaderWithMenu.args = {
  label: "With Menu",
  headerComponents: {
    Menu: AppMenu,
    ProfileNode: <MenuItem>Content</MenuItem>,
  },
  children: <ContentComponent />,
};
