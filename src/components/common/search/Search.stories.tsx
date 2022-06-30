import Box from "@mui/material/Box";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CommonDecorator } from "../../../stories/decorators/CommonDecorator";
import Search from "./Search";

export default {
  component: Search,
  title: "Common/Search",
  decorators: [CommonDecorator],
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => {
  return (
    <Box sx={{ maxWidth: 300 }}>
      <Search {...args} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
