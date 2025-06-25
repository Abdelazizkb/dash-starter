import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NoMatch from "../layout/error/no-match";
import DashboardLayout from "@/layout/dashboard";

const DashboardRouter = lazy(() => import("../pages/dashboard/routes"));
const AuthRouter = lazy(() => import("../pages/auth/routes"));

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="/dashboard" />} />
      <Route
        path="/dashboard/*"
        element={
          <DashboardLayout>
            <DashboardRouter />
          </DashboardLayout>
        }
      />
      <Route path="/auth/*" element={<AuthRouter />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default AppRouter;
