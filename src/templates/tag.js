import React from "react";
import { graphql } from "gatsby";
import Blog from "../components/blog/Blog";
import Seo from "../components/shared/Seo";

const TagTemplatePage = ({
  data: { allMarkdownRemark: { edges: posts } },
  pageContext: { tag }
}) => (
  <>
    <h1 className="text-center text-5xl font-extrabold mt-8">{tag}</h1>
    {posts &&
      posts.map(({ node: post }) => (
        <Blog key={post.id} {...post.frontmatter} slug={post.fields.slug} />
      ))}
  </>
);

export const Head = ({ pageContext }) => <Seo title={pageContext.tag} />;

export default TagTemplatePage;

export const getPostsContainsTag = graphql`
  query GetPostsContainsTag($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
