import type { StyledComponent } from "@emotion/styled";
import { Card } from "@mui/material";
import type { CardProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { ProfileCardProps } from "./ProfileCardClasses";

export const ProfileCardContainer: StyledComponent<CardProps & ProfileCardProps> = styled(Card, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<ProfileCardProps>(({ isMobile }) => ({
  height: "auto",
  width: isMobile ? "100dvw" : 275,
}));