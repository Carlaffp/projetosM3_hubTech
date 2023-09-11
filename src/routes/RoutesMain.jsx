import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/loginPage";
import { DashboardPage } from "../pages/dashboardPage";
import { RegisterPage } from "../pages/registerPage";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { TechProvider } from "../providers/TechContext";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route
          path="/dashboard"
          element={
            <TechProvider>
              <DashboardPage />
            </TechProvider>
          }
        />
      </Route>
    </Routes>
  );
};
