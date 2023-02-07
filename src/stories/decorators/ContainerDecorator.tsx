/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from "react";
import Container from "@mui/material/Container";
import { StoryFn } from "@storybook/react";

export default function ContainerDecorator(Story: StoryFn): ReactElement {
  return (
    <Container maxWidth="sm">
      <Story />
    </Container>
  );
}
