import { lazy } from "react";
import { RouteProps } from "react-router-dom";

const ForgotPasswordPage = lazy(() => import("../pages/login/ForgotPasswordPage"));
const LoginPage = lazy(() => import("../pages/login/LoginPage"));
const SignUpPage = lazy(() => import("../pages/login/SignUpPage"));

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
