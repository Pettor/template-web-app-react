import { ReactElement, Suspense } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../libs/auth/hooks/UseAuth";

function PrivateRouteLogic(): ReactElement {
  const { status } = useAuth();
  const location = useLocation();

  switch (status) {
    case "idle":
      return <></>;
    case "authenticating":
      return <Navigate to="/login" state={{ from: location }} />;
    case "authenticated":
      return (
        <Suspense fallback={<></>}>
          <Outlet />
        </Suspense>
      );
    default:
      return <></>;
  }
}

export default PrivateRouteLogic;
