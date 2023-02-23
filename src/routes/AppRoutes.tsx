import { lazy, ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

export default function AppRoutes(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <PublicRoutes />
        <PrivateRoutes />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
