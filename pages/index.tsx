import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../interfaces/post";
import TopArticles from "../components/toparticles";
import CookieConsent from "../components/CookieConsent";

type Props = {
  allPosts: Post[];
  topPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const topKeywordsArray = process.env.TOP_KEYWORDS.split(",");
  const topPosts = allPosts.filter((post) =>
    topKeywordsArray.includes(post.keyword)
  );

  const newPosts = allPosts.slice(-3);

  const morePosts = allPosts.filter(
    (post) => !topKeywordsArray.includes(post.keyword)
  );

  return (
    <>
      <Layout>
        <Head>
          {process.env.ADSENSE_ID && (
            <script
              async
              src={
                "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" +
                process.env.ADSENSE_ID
              }
              crossOrigin="anonymous"
            ></script>
          )}
          <title>{process.env.HOME_TITLE}</title>
          <meta
            name="robots"
            content={process.env.ROBOTS_INDEX || "index,follow"}
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
        </Head>
        <Container>
          <Intro />
          <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight homeheads">
            Top Themen
          </h2>
          <TopArticles topPosts={topPosts} />
          <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight homeheads">
            Neue Themen
          </h2>
          <TopArticles topPosts={newPosts} />
          <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight homeheads">
            Weitere Themen{" "}
            <sup>
              <small>({morePosts.length})</small>
            </sup>
          </h2>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
      <CookieConsent />
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = await getAllPosts();

  return {
    props: { allPosts },
  };
};
