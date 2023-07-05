import type { ComponentProps, ReactElement } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ProfileCard } from "../ProfileCard/ProfileCard";

export interface ProfileCardResponsiveProps extends Omit<ComponentProps<typeof ProfileCard>, "isMobile"> {}

export function ProfileCardResponsive(props: ProfileCardResponsiveProps): ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return <ProfileCard {...props} isMobile={isMobile} />;
}
