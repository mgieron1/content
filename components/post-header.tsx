import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";

type Props = {
  title: string;
  image?: string;
  date: string;
};

const PostHeader = ({ title, image, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
    </>
  );
};

export default PostHeader;
