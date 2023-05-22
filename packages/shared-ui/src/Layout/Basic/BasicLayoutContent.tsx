import type { StyledComponent } from "@emotion/styled";
import { Box } from "@mui/material";
import type { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const BasicLayoutContent: StyledComponent<BoxProps> = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(2),
  },

  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(0),
  },
}));
