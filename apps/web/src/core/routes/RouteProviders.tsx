import type { ReactElement } from "react";
import { ToastNotifier, ToastNotifierProvider } from "shared-ui";

export interface RouteProviderProps {
  children: ReactElement | ReactElement[];
}

export function RouteProviders({ children }: RouteProviderProps): ReactElement {
  return (
    <ToastNotifierProvider>
      <>{children}</>
      <ToastNotifier />
    </ToastNotifierProvider>
  );
}
