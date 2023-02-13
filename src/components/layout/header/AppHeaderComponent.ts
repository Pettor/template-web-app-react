import { ReactElement, ReactNode } from "react";

export interface ClickableIconHeaderComponent {
  icon: ReactNode;
  onIconClick?(): void;
}

export interface MenuIconHeaderComponent {
  icon: ReactNode;
  MenuNode: ReactElement | ReactElement[];
}

export interface ResponsiveHeaderComponent {
  mobile?: StaticHeaderComponent | IconHeaderComponent;
  desktop?: StaticHeaderComponent | IconHeaderComponent;
}

export type StaticHeaderComponent = ReactElement | ReactElement[];

export type IconHeaderComponent = ClickableIconHeaderComponent | MenuIconHeaderComponent;

export type HeaderComponent = ResponsiveHeaderComponent | StaticHeaderComponent | IconHeaderComponent;

export function isResponsiveComponent(headerComponent: HeaderComponent): headerComponent is ResponsiveHeaderComponent {
  return "desktop" in headerComponent || "mobile" in headerComponent;
}

export function isStaticComponent(headerComponent: HeaderComponent): headerComponent is StaticHeaderComponent {
  return !isResponsiveComponent(headerComponent) && !isIconComponent(headerComponent);
}

export function isIconComponent(headerComponent: HeaderComponent): headerComponent is IconHeaderComponent {
  return "icon" in headerComponent;
}

export function isClickableIconComponent(
  headerComponent: IconHeaderComponent
): headerComponent is ClickableIconHeaderComponent {
  return "onIconClick" in headerComponent;
}

export function isMenuIconComponent(headerComponent: IconHeaderComponent): headerComponent is MenuIconHeaderComponent {
  return "MenuNode" in headerComponent;
}
