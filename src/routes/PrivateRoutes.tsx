import { lazy, ReactElement } from "react";
import { Route } from "react-router-dom";
import PrivateRouteLogic from "./logic/PrivateRouteLogic";

const ForgotPasswordPage = lazy(() => import("../pages/login/ForgotPasswordPage"));
const LoginPage = lazy(() => import("../pages/login/LoginPage"));
const SignUpPage = lazy(() => import("../pages/login/SignUpPage"));

export default function PrivateRoutes(): ReactElement {
  return (
    <Route element={<PrivateRouteLogic />}>
      {
        // Place routes that doesn't require authentication here
      }
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Route>
  );
}
