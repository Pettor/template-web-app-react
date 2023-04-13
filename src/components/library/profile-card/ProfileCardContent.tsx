import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import type { ProfileCardProps } from "./ProfileCardClasses";

const ProfileCardContent = styled(CardContent, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<ProfileCardProps>(({ isMobile }) => ({
  paddingTop: isMobile ? 0 : 16,
}));

export default ProfileCardContent;
