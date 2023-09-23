import type { ReactElement } from "react";
import { List, ListItem, Snackbar } from "@mui/material";
import { useAlertManager } from "./UseAlertManager";

export function AlertManager(): ReactElement {
  const { alerts } = useAlertManager();

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
