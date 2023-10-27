import type { RouteProps } from "react-router-dom";

// Routes that are accessible to everyone
export function PublicRoutes(): RouteProps[] {
  return [
    {
      path: "/about",
      lazy: () => import("~/pages/about/AboutPage"),
    },
    {
      path: "/login",
      lazy: () => import("~/pages/login/LoginPage"),
    },
    {
      path: "/sign-up",
      lazy: () => import("~/pages/sign-up/SignUpPage"),
    },
    {
      path: "/forgot-password",
      lazy: () => import("~/pages/forgot-password/ForgotPasswordPage"),
    },
  ];
}
