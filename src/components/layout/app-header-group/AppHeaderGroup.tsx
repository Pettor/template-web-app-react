import type { ReactElement } from "react";
import AppHeaderDivider from "../app-header-divider/AppHeaderDivider";
import AppHeaderGroupContainer from "./AppHeaderGroupContainer";
import AppHeaderGroupContent from "./AppHeaderGroupContent";

type Props = {
  children: ReactElement | ReactElement[];
};

export default function AppHeaderGroup({ children }: Props): ReactElement {
  return (
    <AppHeaderGroupContainer>
      <AppHeaderDivider />
      <AppHeaderGroupContent>{children}</AppHeaderGroupContent>
      <AppHeaderDivider />
    </AppHeaderGroupContainer>
  );
}
