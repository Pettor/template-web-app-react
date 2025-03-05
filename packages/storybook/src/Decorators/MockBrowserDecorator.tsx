import type { Decorator } from "@storybook/react";

export const MockBrowserDecorator: Decorator = (Story) => {
  return (
    <div className="flex h-svh w-svw p-8">
      <div className="mockup-browser bg-base-300 flex h-full w-full flex-1 flex-col border">
        <div className="mockup-browser-toolbar">
          <div className="input">https://daisyui.com</div>
        </div>
        <div className="bg-base-200 flex h-full w-full flex-1 justify-center">
          <Story />
        </div>
      </div>
    </div>
  );
};
