import type { ReactElement } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { RouterProvider, Route, createHashRouter, createRoutesFromElements, Outlet } from "react-router-dom";
import { PrivateRouteLogic } from "./logic/PrivateRouteLogic";
import { PublicRouteLogic } from "./logic/PublicRouteLogic";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export function AppRoutes(): ReactElement {
  const queryClient = useQueryClient();

  return (
    <RouterProvider
      router={createHashRouter(
        createRoutesFromElements(
          <Route path="/" element={<Outlet />}>
            <Route element={<PublicRouteLogic />}>
              {PublicRoutes(queryClient).map((route) => (
                <Route key={route.path} {...route} />
              ))}
            </Route>
            <Route element={<PrivateRouteLogic />}>
              {PrivateRoutes(queryClient).map((route) => (
                <Route key={route.path} {...route} />
              ))}
            </Route>
            <Route path="*" lazy={() => import("../../pages/not-found/NotFoundRoute")} />
          </Route>
        )
      )}
    />
  );
}
