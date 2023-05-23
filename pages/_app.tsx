import { AppProps } from "next/app";
import { GoogleAnalytics } from "nextjs-google-analytics";
import "../styles/index.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
};

export default App;
