import type { ReactElement, Attributes } from "react";
import { cloneElement } from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";

export interface ElevationScrollProps<T> {
  getProps(trigger: boolean): T;
  children: ReactElement;
}

export function ElevationScroll<T extends Attributes>({ getProps, children }: ElevationScrollProps<T>): ReactElement {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement<T>(children, getProps(trigger));
}
