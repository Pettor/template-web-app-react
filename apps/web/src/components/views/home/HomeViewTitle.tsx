import type { DetailedHTMLProps, HTMLAttributes } from "react";
import type { StyledComponent } from "@emotion/styled";
import { styled } from "@mui/material/styles";

export const HomeViewTitle: StyledComponent<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>> =
  styled("span")(({ theme }) => ({
    ...theme.typography.h1,
    background: theme.customBackgrounds.gradients.linear.variation1,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
  }));
