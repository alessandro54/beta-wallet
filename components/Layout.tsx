import React, {ReactNode, useContext} from "react";
import NavBar from "./NavBar";
import {AlertContext} from "../contexts/AlertProvider";
import Alerts from "./Alerts";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const [state, dispatch] = useContext(AlertContext)
  return (
    <main className="w-screen h-screen">
      <Alerts alerts={state.alerts}/>
      <NavBar/>
      <section className="bg-gray-400 h-main xl:h-main-xl">{props.children}</section>
    </main>
  );
}

export default Layout;
