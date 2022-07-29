import * as React from "react";
import { graphql } from "gatsby";
import Seo from "../components/shared/Seo";
import { Disqus } from "gatsby-plugin-disqus";
import DateWithIcon from "../components/shared/DateWithIcon";
import TagsWithIcon from "../components/tag/TagsWithIcon";

const disqusConfig = (title, siteUrl, slug) => ({
  url: siteUrl + slug,
  identifier: slug,
  title: title,
});

const BlogPostPage = ({ data: { markdownRemark: post, site } }) => (
  <div className="max-w-7xl">
    <h1 className="text-5xl text-center font-extrabold mt-10">
      {post.frontmatter.title}
    </h1>
    <div className="flex space-x-2 justify-center items-center">
      <DateWithIcon date={post.frontmatter.date} />
      <TagsWithIcon tags={post.frontmatter.tags} />
    </div>

    <br />
    <br />
    <div className="pb-10">
      <article
        className="prose mx-auto"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>

    <Disqus
      config={disqusConfig(
        post.frontmatter.title,
        site.siteMetadata.siteUrl,
        post.fields.slug
      )}
    />
  </div>
);

export const Head = ({ data: { markdownRemark: post } }) => (
  <Seo
    title={post.frontmatter.title}
    description={post.frontmatter.description || post.excerpt}
  />
);

export default BlogPostPage;

export const blogPostPageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(formatString: "MMM D, YYYY")
        tags
      }
    }
  }
`;
