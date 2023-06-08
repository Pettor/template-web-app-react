import type { ReactElement } from "react";
import { Box } from "@mui/material";
import type { StoryFn } from "@storybook/react";

export function MaxWidthDecorator(Story: StoryFn): ReactElement {
  return (
    <Box sx={{ maxWidth: 300 }}>
      <Story />
    </Box>
  );
}
