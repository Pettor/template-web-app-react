import type { ReactElement } from "react";
import { Button, Snackbar, Stack } from "@mui/material";
import { useIntl } from "react-intl";
import { PwaUpdateDialogContainer } from "./PwaUpdateDialogContainer";
import { PwaUpdateDialogDescription } from "./PwaUpdateDialogDescription";

interface Props {
  appName: string;
  open: boolean;
  onUpdate(): void;
}

export function PwaUpdateDialog({ appName, open, onUpdate }: Props): ReactElement {
  const intl = useIntl();

  return (
    <Snackbar open={open} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
      <PwaUpdateDialogContainer>
        <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
          <PwaUpdateDialogDescription
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage(
                {
                  description: "PwaUpdateDialog - Update available description",
                  defaultMessage: "A new version of <b>{appName}</b> is available",
                  id: "GjhGOZ",
                },
                {
                  appName: appName,
                  b: (...chunks) => `<b>${chunks}</b>`,
                }
              ),
            }}
          />
          <Button variant="contained" color="primary" onClick={onUpdate}>
            {intl.formatMessage({
              description: "PwaUpdateDialog - Update button",
              defaultMessage: "Update",
              id: "Blpjtp",
            })}
          </Button>
        </Stack>
      </PwaUpdateDialogContainer>
    </Snackbar>
  );
}