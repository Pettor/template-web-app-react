/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from "react";
import Box from "@mui/material/Box";
import { StoryFn } from "@storybook/react";

export default function CenterDecorator(Story: StoryFn): ReactElement {
  return (
    <Box sx={{ justifyContent: "center", display: "flex", width: "100%" }}>
      <Story />
    </Box>
  );
}
