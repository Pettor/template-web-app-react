import type { ReactElement } from "react";
import { Suspense } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../auth/UseAuth";
import { RouteProviders } from "../RouteProviders";
import { RouteLoading } from "./RouteLoading";

export function PrivateRouteLogic(): ReactElement {
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
          <RouteProviders>
            <Outlet />
          </RouteProviders>
        </Suspense>
      );
    default:
      return <RouteLoading />;
  }
}
