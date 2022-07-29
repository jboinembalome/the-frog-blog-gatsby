import { Link, graphql, useStaticQuery } from "gatsby";
import React, { useState, useEffect, useRef } from "react";
import FaReadmeIcon from "../shared/FaReadmeIcon";

const BlogWithIcon = ({ title, slug }) => (
  <Link to={slug}>
    <div className="flex items-center font-bold">
      <span className="p-1">{title}</span>
      <FaReadmeIcon className="h-5 w-5"/>
    </div>
  </Link>
);

const SearchResults = ({ posts }) => (
  <ul className="font-bold mb-2">
    {posts.map(({ node: post }) => (
      <li key={post.id}>
        <BlogWithIcon title={post.frontmatter.title} slug={post.fields.slug} />
      </li>
    ))}
  </ul>
);

const getAllBlogsQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
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
          }
        }
      }
    }
  }
`;

const SearchBlogs = () => {
  const {
    allMarkdownRemark: { edges: posts },
  } = useStaticQuery(getAllBlogsQuery);
  const [state, setState] = useState({ filteredPosts: [], query: "" });
  const searchInput = useRef(null);

  //#region HOOKS
  useEffect(() => {
    window.addEventListener("keydown", onWindowKeyDown);

    // cleanup the component when the component is no longer mounted
    return () => {
      window.removeEventListener("keydown", onWindowKeyDown);
    };
  }, []);
  //#endregion HOOKS

  //#region EVENTS
  const onWindowKeyDown = (event) => {
    if (event.key === ",") {
      event.preventDefault();
      searchInput.current.focus();
    }

    if (event.keyCode === 27) {
      setState({
        filteredPosts: [],
        query: "",
      });
      searchInput.current.blur();
    }
  };

  const onSearchInputKeyUp = (event) => {
    const query = new RegExp(event.target.value, "ig");

    // return all filtered posts
    const filteredPosts = posts?.filter((post) =>
      query.test(post.node.frontmatter.title)
    );

    // update state according to the latest query and results
    setState({ filteredPosts, query });
  };

  //#endregion EVENTS

  return (
    <div>
      <input
        ref={searchInput}
        type="text"
        placeholder="press ',' to search"
        onKeyUp={onSearchInputKeyUp}
      />
      <hr />
      {posts && state.filteredPosts && (
        <>
          <p className="px-2 py-2 text-black">Press 'ESC' to cancel search.</p>
          <SearchResults posts={state.filteredPosts} />
        </>
      )}
    </div>
  );
};

export default SearchBlogs;
