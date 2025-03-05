import type { Decorator } from "@storybook/react";

export const ContainerDecorator: Decorator = (Story) => {
  return (
    <div className="container">
      <Story />
    </div>
  );
};
