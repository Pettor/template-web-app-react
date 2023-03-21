import type { ReactElement } from "react";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRouteLogic from "./logic/PrivateRouteLogic";
import PublicRouteLogic from "./logic/PublicRouteLogic";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const NotFoundPage = lazy(() => import("~/pages/NotFoundPage"));

export default function AppRoutes(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        {
          // Routes that are accessible to everyone
        }
        <Route element={<PublicRouteLogic />}>
          {PublicRoutes().map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Route>
        {
          // Routes that are accessible only to authenticated users
        }
        <Route element={<PrivateRouteLogic />}>
          {PrivateRoutes().map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Route>
        {
          // 404 page
        }
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
