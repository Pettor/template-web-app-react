import type { ReactElement } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { ProfileCardProps } from "../ProfileCard/ProfileCard";
import { ProfileCard } from "../ProfileCard/ProfileCard";

export interface ProfileCardResponsiveProps extends Omit<ProfileCardProps, "isMobile"> {}

export function ProfileCardResponsive(props: ProfileCardResponsiveProps): ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return <ProfileCard {...props} isMobile={isMobile} />;
}
