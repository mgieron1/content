export type Links = {
  title: string;
  link: string;
};

type Props = {
  links: Links[];
};

const Related = ({ links }: Props) => {
  return links.length ? (
    <div className="related">
      <h5>Weiterlesen:</h5>
      <ul>
        {links.map((article) => (
          <li key={article.link}>
            <a key={article.link} href={"/" + article.link}>
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default Related;
