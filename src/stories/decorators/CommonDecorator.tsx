/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactElement } from "react";
import Box from "@mui/material/Box";
import type { StoryFn } from "@storybook/react";

export default function CommonDecorator(Story: StoryFn): ReactElement {
  return (
    <Box sx={{ p: 2 }}>
      <Story />
    </Box>
  );
}
