import { ReactElement, Suspense } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../libs/auth/hooks/UseAuth";

function PublicRouteLogic(): ReactElement {
  const { status } = useAuth();
  const location = useLocation();

  switch (status) {
    case "idle":
      return <></>;
    case "authenticating":
      return (
        <Suspense fallback={<></>}>
          <Outlet />
        </Suspense>
      );
    case "authenticated":
      return <Navigate to="/" state={{ from: location }} />;
    default:
      return <></>;
  }
}

export default PublicRouteLogic;
