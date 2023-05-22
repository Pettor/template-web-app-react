import { lazy } from "react";
import type { RouteProps } from "react-router-dom";

const ForgotPasswordPage = lazy(() =>
  import("~/pages/forgot-password/ForgotPasswordPage").then((module) => ({ default: module.ForgotPasswordPage }))
);
const LoginPage = lazy(() => import("~/pages/login/LoginPage").then((module) => ({ default: module.LoginPage })));
const SignUpPage = lazy(() => import("~/pages/sign-up/SignUpPage").then((module) => ({ default: module.SignUpPage })));

// Routes that are accessible to everyone
export function PublicRoutes(): RouteProps[] {
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
