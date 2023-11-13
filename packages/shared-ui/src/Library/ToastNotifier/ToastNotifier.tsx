import type { ReactElement } from "react";
import { List, ListItem, Snackbar } from "@mui/material";
import { useToastNotifier } from "./UseToastNotifier";

export function ToastNotifier(): ReactElement {
  const { toasts: alerts } = useToastNotifier();

  return (
    <Snackbar
      open={alerts.length > 0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <List>
        {alerts.map(({ id, element }) => (
          <ListItem key={id} disablePadding>
            {element}
          </ListItem>
        ))}
      </List>
    </Snackbar>
  );
}
