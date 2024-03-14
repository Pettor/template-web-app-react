import type { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { validateCrypto } from "react-utils";
import { AppLocales } from "./AppLocales";
import { AuthProvider } from "./auth/AuthContext";
import { PwaProviderModule } from "~/components/modules/pwa-provider/PwaProviderModule";

const queryClient = new QueryClient();

export interface AppProvidersProps {
  children: ReactElement;
}

export function AppProviders({ children }: AppProvidersProps): ReactElement {
  typeof window !== "undefined" && validateCrypto();
  return (
    <AppLocales>
      <PwaProviderModule>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>{children}</AuthProvider>
        </QueryClientProvider>
      </PwaProviderModule>
    </AppLocales>
  );
}
