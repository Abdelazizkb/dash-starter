import { type PropsWithChildren, Suspense } from "react";
import styles from "./styles.module.scss";
import Header from "./header";
import Sidebar from "./sidebar";
import { Loader, SidebarProvider } from "@/components";
import type { IMain } from "./main";
import Main from "./main";
interface ILayout extends React.FC<PropsWithChildren> {
  Main: IMain;
}

const DashboardLayout: ILayout = ({ children }) => {
  return (
    <SidebarProvider>
      <div className={styles.layout}>
        <Header />
        <main className="flex relative">
          <Sidebar />
          <div className="flex-1">
            <Suspense fallback={<Loader />}>{children}</Suspense>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

DashboardLayout.Main = Main;
export default DashboardLayout;
