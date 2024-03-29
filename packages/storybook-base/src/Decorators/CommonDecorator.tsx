import type { ReactElement } from "react";
import type { StoryFn } from "@storybook/react";

export function CommonDecorator(Story: StoryFn): ReactElement {
  return (
    <div className="p-8">
      <Story />
    </div>
  );
}
