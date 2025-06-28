import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app-router";
import QueryProvider from "./query";
import { Toaster } from "@/components";

const AppProvider = () => {
  return (
    <BrowserRouter>
      <QueryProvider>
        <AppRouter />
      </QueryProvider>
      <Toaster position="top-right" />
    </BrowserRouter>
  );
};

export default AppProvider;
