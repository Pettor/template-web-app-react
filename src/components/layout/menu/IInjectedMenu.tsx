import { ComponentType } from "react";
import { IMenu } from "./IMenu";

export interface IInjectedMenu {
  menu: ComponentType<IMenu>;
  menuContent: JSX.Element | JSX.Element[];
}
