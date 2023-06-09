import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            {/* Statically Generated with Next.js. */}
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="/pages/impressum"
              className="mx-3 font-bold hover:underline"
            >
              Impressum
            </a>
            <a
              href="/pages/datenschutz"
              className="mx-3 font-bold hover:underline"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
