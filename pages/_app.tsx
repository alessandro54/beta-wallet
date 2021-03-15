import { Provider } from "next-auth/client";
import { AppProps } from "next/app";
import '../styles/globals.css'
import {AlertContextProvider} from "../contexts/AlertProvider";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <AlertContextProvider>
        <Component {...pageProps} />
      </AlertContextProvider>
    </Provider>
  );
};

export default App;
