import type { ReactElement } from "react";
import { useCallback, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Alert as MuiAlert, Collapse, IconButton, AlertTitle } from "@mui/material";
import type { ToastOptions as ToastOptions } from "./ToastClasses";

export interface ToastProps extends ToastOptions {
  onClosed?: () => void;
}

export function Toast({ title, text, timeout = 0, onClosed, ...alertProps }: ToastProps): ReactElement {
  const [closed, setClosed] = useState<boolean>(false);

  useEffect(() => {
    if (!timeout) {
      return;
    }

    const id = setTimeout(() => {
      setClosed(true);
    }, timeout);

    return () => clearTimeout(id);
  }, [timeout]);

  const handleAlert = useCallback(() => {
    setClosed(true);
  }, []);

  const handleExited = useCallback(() => {
    onClosed?.();
  }, [onClosed]);

  return (
    <Collapse in={!closed} onExited={handleExited}>
      <MuiAlert
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={handleAlert}
            data-testid="auto-alert__close-button"
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
        data-testid="auto-alert__container"
        {...alertProps}
      >
        <AlertTitle>{title}</AlertTitle>
        {text}
      </MuiAlert>
    </Collapse>
  );
}
