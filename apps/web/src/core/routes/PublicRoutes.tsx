import type { QueryClient } from "@tanstack/react-query";
import type { RouteProps } from "react-router-dom";
import type { AboutPageProps } from "~/pages/about/AboutPage";

// Routes that are accessible to everyone
export function PublicRoutes(queryClient: QueryClient): RouteProps[] {
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
    {
      path: "/about",
      async loader(): Promise<AboutPageProps> {
        const { loader } = await import("~/pages/about/AboutLoader");
        return loader(queryClient);
      },
      lazy: () => import("~/pages/about/AboutRoute"),
    },
  ];
}
