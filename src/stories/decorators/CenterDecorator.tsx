/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@mui/material/Box";
import { StoryFn } from "@storybook/react";

export default function CenterDecorator(Story: StoryFn) {
  return (
    <Box sx={{ justifyContent: "center", display: "flex", width: "100%" }}>
      <Story />
    </Box>
  );
}
