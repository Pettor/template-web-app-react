import type { ReactElement } from "react";
import { Fragment } from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import type { SnackbarProps } from "@mui/material/Snackbar";
import Snackbar from "@mui/material/Snackbar";
import { useIntl } from "react-intl";

interface Props extends Pick<SnackbarProps, "autoHideDuration"> {
  open: boolean;
  onClose(): void;
}

export default function PwaOfflineDialog({ open, autoHideDuration, onClose }: Props): ReactElement {
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
