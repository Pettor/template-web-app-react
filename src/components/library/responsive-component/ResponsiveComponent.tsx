import type { ReactElement } from "react";
import { useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Props {
  mobile: ReactElement;
  desktop: ReactElement;
}

export default function ResponsiveComponent({ mobile, desktop }: Props): ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const component = useMemo(() => (isMobile ? mobile : desktop), [isMobile]);
  return component;
}
