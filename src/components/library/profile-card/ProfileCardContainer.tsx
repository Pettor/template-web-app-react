import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import type { ProfileCardProps } from "./ProfileCardClasses";

const ProfileCardContainer = styled(Card, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<ProfileCardProps>(({ isMobile }) => ({
  height: "auto",
  width: isMobile ? "100dvw" : 275,
}));

export default ProfileCardContainer;
