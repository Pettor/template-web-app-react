import useAuth from "../../../../libs/auth/hooks/UseAuth";
import AppMenuContent from "./AppMenuContent";

function AppMenuContextExt() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return <AppMenuContent handleLogout={handleLogout} />;
}

export default AppMenuContextExt;
