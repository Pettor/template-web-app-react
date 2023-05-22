import type { ReactElement } from "react";
import { Box } from "@mui/material";
import type { StoryFn } from "@storybook/react";

export function CommonDecorator(Story: StoryFn): ReactElement {
  return (
    <Box sx={{ p: 2 }}>
      <Story />
    </Box>
  );
}
