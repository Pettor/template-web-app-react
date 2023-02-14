import { cloneElement, ReactElement } from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";

interface Props<T> {
  getProps(trigger: boolean): T;
  children: React.ReactElement;
}

export default function ElevationScroll<T extends React.Attributes>({ getProps, children }: Props<T>): ReactElement {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement<T>(children, getProps(trigger));
}
