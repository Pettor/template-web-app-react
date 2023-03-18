import { ReactElement } from "react";
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
  open: boolean;
  onSubmit(): void;
}

export default function PwaOfflineDialog({ open, onSubmit }: Props): ReactElement {
  const intl = useIntl();

  return (
    <Snackbar open={open}>
      <ContainerBox>
        <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
          <DescriptionTypography>
            {intl.formatMessage({
              description: "PwaOfflineDialog- Ready to work offline description",
              defaultMessage: "Ready to work offline",
              id: "HQHLM4",
            })}
          </DescriptionTypography>
          <Button variant="contained" color="primary" onClick={onSubmit}>
            {intl.formatMessage({
              description: "PwaOfflineDialog - OK button",
              defaultMessage: "OK",
              id: "lrHj7q",
            })}
          </Button>
        </Stack>
      </ContainerBox>
    </Snackbar>
  );
}
