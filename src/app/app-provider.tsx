import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app-router";

const AppProvider = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default AppProvider;
