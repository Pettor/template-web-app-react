import type { ReactElement } from "react";
import Container from "@mui/material/Container";
import type { StoryFn } from "@storybook/react";

export function ContainerDecorator(Story: StoryFn): ReactElement {
  return (
    <Container maxWidth="sm">
      <Story />
    </Container>
  );
}
