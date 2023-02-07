import { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import AppLocales from "./AppLocales";
import AppRoutes from "./AppRoutes";
import ThemeModeProvider from "./components/library/toggle/theme-toggle/context/ThemeModeContext";
import { AuthProvider } from "./libs/auth/context/AuthContext";
import { validateCrypto } from "./libs/crypto/GetCrypto";
import AppTheme from "./theme/AppTheme";

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
