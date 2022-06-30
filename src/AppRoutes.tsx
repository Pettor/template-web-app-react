import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./libs/routes/PrivateRoutes";
import PublicRoutes from "./libs/routes/PublicRoutes";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import ResetPasswordPage from "./pages/login/ResetPasswordPage";
import SignUpPage from "./pages/login/SignUpPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
          {
            // Place routes that doesn't require authentication here
          }
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ResetPasswordPage />} />
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

export default AppRoutes;
