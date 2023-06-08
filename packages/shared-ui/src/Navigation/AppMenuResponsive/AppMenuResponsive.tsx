import type { ComponentType, ReactElement } from "react";
import { useMemo } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AppMenu } from "../../Navigation";
import { AppMenuMobile } from "../../Navigation";
import type { MenuOptions } from "../AppMenu";

interface Props extends MenuOptions {}

export function AppMenuResponsive(props: Props): ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const AppMenuComponent: ComponentType<MenuOptions> = useMemo(() => {
    return isMobile ? AppMenuMobile : AppMenu;
  }, [isMobile]);

  return <AppMenuComponent {...props} />;
}
