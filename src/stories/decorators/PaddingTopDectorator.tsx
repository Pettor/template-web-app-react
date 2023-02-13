/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from "react";
import Box from "@mui/material/Box";
import { StoryFn } from "@storybook/react";

export default function PaddingTopDectorator(Story: StoryFn): ReactElement {
  return (
    <Box sx={{ pt: 2 }}>
      <Story />
    </Box>
  );
}
