import type { StyledComponent } from "@emotion/styled";
import { Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PwaUpdateDialogDescription: StyledComponent<TypographyProps> = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  [theme.breakpoints.down("sm")]: {
    ...theme.typography.body2,
  },
}));
