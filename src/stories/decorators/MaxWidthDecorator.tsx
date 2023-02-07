import { ReactElement } from "react";
import Box from "@mui/material/Box";
import { StoryFn } from "@storybook/react";

export default function MaxWidthDecorator(Story: StoryFn): ReactElement {
  return (
    <Box sx={{ maxWidth: 300 }}>
      <Story />
    </Box>
  );
}
