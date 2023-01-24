import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../auth/hooks/UseAuth";

function PrivateRoutes(): JSX.Element {
  const { status } = useAuth();
  const location = useLocation();

  switch (status) {
    case "idle":
      return <></>;
    case "authenticating":
      return <Navigate to="/login" state={{ from: location }} />;
    case "authenticated":
      return <Outlet />;
    default:
      return <></>;
  }
}

export default PrivateRoutes;
