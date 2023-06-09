import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="de" className={process.env.WEBSITE}>
      <Head />
      <body style={{ backgroundImage: "url(" + process.env.BG_IMAGE + ")" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
