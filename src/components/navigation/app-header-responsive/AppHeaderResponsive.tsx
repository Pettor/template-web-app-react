import type { ComponentProps, ReactElement } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppHeader from "../app-header/AppHeader";

interface Props extends Omit<ComponentProps<typeof AppHeader>, "isMobile"> {}

export default function AppHeaderResponsive(props: Props): ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return <AppHeader isMobile={isMobile} {...props} />;
}
