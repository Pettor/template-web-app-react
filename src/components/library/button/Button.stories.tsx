
export default {
  title: "Library/Button",
  decorators: [CommonDecorator],
};

export const Contained: Story = {
  render: (args) => <Component {...args}>Button</Component>,
  args: {
    variant: "contained",
  },
};

export const Outlined: Story = {
  render: (args) => <Component {...args}>Button</Component>,
  args: {
    variant: "outlined",
  },
};

export const Text: Story = {
  render: (args) => <Component {...args}>Button</Component>,
  args: {
    variant: "text",
  },
};
