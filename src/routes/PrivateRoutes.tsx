import { lazy } from "react";
import { RouteProps } from "react-router-dom";

const HomePage = lazy(() => import("../pages/home/HomePage"));

// Routes that are accessible only to authenticated users
export default function PrivateRoutes(): RouteProps[] {
  return [
    {
      path: "/",
      element: <HomePage />,
    },
  ];
}
