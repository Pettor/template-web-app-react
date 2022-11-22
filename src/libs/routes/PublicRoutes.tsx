import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../auth/hooks/UseAuth";

function PublicRoutes(): JSX.Element {
  const { status } = useAuth();
  const location = useLocation();

  switch (status) {
    default:
    case "idle":
      return <div>Loading...</div>;
    case "authenticating":
      return <Outlet />;
    case "authenticated":
      return <Navigate to="/" state={{ from: location }} />;
  }
}

export default PublicRoutes;
