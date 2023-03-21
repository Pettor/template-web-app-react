import type { Key, ReactElement, ReactNode } from "react";

interface AppHeaderComponentOptions {
  flexItem?: boolean;
  fill?: boolean;
}

interface AppHeaderComponent {
  key: Key;
  component: HeaderComponent;
}

interface AppHeaderComponents {
  headerComponents?: AppHeaderComponent[];
  headerComponentOptions?: AppHeaderComponentOptions;
}

interface ClickableIconHeaderComponent {
  icon: ReactNode;
  onIconClick?(): void;
}

interface MenuIconHeaderComponent {
  icon: ReactNode;
  MenuNode: ReactElement | ReactElement[];
}

interface ResponsiveHeaderComponent {
  mobile?: StaticHeaderComponent | IconHeaderComponent;
  desktop?: StaticHeaderComponent | IconHeaderComponent;
}

type StaticHeaderComponent = ReactElement | ReactElement[];
type IconHeaderComponent = ClickableIconHeaderComponent | MenuIconHeaderComponent;
type HeaderComponent = ResponsiveHeaderComponent | StaticHeaderComponent | IconHeaderComponent;

function isResponsiveComponent(headerComponent: HeaderComponent): headerComponent is ResponsiveHeaderComponent {
  return "desktop" in headerComponent || "mobile" in headerComponent;
}

function isStaticComponent(headerComponent: HeaderComponent): headerComponent is StaticHeaderComponent {
  return !isResponsiveComponent(headerComponent) && !isIconComponent(headerComponent);
}

function isIconComponent(headerComponent: HeaderComponent): headerComponent is IconHeaderComponent {
  return "icon" in headerComponent;
}

function isClickableIconComponent(
  headerComponent: IconHeaderComponent
): headerComponent is ClickableIconHeaderComponent {
  return "onIconClick" in headerComponent;
}

function isMenuIconComponent(headerComponent: IconHeaderComponent): headerComponent is MenuIconHeaderComponent {
  return "MenuNode" in headerComponent;
}

export type {
  AppHeaderComponentOptions,
  AppHeaderComponent,
  AppHeaderComponents,
  HeaderComponent,
  IconHeaderComponent,
};
export { isStaticComponent, isIconComponent, isClickableIconComponent, isMenuIconComponent };
