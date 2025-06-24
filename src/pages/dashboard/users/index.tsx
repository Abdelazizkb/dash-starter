import { Routes, Route } from "react-router-dom";
import UsersList from "./list";

const Users = () => {
  return (
    <Routes>
      <Route index element={<UsersList />} />
    </Routes>
  );
};

export default Users;
