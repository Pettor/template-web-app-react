import { Box, Button } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { CommonDecorator } from "storybook-base";
import { useCounter } from "usehooks-ts";
import { ToastNotifier as Component } from "./ToastNotifier";
import { ToastNotifierProvider } from "./ToastNotifierContext";
import { useToastNotifier } from "./UseToastNotifier";

const meta = {
  title: "Library/Toast/Notifier",
  component: Component,
  decorators: [CommonDecorator],
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToastNotifier = {
  args: {},
  render: (props) => {
    return (
      <ToastNotifierProvider>
        <Box>
          <AddAlertComponent />
          <Component {...props} />
        </Box>
      </ToastNotifierProvider>
    );
  },
} satisfies Story;

function AddAlertComponent() {
  const { addToast } = useToastNotifier();
  const { count, increment } = useCounter();

  function handleClick() {
    increment();
    addToast({
      title: `Info title ${count}`,
      text: "Info text",
      timeout: 3000,
    });
  }

  return <Button onClick={handleClick}>Add Alert</Button>;
}
