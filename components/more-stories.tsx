import React, { useRef, useState } from "react";
import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import { useRouter } from "next/router";

type Props = {
  posts: Post[];
};

function MoreStories({ posts }: Props) {
  const router = useRouter();
  const { asPath } = useRouter();
  const hash = Number(asPath.split("#")[1]) || 1;
  const [currentPage, setCurrentPage] = useState(hash);
  const myRef = useRef(null);
  const dataPerPage = 10;
  // Berechnung des Index des ersten und letzten Elements auf der aktuellen Seite
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = posts.slice(indexOfFirstData, indexOfLastData);
  const countPages = Math.ceil(posts.length / dataPerPage);

  // Funktion zum Wechseln der Seite
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    router.push({
      pathname: "/",
      hash: pageNumber === 1 ? null : pageNumber.toString(),
    });
    myRef.current.scrollIntoView();
  };

  const pagination = () => {
    const showStart = currentPage - 4;
    const showEnd = currentPage + 4;
    return (
      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => paginate(1)}>
          {"<<"}
        </button>
        <button
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
        >
          {"<"}
        </button>
        {Array.from(Array(countPages).keys()).map(
          (data, index) =>
            index > showStart &&
            index < showEnd && (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={index + 1 === currentPage ? "active" : ""}
              >
                {index + 1}
              </button>
            )
        )}

        <button
          disabled={currentPage === countPages}
          onClick={() => paginate(currentPage + 1)}
        >
          {">"}
        </button>
        <button
          disabled={currentPage === countPages}
          onClick={() => paginate(countPages)}
        >
          {">>"}
        </button>
      </div>
    );
  };

  return (
    <section>
      <div
        className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-12 gap-y-20 md:gap-y-12 mb-32"
        ref={myRef}
      >
        {currentData.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            keyword={post.keyword}
            image={post.image_small}
            tags={post.tags}
          />
        ))}
      </div>

      {pagination()}
    </section>
  );
}

export default MoreStories;
