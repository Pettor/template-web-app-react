import type { StyledComponent } from "@emotion/styled";
import { Card } from "@mui/material";
import type { CardProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ModalCardContainer: StyledComponent<CardProps> = styled(Card)(({ theme }) => ({
  height: "100%",
  minHeight: "inherit",
  width: "80vw",
  maxWidth: "1000px",
  borderRadius: theme.borderRadius.default,

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
