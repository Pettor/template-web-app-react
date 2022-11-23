import AppLocales from "./AppLocales";
import AppRoutes from "./AppRoutes";
import ThemeModeProvider from "./components/library/toggle/theme-toggle/context/ThemeModeContext";
import { AuthProvider } from "./libs/auth/context/AuthContext";
import { validateCrypto } from "./libs/crypto/GetCrypto";
import AppTheme from "./theme/AppTheme";

function App() {
  typeof window !== "undefined" && validateCrypto();

  return (
    <ThemeModeProvider>
      <AppTheme>
        <AppLocales>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </AppLocales>
      </AppTheme>
    </ThemeModeProvider>
  );
}

export default App;
