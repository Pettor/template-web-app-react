import { ComponentProps } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ProfileCard from "./ProfileCard";

interface Props extends Omit<ComponentProps<typeof ProfileCard>, "isMobile"> {}

export default function ProfileCardResponsive(props: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return <ProfileCard {...props} isMobile={isMobile} />;
}
