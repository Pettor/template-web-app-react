import type { ReactElement } from "react";
import AppHeaderDivider from "../app-header-divider/AppHeaderDivider";
import AppHeaderGroupContainer from "./AppHeaderGroupContainer";
import AppHeaderGroupContent from "./AppHeaderGroupContent";

type DividerStyle = "none" | "left" | "right" | "both";

interface Props {
  dividerStyle?: DividerStyle;
  children?: ReactElement | ReactElement[];
}

export default function AppHeaderGroup({ dividerStyle = "both", children }: Props): ReactElement {
  function drawDivider(placement: DividerStyle): ReactElement {
    if (dividerStyle === "both" || dividerStyle === placement) {
      return <AppHeaderDivider />;
    }

    return <></>;
  }

  return (
    <AppHeaderGroupContainer>
      {drawDivider("left")}
      <AppHeaderGroupContent>{children}</AppHeaderGroupContent>
      {drawDivider("right")}
    </AppHeaderGroupContainer>
  );
}
