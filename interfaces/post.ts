import { Links } from "../components/related";

type PostType = {
  coverImage: string;
  keyword: string;
  slug: string;
  title: string;
  date: string;
  text: string;
  image?: string;
  image_small?: string;
  tags: string;
  links: Links[];
  mainkv: string;
};

export default PostType;
