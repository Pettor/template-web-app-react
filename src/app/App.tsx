import type { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLocales from "./AppLocales";
import { AuthProvider } from "./auth/AuthContext";
import PwaProvider from "./pwa/PwaProvider";
import AppRoutes from "./routes/AppRoutes";
import AppTheme from "./theme/AppTheme";
import ThemeModeProvider from "./theme/ThemeModeContext";
import { validateCrypto } from "~/libs/crypto/GetCrypto";

const queryClient = new QueryClient();

export default function App(): ReactElement {
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
