import type { Decorator } from "@storybook/react";

export const MockPhoneDecorator: Decorator = (Story) => {
  return (
    <div className="flex flex-1 justify-center">
      <div className="item m-8">
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <Story />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
