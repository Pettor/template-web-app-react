import { ComponentMeta, ComponentStory } from "@storybook/react";
import AppMenu from "./AppMenu";
import AppMenuContent from "./content/AppMenuContent";

export default {
  component: AppMenu,
  title: "Layout/Menu",
} as ComponentMeta<typeof AppMenu>;

const Template: ComponentStory<typeof AppMenu> = (args) => {
  return (
    <AppMenu {...args}>
      <AppMenuContent />
    </AppMenu>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: true,
};
