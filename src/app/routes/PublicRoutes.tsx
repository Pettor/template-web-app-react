import { lazy } from "react";
import type { RouteProps } from "react-router-dom";

const ForgotPasswordPage = lazy(() => import("~/pages/forgot-password/ForgotPasswordPage"));
const LoginPage = lazy(() => import("~/pages/login/LoginPage"));
const SignUpPage = lazy(() => import("~/pages/sign-up/SignUpPage"));

// Routes that are accessible to everyone
export default function PublicRoutes(): RouteProps[] {
  return [
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/sign-up",
      element: <SignUpPage />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPasswordPage />,
    },
  ];
}
