import type { ReactElement } from "react";

export interface RouteProviderProps {
  children: ReactElement | ReactElement[];
}

export function RouteProviders({ children }: RouteProviderProps): ReactElement {
  return <>{children}</>;
}
