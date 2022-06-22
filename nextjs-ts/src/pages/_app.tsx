import type { AppProps } from "next/app";
import "../styles/reset.css";
import "../styles/variables.css";
import { DefaultTemplate } from "../templates/DefaultTemplate";

function BaseApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultTemplate>
      <Component {...pageProps} />
    </DefaultTemplate>
  );
}

export default BaseApp;
