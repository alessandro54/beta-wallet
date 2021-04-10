import { Provider } from "next-auth/client";
import { AppProps } from "next/app";
import { SWRConfig } from "swr"
import '../assets/styles/globals.css'
import 'swiper/swiper.scss';
import {AlertContextProvider} from "../app/context/AlertProvider";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher: (url : string, init?) => fetch(url, init).then(res => res.json())
        }}
      >
        <AlertContextProvider>
          <Component {...pageProps} />
        </AlertContextProvider>
      </SWRConfig>
    </Provider>
  );
};

export default App;
