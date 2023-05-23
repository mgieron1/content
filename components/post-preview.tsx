import DateFormatter from "./date-formatter";
import Link from "next/link";
import CoverImage from "./cover-image";
import PostTags from "./post-tags";

type Props = {
  keyword: string;
  title: string;
  date: string;
  slug: string;
  image?: string;
  tags: string;
};

const PostPreview = ({ title, keyword, date, slug, tags }: Props) => {
  return (
    <Link
      as={`/posts/${slug}`}
      href="/posts/[slug]"
      className="hover:underline post-preview-link shadow"
    >
      <div className="post-preview">
        <h4 className="uppercase">{keyword}</h4>
        <h3 className="text-3xl mb-3 leading-snug">{title}</h3>

        <div className="text-lg mb-4">
          <PostTags tags={tags} />
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
