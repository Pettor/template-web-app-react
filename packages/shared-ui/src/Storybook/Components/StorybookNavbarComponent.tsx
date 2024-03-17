import type { ReactElement } from "react";
import { Navbar } from "../../Navigation";
import { StorybookNavbarContentComponent } from "./StorybookNavbarContentComponent";

export function StorybookNavbarComponent(): ReactElement {
  return <Navbar title="Some Title" endElement={<StorybookNavbarContentComponent />} />;
}
