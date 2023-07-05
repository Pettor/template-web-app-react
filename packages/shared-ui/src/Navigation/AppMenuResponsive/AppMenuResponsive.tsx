import type { ComponentType, ReactElement } from "react";
import { useMemo } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AppMenu } from "../../Navigation";
import { AppMenuMobile } from "../../Navigation";
import type { IMenuOptions } from "../AppMenu";

export interface AppMenuResponsiveProps extends IMenuOptions {}

export function AppMenuResponsive(props: AppMenuResponsiveProps): ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const AppMenuComponent: ComponentType<IMenuOptions> = useMemo(() => {
    return isMobile ? AppMenuMobile : AppMenu;
  }, [isMobile]);

  return <AppMenuComponent {...props} />;
}
