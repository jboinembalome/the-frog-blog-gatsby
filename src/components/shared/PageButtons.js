import { Link } from "gatsby";
import React from "react";

const PageButtons = ({ pageContext }) => {
  const { numPages, currentPage } = pageContext;
  if (!numPages || !currentPage) return null;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prev = currentPage === 2 ? "/blog" : `/blog/page/${currentPage - 1}`;
  const next = currentPage + 1;

  return (
    <>
      {!isFirst && (
        <Link
          to={prev}
          rel="prev"
          className="bg-black text-white font-extrabold p-2"
        >
          Previous
        </Link>
      )}
      {!isLast && (
        <Link
          to={`/blog/page/${next}`}
          rel="next"
          className="bg-black text-white font-extrabold p-2"
        >
          Next
        </Link>
      )}
    </>
  );
};

export default PageButtons;
