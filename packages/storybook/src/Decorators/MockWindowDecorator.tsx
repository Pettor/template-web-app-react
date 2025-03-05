import type { Decorator } from "@storybook/react";

export const MockWindowDecorator: Decorator = (Story) => {
  return (
    <div className="flex h-svh w-svw">
      <div className="mockup-window bg-base-300 m-8 flex flex-1 border">
        <div className="bg-base-200 flex h-full w-full justify-center px-4 py-6">
          <Story />
        </div>
      </div>
    </div>
  );
};
