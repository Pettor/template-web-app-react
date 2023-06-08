import type { StyledComponent } from "@emotion/styled";
import { CardContent } from "@mui/material";
import type { CardContentProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { ProfileCardProps } from "./ProfileCardClasses";

export const ProfileCardContent: StyledComponent<CardContentProps & ProfileCardProps> = styled(CardContent, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<ProfileCardProps>(({ isMobile }) => ({
  paddingTop: isMobile ? 0 : 16,
}));
