import { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { validateCrypto } from "../libs/crypto/GetCrypto";
import AppLocales from "./AppLocales";
import { AuthProvider } from "./auth/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import AppTheme from "./theme/AppTheme";
import ThemeModeProvider from "./theme/ThemeModeContext";
const queryClient = new QueryClient();

export default function App(): ReactElement {
  typeof window !== "undefined" && validateCrypto();

  return (
    <ThemeModeProvider>
      <AppTheme>
        <AppLocales>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <AppRoutes />
            </AuthProvider>
          </QueryClientProvider>
        </AppLocales>
      </AppTheme>
    </ThemeModeProvider>
  );
}
