import React, { ReactNode } from "react";
import NavBar from "./NavBar";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div className="w-screen h-screen">
    <NavBar/>
    <div className="p-10 bg-blue-100 h-5/6">{props.children}</div>
  </div>
);

export default Layout;
