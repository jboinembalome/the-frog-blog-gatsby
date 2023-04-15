import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

const SimpleBlog = ({ title, date, slug }) => {
  return (
    <div className="flex justify-center mt-5">
      <Link
        to={slug}
        className="relative inline-block px-4 py-2 font-medium grou"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
        <span className="relative text-black group-hover:text-white">{title}</span>
        <time className="relative text- font-extrabold group-hover:text-white">
          {date}
        </time>
      </Link>
    </div>
  );
};

const getMostRecentBlogsQuery = graphql`
  query {
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
      limit: 3
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "ddd, MMM D, YYYY")
            tags
          }
        }
      }
    }
  }
`;

const MostRecentBlogs = () => {
  const {
    allMarkdownRemark: { edges: posts },
  } = useStaticQuery(getMostRecentBlogsQuery);

  return (
    <>
      {posts &&
        posts.map(({ node: post }) => (
          <div className="flex justify-center mt-5" key={post.id}>
            <SimpleBlog
              key={post.id}
              {...post.frontmatter}
              slug={post.fields.slug}
            />
          </div>
        ))}
    </>
  );
};

export default MostRecentBlogs;
