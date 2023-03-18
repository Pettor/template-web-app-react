import type { ReactElement } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useIntl } from "react-intl";

const ContainerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.borderRadius.md,
  margin: theme.spacing(1),
}));

const DescriptionTypography = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  [theme.breakpoints.down("sm")]: {
    ...theme.typography.body2,
  },
}));

interface Props {
  appName: string;
  open: boolean;
  onUpdate(): void;
}

export default function PwaUpdateDialog({ appName, open, onUpdate }: Props): ReactElement {
  const intl = useIntl();

  return (
    <Snackbar open={open} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
      <ContainerBox>
        <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
          <DescriptionTypography
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
      </ContainerBox>
    </Snackbar>
  );
}
