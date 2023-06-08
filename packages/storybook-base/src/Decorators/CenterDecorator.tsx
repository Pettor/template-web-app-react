import type { ReactElement } from "react";
import { Box } from "@mui/material";
import type { StoryFn } from "@storybook/react";

export function CenterDecorator(Story: StoryFn): ReactElement {
  return (
    <Box sx={{ justifyContent: "center", display: "flex", width: "100%" }}>
      <Story />
    </Box>
  );
}
