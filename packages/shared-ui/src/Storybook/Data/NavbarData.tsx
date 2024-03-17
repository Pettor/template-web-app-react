import type { NavbarProps } from "Navigation";
import { NavbarContentComponent } from "Storybook/Components/NavbarContentComponent";

export const DefaultNavbarProps: NavbarProps = {
  title: "Some Title",
  endElement: <NavbarContentComponent />,
};
