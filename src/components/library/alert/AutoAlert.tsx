import { ReactElement, useEffect, useMemo, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Alert, { AlertProps } from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import usePrevious from "~/libs/react/hooks/UsePrevious";

interface Props extends AlertProps {
  text?: string;
  hash?: string;
  autoClose?: boolean;
  timeout?: number;
}

function AutoAlert({ text, hash, autoClose = false, timeout = 10000, ...alertProps }: Props): ReactElement {
  const prevText = usePrevious(text);
  const prevHash = usePrevious(hash);
  const [userClose, setUserClose] = useState<boolean>(false);

  const finalText = useMemo(() => {
    if (prevText === text) {
      return false;
    }

    if (!text) {
      return false;
    }

    if (userClose) {
      setUserClose(false);
    }
    return true;
  }, [text]);

  useEffect(() => {
    if (prevHash === hash) {
      return;
    }

    setUserClose(false);
  }, [hash]);

  const showText = finalText && !userClose;

  useEffect(() => {
    if (!showText || !autoClose) {
      return;
    }

    const id = setTimeout(() => {
      setUserClose(true);
    }, timeout);

    return () => clearTimeout(id);
  }, [showText]);

  function handleAlert(): void {
    setUserClose(true);
  }

  return (
    <Collapse in={showText}>
      <Alert
        action={
          <IconButton aria-label="close" color="inherit" size="small" onClick={handleAlert}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
        {...alertProps}
      >
        {text}
      </Alert>
    </Collapse>
  );
}

export default AutoAlert;
