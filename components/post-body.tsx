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
    <div className="articleflex">
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
      {process.env.WEBSITE === "erstehilfe" && (
        <div className="slug-a-right slug-a vis-desktop">
          <a
            style={{
              backgroundImage: "url(/assets/podcast.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              height: "100%",
            }}
            href="https://www.digistore24.com/redir/276717/diagnoseo/"
            target="_blank"
            rel="nofollow"
          >
            <div>
              <b className="">ONLINE ERSTE-HILFE-KURS</b>
              <span>Mit Teilnahme-Bescheinigung</span>
            </div>
            <p className="animate__animated animate__pulse animate__infinite">
              {">> "}Jetzt Informieren{" <<"}
            </p>
          </a>
        </div>
      )}
    </div>
  );
};

export default PostBody;
