/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { ReactElement } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements, Outlet } from "react-router-dom";
import { GlobalRoutes } from "./GlobalRoutes";
import { PrivateRouteLogic } from "./logic/PrivateRouteLogic";
import { PublicRouteLogic } from "./logic/PublicRouteLogic";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export function AppRoutes(): ReactElement {
  const queryClient = useQueryClient();

  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Outlet />}>
            <Route element={<PublicRouteLogic />}>
              {PublicRoutes().map((route) => (
                <Route key={route.path} {...route} />
              ))}
            </Route>
            <Route element={<PrivateRouteLogic />}>
              {PrivateRoutes().map((route) => (
                <Route key={route.path} {...route} />
              ))}
            </Route>
            <Route>
              {GlobalRoutes(queryClient).map((route) => (
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
