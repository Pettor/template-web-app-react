import type { ComponentProps, ReactElement } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ProfileCard } from "../ProfileCard/ProfileCard";

interface Props extends Omit<ComponentProps<typeof ProfileCard>, "isMobile"> {}

export function ProfileCardResponsive(props: Props): ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return <ProfileCard {...props} isMobile={isMobile} />;
}
