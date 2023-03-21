/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactElement } from "react";
import Box from "@mui/material/Box";
import type { StoryFn } from "@storybook/react";

export default function CenterDecorator(Story: StoryFn): ReactElement {
  return (
    <Box sx={{ justifyContent: "center", display: "flex", width: "100%" }}>
      <Story />
    </Box>
  );
}
