import type { ReactElement } from "react";
import Stack from "@mui/material/Stack";
import { AppHeaderDivider } from "../../Navigation";
import { AppHeaderGroupContainer } from "./AppHeaderGroupContainer";
import { AppHeaderGroupContent } from "./AppHeaderGroupContent";

type DividerStyle = "none" | "left" | "right" | "both";

export interface AppHeaderGroupProps {
  spacing?: number;
  dividerStyle?: DividerStyle;
  children?: ReactElement | ReactElement[];
}

export function AppHeaderGroup({ spacing = 1, dividerStyle = "both", children }: AppHeaderGroupProps): ReactElement {
  function drawDivider(placement: DividerStyle): ReactElement {
    if (dividerStyle === "both" || dividerStyle === placement) {
      return <AppHeaderDivider />;
    }

    return <></>;
  }

  return (
    <AppHeaderGroupContainer>
      {drawDivider("left")}
      <AppHeaderGroupContent>
        <Stack spacing={spacing} direction="row">
          {children}
        </Stack>
      </AppHeaderGroupContent>
      {drawDivider("right")}
    </AppHeaderGroupContainer>
  );
}
