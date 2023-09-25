import type { ReactElement } from "react";
import { Suspense } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../auth/UseAuth";
import { RouteProviders } from "../RouteProviders";
import { RouteLoading } from "./RouteLoading";

export function PublicRouteLogic(): ReactElement {
  const { status } = useAuth();
  const location = useLocation();

  switch (status) {
    case "idle":
      return <RouteLoading />;
    case "authenticating":
      return (
        <Suspense fallback={<RouteLoading />}>
          <RouteProviders>
            <Outlet />
          </RouteProviders>
        </Suspense>
      );
    case "authenticated":
      return <Navigate to="/" state={{ from: location }} />;
    default:
      return <RouteLoading />;
  }
}
