import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../auth/hooks/UseAuth";

function PublicRoutes(): JSX.Element {
  const { status } = useAuth();
  const location = useLocation();

  switch (status) {
    case "idle":
      return <></>;
    case "authenticating":
      return <Outlet />;
    case "authenticated":
      return <Navigate to="/" state={{ from: location }} />;
    default:
      return <></>;
  }
}

export default PublicRoutes;
