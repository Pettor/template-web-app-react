import type { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { validateCrypto } from "react-utils";
import { AppLocales } from "./AppLocales";
import { AuthProvider } from "./auth/AuthContext";
import { PwaProvider } from "./pwa/PwaProvider";
import { AppRoutes } from "./routes/AppRoutes";
import { AppTheme } from "./theme/AppTheme";
import { ThemeModeProvider } from "./theme/ThemeModeContext";

const queryClient = new QueryClient();

export function App(): ReactElement {
  typeof window !== "undefined" && validateCrypto();
  return (
    <ThemeModeProvider>
      <AppTheme>
        <AppLocales>
          <PwaProvider>
            <QueryClientProvider client={queryClient}>
              <AuthProvider>
                <AppRoutes />
              </AuthProvider>
            </QueryClientProvider>
          </PwaProvider>
        </AppLocales>
      </AppTheme>
    </ThemeModeProvider>
  );
}
