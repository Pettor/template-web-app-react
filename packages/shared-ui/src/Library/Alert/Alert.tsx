import type { ReactElement } from "react";
import { useCallback, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Alert as MuiAlert, Collapse, IconButton } from "@mui/material";
import type { AlertProps } from "@mui/material/Alert";

export interface AutoAlertProps extends AlertProps {
  text?: string;
  timeout?: number;
  onClosed: () => void;
}

export function Alert({ text, timeout = 10000, ...alertProps }: AutoAlertProps): ReactElement {
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
  }, [setClosed]);

  return (
    <Collapse in={!closed}>
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
        {...alertProps}
      >
        {text}
      </MuiAlert>
    </Collapse>
  );
}
