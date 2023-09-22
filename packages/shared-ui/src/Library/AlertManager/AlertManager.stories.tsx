import { Box, Button } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { CommonDecorator } from "storybook-base";
import { useCounter } from "usehooks-ts";
import { AlertManager as Component } from "./AlertManager";
import { AlertManagerProvider } from "./AlertManagerContext";
import { useAlertManager } from "./UseAlertManager";

const meta = {
  title: "Library/Alert/Manager",
  component: Component,
  decorators: [CommonDecorator],
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AlertManager = {
  args: {},
  render: (props) => {
    return (
      <AlertManagerProvider>
        <Box>
          <AddAlertComponent />
          <Component {...props} />
        </Box>
      </AlertManagerProvider>
    );
  },
} satisfies Story;

function AddAlertComponent() {
  const { addAlert } = useAlertManager();
  const { count, increment } = useCounter();

  function handleClick() {
    increment();
    addAlert({
      title: `Info title ${count}`,
      text: "Info text",
      timeout: 3000,
    });
  }

  return <Button onClick={handleClick}>Add Alert</Button>;
}
