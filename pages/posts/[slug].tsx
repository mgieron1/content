import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import type PostType from "../../interfaces/post";
import Head from "next/head";
import { useEffect } from "react";

type Props = {
  post: PostType;
  preview?: boolean;
};

export default function Post({ post, preview }: Props) {
  const router = useRouter();
  const title = post.title;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  useEffect(() => {
    if (process.browser) {
      document.body.className = post.mainkv;
    }

    return () => {
      if (process.browser) {
        document.body.className = "";
      }
    };
  });

  return (
    <Layout preview={preview} mainkv={post.mainkv}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>...</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title.replace("<b>", "").replace("</b>", "")}</title>
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
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
              </Head>
              <PostTitle>
                <div
                  className="posttitle"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </PostTitle>
              <PostBody
                content={post.text}
                links={post.links}
                keyword={post.keyword}
                tags={post.tags}
              />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = await getPostBySlug(params.slug);

  //const content = await markdownToHtml(post.content || "");
  const content = post.text;

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
