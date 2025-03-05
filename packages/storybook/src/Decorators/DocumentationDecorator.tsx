import type { Decorator } from "@storybook/react";

export const DocumentationDecorator: Decorator = (Story) => {
  return (
    <>
      <div className="bg-opacity-50 fixed -top-[200px] -left-[200px] h-[400px] w-[400px] bg-[#c989e8] blur-[150px] content-none" />
      <div className="bg-opacity-50 fixed -top-[200px] -right-[200px] h-[400px] w-[400px] bg-[#b3d4ff] blur-[150px] content-none" />
      <div className="relative h-[100dvh] w-full overflow-auto">
        <div className="relative z-1 m-4">
          <Story />
        </div>
      </div>
    </>
  );
};
