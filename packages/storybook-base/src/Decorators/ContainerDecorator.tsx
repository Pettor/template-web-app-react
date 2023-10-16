import type { ReactElement } from "react";
import type { StoryFn } from "@storybook/react";

export function ContainerDecorator(Story: StoryFn): ReactElement {
  return (
    <div className="container">
      <Story />
    </div>
  );
}
