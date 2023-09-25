import type { ReactElement } from "react";
import { AlertManager, AlertManagerProvider } from "shared-ui";

export interface RouteProviderProps {
  children: ReactElement | ReactElement[];
}

export function RouteProviders({ children }: RouteProviderProps): ReactElement {
  return (
    <AlertManagerProvider>
      <>{children}</>
      <AlertManager />
    </AlertManagerProvider>
  );
}
