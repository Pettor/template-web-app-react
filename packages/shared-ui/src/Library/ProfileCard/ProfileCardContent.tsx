import type { StyledComponent } from "@emotion/styled";
import { CardContent } from "@mui/material";
import type { CardContentProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { IProfileCardMobile } from "./ProfileCardClasses";

export const ProfileCardContent: StyledComponent<CardContentProps & IProfileCardMobile> = styled(CardContent, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<IProfileCardMobile>(({ isMobile }) => ({
  paddingTop: isMobile ? 0 : 16,
}));
