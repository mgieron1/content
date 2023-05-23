type Props = {
  tags: string;
};

const PostTags = ({ tags }: Props) => {
  if (!tags) return null;
  const tagsArray = tags.split(",");

  return (
    <div className="post-tagslist">
      {tagsArray.map((item, i) => (
        <em className="tag" key={item + i}>
          {item.trim()}{" "}
        </em>
      ))}
    </div>
  );
};

export default PostTags;
