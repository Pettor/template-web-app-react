import { type ReactElement } from "react";
import { AppProviders } from "./AppProviders";
import { AppRoutes } from "./routes/AppRoutes";

export function App(): ReactElement {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
}
