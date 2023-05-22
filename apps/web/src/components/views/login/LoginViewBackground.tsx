import type { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import type { StyledComponent } from "@emotion/styled";
import { styled } from "@mui/material/styles";

export const LoginViewBackground: StyledComponent<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
> = styled("img")(({ theme }) => ({
  position: "fixed",
  bottom: -50,
  left: 0,
  zIndex: 0,

  [theme.breakpoints.down("sm")]: {
    bottom: 0,
    width: "200%",
  },
}));
