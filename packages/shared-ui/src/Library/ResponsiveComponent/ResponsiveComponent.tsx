import type { ReactElement } from "react";
import { useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export interface ResponsiveComponentProps {
  mobile: ReactElement;
  desktop: ReactElement;
}

export function ResponsiveComponent({ mobile, desktop }: ResponsiveComponentProps): ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const component = useMemo(() => (isMobile ? mobile : desktop), [isMobile]);
  return component;
}
