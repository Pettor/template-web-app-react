import type { ReactElement } from "react";
import { Navbar } from "Navigation";
import { NavbarContentComponent } from "./NavbarContentComponent";

export function NavbarComponent(): ReactElement {
  return <Navbar title="Some Title" endElement={<NavbarContentComponent />} />;
}
