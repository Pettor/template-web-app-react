import type { ReactElement } from "react";
import { AlertManagerProvider } from "Library/AlertManager/AlertManagerContext";

export interface CoreLayoutProps {
  children: ReactElement | ReactElement[];
}

export function CoreLayout({ children }: CoreLayoutProps): ReactElement {
  return <AlertManagerProvider>{children}</AlertManagerProvider>;
}
