import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app-router";
import QueryProvider from "./query";

const AppProvider = () => {
  return (
    <BrowserRouter>
      <QueryProvider>
        <AppRouter />
      </QueryProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
