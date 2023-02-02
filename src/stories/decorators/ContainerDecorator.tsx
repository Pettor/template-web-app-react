/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@mui/material/Container";
import { StoryFn } from "@storybook/react";

export default function ContainerDecorator(Story: StoryFn) {
  return (
    <Container maxWidth="sm">
      <Story />
    </Container>
  );
}
