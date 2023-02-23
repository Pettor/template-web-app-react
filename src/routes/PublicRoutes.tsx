import { lazy, ReactElement } from "react";
import { Route } from "react-router-dom";
import PublicRouteLogic from "./logic/PublicRouteLogic";

const ForgotPasswordPage = lazy(() => import("../pages/login/ForgotPasswordPage"));
const LoginPage = lazy(() => import("../pages/login/LoginPage"));
const SignUpPage = lazy(() => import("../pages/login/SignUpPage"));

export default function PublicRoutes(): ReactElement {
  return (
    <Route element={<PublicRouteLogic />}>
      {
        // Place routes that doesn't require authentication here
      }
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Route>
  );
}
