import AppLocales from "./AppLocales";
import AppRoutes from "./AppRoutes";
import { AuthProvider } from "./libs/auth/context/AuthContext";
import { validateCrypto } from "./libs/crypto/GetCrypto";
import AppTheme from "./theme/AppTheme";

function App() {
  typeof window !== "undefined" && validateCrypto();

  return (
    <AppTheme>
      <AppLocales>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </AppLocales>
    </AppTheme>
  );
}

export default App;
