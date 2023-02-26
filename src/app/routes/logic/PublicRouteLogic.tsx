import { ReactElement, Suspense } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../auth/UseAuth";
import RouteLoading from "./RouteLoading";

function PublicRouteLogic(): ReactElement {
  const { status } = useAuth();
  const location = useLocation();

  switch (status) {
    case "idle":
      return <RouteLoading />;
    case "authenticating":
      return (
        <Suspense fallback={<RouteLoading />}>
          <Outlet />
        </Suspense>
      );
    case "authenticated":
      return <Navigate to="/" state={{ from: location }} />;
    default:
      return <RouteLoading />;
  }
}

export default PublicRouteLogic;
