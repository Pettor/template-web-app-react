import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../auth/hooks/UseAuth";

function PrivateRoutes(): JSX.Element {
  const { status } = useAuth();
  const location = useLocation();

  switch (status) {
    default:
    case "idle":
      return <div>Loading...</div>;
    case "authenticating":
      return <Navigate to="/login" state={{ from: location }} />;
    case "authenticated":
      return <Outlet />;
  }
}

export default PrivateRoutes;
