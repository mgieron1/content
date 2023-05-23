import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import Link from "next/link";

type Props = {
  keyword: string;
  title: string;
  date: string;
  slug: string;
};

const HeroPost = ({ title, date, slug, keyword }: Props) => {
  const image =
    "https://cdn.pixabay.com/photo/2017/03/13/07/34/photovoltaic-2138992_1280.jpg";
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={image} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            className="hover:underline"
          >
            <h4 className="uppercase">{keyword}</h4>
            <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">{title}</h3>
          </Link>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
