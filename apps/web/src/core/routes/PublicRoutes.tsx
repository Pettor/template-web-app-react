import type { RouteProps } from "react-router-dom";

// Routes that are accessible to everyone
export function PublicRoutes(): RouteProps[] {
  return [
    {
      path: "/login",
      lazy: () => import("~/pages/login/LoginRoute"),
    },
    {
      path: "/sign-up",
      lazy: () => import("~/pages/sign-up/SignUpRoute"),
    },
    {
      path: "/forgot-password",
      lazy: () => import("~/pages/forgot-password/ForgotPasswordRoute"),
    },
  ];
}
