import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
  mainkv?: string;
};

const Layout = ({ children, mainkv }: Props) => {
  const bgClass = "maincontainer bg_" + mainkv;
  return (
    <>
      <div className={bgClass}>
        <Meta />
        <div className="min-h-screen">
          <Alert />
          <main>{children}</main>
        </div>
        <div id="footera" className="border-b bg-neutral-50 border-neutral-200">
          <div
            className="py-2 text-center text-sm"
            dangerouslySetInnerHTML={{ __html: process.env.FOOTER_AD }}
          ></div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
