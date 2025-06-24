import { type PropsWithChildren, Suspense } from "react";
import styles from "./styles.module.scss";
import { Loader } from "lucide-react";
import Header from "./header";

interface ILayout extends React.FC<PropsWithChildren> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Main: any;
}

const DashboardLayout: ILayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
    </div>
  );
};

DashboardLayout.Main = undefined;
export default DashboardLayout;
