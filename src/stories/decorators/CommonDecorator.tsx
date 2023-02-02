/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@mui/material/Box";
import { StoryFn } from "@storybook/react";

export default function CommonDecorator(Story: StoryFn) {
  return (
    <Box sx={{ p: 2 }}>
      <Story />
    </Box>
  );
}
