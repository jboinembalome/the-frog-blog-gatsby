import DateWithIcon from "../shared/DateWithIcon";
import { Link } from "gatsby";
import TagsWithIcon from "../tag/TagsWithIcon";
import React from "react";

const Blog = ({ title, slug, date, tags }) => {
  return (
    <div className="mx-auto">
      <div className="border-4 border-black rounded-sm p-2 mb-5 mt-5 hover:bg-black transition duration-300 ease-in-out hover:text-white">
        <Link to={slug} className="text-3xl font-bold mt-5">
          {title}
        </Link>
        <div className="mb-5">
          <DateWithIcon date={date} />
          <TagsWithIcon tags={tags} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
