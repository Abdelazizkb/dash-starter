import type { PropsWithChildren } from "react";

export interface IMain extends React.FC<PropsWithChildren> {
  Header: React.FC<PropsWithChildren>;
  Content: React.FC<PropsWithChildren>;
}

const Main: IMain = ({ children }) => {
  return <div className="p-4 flex flex-col items-start gap-4">{children}</div>;
};

const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex">{children}</div>;
};

const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="">{children}</div>;
};

Main.Content = Content;
Main.Header = Header;

export default Main;
