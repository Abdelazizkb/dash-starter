import { Routes, Route, Navigate } from "react-router-dom";
import Users from "./users";
import NoMatch from "../../layout/error/no-match";

const DashboardRouter = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="users" />} />
      <Route path="/users/*" element={<Users />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default DashboardRouter;
