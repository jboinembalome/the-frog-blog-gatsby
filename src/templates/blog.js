import * as React from "react";
import { graphql } from "gatsby";
import Seo from "../components/shared/Seo";
import Blog from "../components/blog/Blog";
import SearchBlogs from "../components/blog/SearchBlogs";
import PageButtons from "../components/shared/PageButtons";

const BlogPage = ({
  data: { allMarkdownRemark: { edges: posts } },
  pageContext
}) => (
  <>
    <h1 className="text-center text-5xl font-extrabold mt-8">Blog</h1>

    {/* ADD SEARCH BAR HERE */}
    <SearchBlogs />

    {posts &&
      posts.map(({ node: post }) => (
        <Blog key={post.id} {...post.frontmatter} slug={post.fields.slug} />
      ))}

    <PageButtons pageContext={pageContext} />
  </>
);

export const Head = () => <Seo title="Blog" />;

export default BlogPage;

export const blogPageQuery = graphql`
  query BlogPageQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
