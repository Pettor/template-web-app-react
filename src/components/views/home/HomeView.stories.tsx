import { ComponentMeta, ComponentStory } from "@storybook/react";
import HomeView from "./HomeView";

export default {
  component: HomeView,
  title: "Views/Home",
} as ComponentMeta<typeof HomeView>;

const Template: ComponentStory<typeof HomeView> = (args) => {
  return <HomeView {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
