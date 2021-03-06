import React, {ReactNode, useContext} from "react";
import TopBar from "./TopBar";
import {AlertContext} from "../context/AlertProvider";
import Alerts from "./Alerts";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const [state, dispatch] = useContext(AlertContext)
  return (
    <main className="w-screen h-screen">
      <Alerts alerts={state.alerts}/>
      <TopBar/>
      <section className="h-main md:h-main-xl bg-gradient-to-b from-blue-500 via-purple-500 to-purple-500">
        {props.children}
      </section>
    </main>
  );
}

export default Layout;
