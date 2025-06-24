import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import NoMatch from "../../layout/error/no-match";

const AuthRouter = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="login" />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default AuthRouter;
