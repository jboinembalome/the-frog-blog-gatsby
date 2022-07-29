/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { Link } from "gatsby";
import { Home, Edit, Tag } from 'react-feather';

function Navbar() {
  const navigation = {
    link: [
      {
        name: "Home",
        icon: <Home/>,
        url: "/",
      },
      {
        name: "Blog",
        icon: <Edit/>,
        url: "/blog/",
      },
      {
        name: "Tags",
        icon: <Tag/>,
        url: "/tags/",
      },
    ],
  };

  return (
    <nav id="nav" className="flex justify-center items-center space-x-5 mt-5">
      {navigation.link.map((item) => (
        <Link key={item.name} to={item.url} className="flex flex-col items-center">
          {item.icon}
          {item.name}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
