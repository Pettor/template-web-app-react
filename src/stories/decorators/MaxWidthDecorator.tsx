import Box from "@mui/material/Box";
import { StoryFn } from "@storybook/react";

export default function MaxWidthDecorator(Story: StoryFn) {
  return (
    <Box sx={{ maxWidth: 300 }}>
      <Story />
    </Box>
  );
}
