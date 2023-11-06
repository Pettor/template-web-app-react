import type { RouteProps } from "react-router-dom";

// Routes that are accessible to everyone
export function GlobalRoutes(): RouteProps[] {
  return [
    {
      path: "/about",
      lazy: () => import("~/pages/about/AboutRoute"),
    },
  ];
}
