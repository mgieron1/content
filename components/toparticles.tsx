import Post from "../interfaces/post";

type Props = {
  topPosts: Post[];
};

const TopArticles = ({ topPosts }: Props) => {
  const allPosts = topPosts.map((topPost, index) => {
    return (
      <a
        key={topPost.slug}
        className="toppost shadow"
        href={"/posts/" + topPost.slug}
      >
        <h2>{topPost.keyword}</h2>
        <h3>{topPost.title}</h3>
      </a>
    );
  });
  return <div className="toppost_list">{allPosts}</div>;
};

export default TopArticles;
