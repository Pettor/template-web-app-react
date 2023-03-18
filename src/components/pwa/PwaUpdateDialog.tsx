import { ReactElement } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useIntl } from "react-intl";

interface Props {
  appName: string;
  update(): void;
}

const PlacementBox = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(4),
  left: 0,
  display: "flex",
  justifyContent: "center",
  width: "100%",
}));

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

export default function PwaUpdateDialog({ appName, update }: Props): ReactElement {
  const intl = useIntl();

  return (
    <PlacementBox>
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
          <Button variant="contained" color="primary" onClick={update}>
            {intl.formatMessage({
              description: "PwaUpdateDialog - Update button",
              defaultMessage: "Update",
              id: "Blpjtp",
            })}
          </Button>
        </Stack>
      </ContainerBox>
    </PlacementBox>
  );
}
