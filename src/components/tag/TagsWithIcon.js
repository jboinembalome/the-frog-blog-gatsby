import { Link } from "gatsby";
import { kebabCase } from "lodash";
import { Tag } from "react-feather";
import React from "react";

const TagsWithIcon = ({ tags }) => (
  <div className="flex items-center">
    <Tag />
    {tags.map((tag) => (
      <Link
        key={tag}
        to={`/tags/${kebabCase(tag)}/`}
        className="inline-flex items-center justify-center p-1 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-black hover:text-white focus:outline-none focus:shadow-none"
      >
        {tag}
      </Link>
    ))}
  </div>
);

export default TagsWithIcon;
