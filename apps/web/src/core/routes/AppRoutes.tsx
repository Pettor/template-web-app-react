/* eslint-disable @typescript-eslint/explicit-function-return-type */

import type { ReactElement } from "react";
import React from "react";
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements, Outlet } from "react-router-dom";
import { GlobalRoutes } from "./GlobalRoutes";
import { PrivateRouteLogic } from "./logic/PrivateRouteLogic";
import { PublicRouteLogic } from "./logic/PublicRouteLogic";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

function Layout(): ReactElement {
  return <Outlet />;
}

export function AppRoutes(): ReactElement {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Layout />}>
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
              {GlobalRoutes().map((route) => (
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
