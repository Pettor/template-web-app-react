import { lazy, ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./libs/routes/PrivateRoutes";
import PublicRoutes from "./libs/routes/PublicRoutes";

const HomePage = lazy(() => import("./pages/home/HomePage"));
const ForgotPasswordPage = lazy(() => import("./pages/login/ForgotPasswordPage"));
const LoginPage = lazy(() => import("./pages/login/LoginPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const SignUpPage = lazy(() => import("./pages/login/SignUpPage"));

export default function AppRoutes(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
          {
            // Place routes that doesn't require authentication here
          }
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          {
            // Place routes that require authentication here
          }
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
