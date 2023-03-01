import { ReactElement, Suspense } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../auth/UseAuth";
import RouteLoading from "./RouteLoading";

function PrivateRouteLogic(): ReactElement {
  const { status } = useAuth();
  const location = useLocation();

  switch (status) {
    case "idle":
      return <RouteLoading />;
    case "authenticating":
      return <Navigate to="/login" state={{ from: location }} />;
    case "authenticated":
      return (
        <Suspense fallback={<RouteLoading />}>
          <Outlet />
        </Suspense>
      );
    default:
      return <RouteLoading />;
  }
}

export default PrivateRouteLogic;