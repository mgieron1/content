const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 blogtitle1">
        <span>{process.env.INDEX_INTRO_TITLE1}</span>
        {process.env.INDEX_INTRO_TITLE2}
      </h1>
      <h4
        className="text-center md:text-left text-lg mt-5 md:pl-8 claim"
        dangerouslySetInnerHTML={{ __html: process.env.SLUG }}
      ></h4>
    </section>
  );
};

export default Intro;
