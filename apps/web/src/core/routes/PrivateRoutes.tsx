import type { QueryClient } from "@tanstack/react-query";
import { Route, type RouteProps } from "react-router-dom";
import type { HomePageProps } from "~/pages/home/HomePage";

// Routes that are accessible only to authenticated users
export function PrivateRoutes(queryClient: QueryClient): RouteProps[] {
  return [
    {
      path: "/",
      async loader(): Promise<HomePageProps> {
        const { loader } = await import("~/pages/home/HomeLoader");
        return loader();
      },
      lazy: () => import("~/pages/home/HomeRoute"),
      children: [
        <Route
          key="/version"
          path="/version"
          loader={async () => {
            const { loader } = await import("~/pages/about/AboutLoader");
            return loader(queryClient);
          }}
          lazy={() => import("~/pages/about/modal/AboutModalRoute")}
        />,
      ],
    },
  ];
}
