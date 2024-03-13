import { type ReactElement } from "react";
import { AppProviders } from "./AppProviders";
import { AppTheme } from "./AppTheme";
import { AppRoutes } from "./routes/AppRoutes";

export function App(): ReactElement {
  return (
    <AppProviders>
      <AppTheme>
        <AppRoutes />
      </AppTheme>
    </AppProviders>
  );
}
