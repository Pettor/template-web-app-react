import type { Decorator } from "@storybook/react";

export const CenterDecorator: Decorator = (Story) => {
  return <div className="flex w-full justify-center">{Story()}</div>;
};
