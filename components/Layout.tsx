import React, { ReactNode } from "react";
import NavBar from "./NavBar";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div className="w-screen h-screen">
    <NavBar/>
    <div className="m-10 bg-gray-200 rounded-xl h-5/6">{props.children}</div>
  </div>
);

export default Layout;
