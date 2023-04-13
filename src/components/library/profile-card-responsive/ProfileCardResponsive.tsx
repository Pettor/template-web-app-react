import type { ComponentProps, ReactElement } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ProfileCard from "../profile-card/ProfileCard";

interface Props extends Omit<ComponentProps<typeof ProfileCard>, "isMobile"> {}

export default function ProfileCardResponsive(props: Props): ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return <ProfileCard {...props} isMobile={isMobile} />;
}
