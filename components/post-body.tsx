import markdownStyles from "./markdown-styles.module.css";
import PostTags from "./post-tags";
import Related, { Links } from "./related";

type Props = {
  content: string;
  links?: Links[];
  keyword?: string;
  tags?: string;
};

const PostBody = ({ content, links, keyword, tags }: Props) => {
  const contentWithAd = content.replace(
    'article-aaa-get">',
    'article-aaa-get">' + process.env.POST_INTEXT_AD
  );

  return (
    <div className="max-w-3xl mx-auto postbody">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: contentWithAd }}
      />

      <div
        className={markdownStyles["markdown"] + " article-aaa"}
        dangerouslySetInnerHTML={{ __html: process.env.POST_AD }}
      ></div>

      {links && <Related links={links} />}
      <span className="keyword">{keyword}</span>
      <PostTags tags={tags} />
    </div>
  );
};

export default PostBody;
