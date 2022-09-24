import { IntlProvider } from "react-intl";
import AppRoutes from "./AppRoutes";
import { AuthProvider } from "./libs/auth/context/AuthContext";
import { validateCrypto } from "./libs/crypto/GetCrypto";
import AppTheme from "./theme/AppTheme";

function App() {
  typeof window !== "undefined" && validateCrypto();

  return (
    <AppTheme>
      <IntlProvider locale="en">
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </IntlProvider>
    </AppTheme>
  );
}

export default App;
