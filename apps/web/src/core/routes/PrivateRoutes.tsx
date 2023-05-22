import { lazy } from "react";
import type { RouteProps } from "react-router-dom";

const HomePage = lazy(() => import("~/pages/home/HomePage").then((module) => ({ default: module.HomePage })));

// Routes that are accessible only to authenticated users
export function PrivateRoutes(): RouteProps[] {
  return [
    {
      path: "/",
      element: <HomePage />,
    },
  ];
}
