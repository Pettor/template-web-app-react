import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProfileCard from "./ProfileCard";
import { CommonDecorator } from "../../../stories/decorators/CommonDecorator";

export default {
  component: ProfileCard,
  title: "Layout/Profile/Card",
  decorators: [CommonDecorator],
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "John Doe",
  email: "john.doe@gmail.com"
}
