import type { RouteProps } from "react-router-dom";

// Routes that are accessible only to authenticated users
export function PrivateRoutes(): RouteProps[] {
  return [
    {
      path: "/",
      lazy: () => import("~/pages/home/HomeRoute"),
    },
  ];
}
