import type { RouteProps } from "react-router-dom";
import type { HomePageProps } from "~/pages/home/HomePage";

// Routes that are accessible only to authenticated users
export function PrivateRoutes(): RouteProps[] {
  return [
    {
      path: "/",
      async loader(): Promise<HomePageProps> {
        const { loader } = await import("~/pages/home/HomeLoader");
        return loader();
      },
      lazy: () => import("~/pages/home/HomeRoute"),
    },
  ];
}
