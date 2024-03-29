import type { ReactElement } from "react";
import type { StoryFn } from "@storybook/react";

export function FullSizeDecorator(Story: StoryFn): ReactElement {
  return (
    <div className="flex flex-col h-svh w-svw">
      <Story />
    </div>
  );
}
