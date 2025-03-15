import type { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { validateCrypto } from "react-package";
import { AppLocales } from "./AppLocales";
import { PwaProviderModule } from "~/components/modules/pwa-provider-module/PwaProviderModule";
import { AuthProvider } from "./auth/AuthProvider";

const queryClient = new QueryClient();

export interface AppProvidersProps {
  children: ReactElement;
}

export function AppProviders({ children }: AppProvidersProps): ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
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
