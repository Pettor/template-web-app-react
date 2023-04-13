import type { ReactElement } from "react";
import { cloneElement } from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";

interface Props<T> {
  getProps(trigger: boolean): T;
  children?: React.ReactElement;
}

export default function ElevationScroll<T extends React.Attributes>({ getProps, children }: Props<T>): ReactElement {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  if (!children) {
    return <></>;
  }

  return cloneElement<T>(children, getProps(trigger));
}
