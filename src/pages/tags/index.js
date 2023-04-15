import React from "react";
import { graphql, Link } from "gatsby";
import Seo from "../../components/shared/Seo";
import { kebabCase } from "lodash";

const TagWithCount = ({ tag, count }) => (
  <p className="mt-7">
    <Link
      key={tag}
      to={`/tags/${kebabCase(tag)}/`}
      className="relative inline-block px-4 py-2 font-medium group"
    >
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
      <span className="relative text-white group-hover:text-white font-extrabold bg-black p-1 rounded-sm">
        {count}
      </span>
      <span className="relative text-black group-hover:text-white">{tag}</span>
    </Link>
  </p>
);

const TagsPage = ({
  data: { allMarkdownRemark: { group: tags } },
}) => (
  <>
    <h1 className="text-5xl font-extrabold mt-10">Tags</h1>
    {tags.map((tag) => (
      <TagWithCount
        key={tag.fieldValue}
        tag={tag.fieldValue}
        count={tag.totalCount}
      />
    ))}
  </>
);

export const Head = () => <Seo title="Tags" />;

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark(limit: 1000) {
      group(field: {frontmatter: {tags: SELECT}}) {
        fieldValue
        totalCount
      }
    }
  }
`;
