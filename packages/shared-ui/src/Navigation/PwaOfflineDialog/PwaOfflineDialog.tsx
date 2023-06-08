import type { ReactElement } from "react";
import { Fragment } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Snackbar } from "@mui/material";
import type { SnackbarProps } from "@mui/material";
import { useIntl } from "react-intl";

interface Props extends Pick<SnackbarProps, "autoHideDuration"> {
  open: boolean;
  onClose(): void;
}

export function PwaOfflineDialog({ open, autoHideDuration, onClose }: Props): ReactElement {
  const intl = useIntl();

  const action = (
    <Fragment>
      <IconButton size="small" aria-label="close" color="inherit" onClick={onClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      message={intl.formatMessage({
        description: "PwaOfflineDialog- Ready to work offline description",
        defaultMessage: "Ready to work offline",
        id: "HQHLM4",
      })}
      action={action}
    />
  );
}
