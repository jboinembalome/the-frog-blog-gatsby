import { withPrefix } from "gatsby";
import React from "react";
import { GitHub, Linkedin } from "react-feather";

const links = [
  {
    id: "Github",
    url: "https://github.com/Guyliane/Guyliane",
    ariaLabel: "Link to Github",
    icon: <GitHub />,
  },
  {
    id: "Linkedin",
    url: "https://www.linkedin.com/in/guyliane-de-jesus-pimenta-7a85b210a/",
    ariaLabel: "Link to linkedin",
    icon: <Linkedin />,
  },
];

const MailChimpTitle = () => (
  <h3 className="font-extrabold text-black text-xl tracking-tighter mt-3">
    Subscribe to our newsletter 📬
  </h3>
);

const MailChimpForm = () => (
  <form
    action="https://app.us11.list-manage.com/subscribe/post?u=a43196d86d7fa5b51040c9886&amp;id=19e7fe99e7"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    target="_blank"
    rel="noreferrer"
    noValidate
    className="flex flex-row justify-center max-w-xl mt-4 mx-auto validate"
  >
    <label htmlFor="mce-EMAIL" className="sr-only">
      {" "}
      Email address{" "}
    </label>
    <input
      type="email"
      name="EMAIL"
      id="mce-EMAIL"
      placeholder="Enter your email"
      className="appearance-none w-full bg-white border border-gray-300 shadow-sm py-2 px-4 text-base text-black placeholder-gray-500 focus:outline-none focus:ring-red-600 focus:border-red-600 focus:placeholder-gray-400 required email"
    />

    <button
      type="submit"
      value="Subscribe"
      name="subscribe"
      id="mc-embedded-subscribe"
      className="relative inline-block px-4 py-2 font-medium group"
    >
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
      <span className="relative text-black group-hover:text-white">
        Subscribe
      </span>
    </button>
  </form>
);

const SocialLinks = () =>
  links.map((link) => (
    <a
      key={link.id}
      href={link.url}
      aria-label={link.ariaLabel}
      target="_blank"
      rel="noreferrer"
      className="text-gray-400 hover:text-gray-600 w-9"
    >
      {link.icon}
    </a>
  ));

const Copyright = () => (
  <div className="flex flex-col justify-center items-center space-x-2 sm:flex-row">
    <p className="text-xs font-semibold sm:font-extrabold sm:text-base">
      © 2022 The Frog Blog, Inc. All rights reserved.
    </p>
    <img
      src={`${withPrefix("/")}FrogLogo.svg`}
      alt="The Frog Logo logo"
      className="w-10 h-10"
    />
  </div>
);

const Footer = () => (
  <footer className="max-w-7xl p-2 mt-24 border-t border-gray-200 mx-auto">
    <div className="text-center">
      <MailChimpTitle />
    </div>
    <div className="flex flex-row justify-center max-w-xl mt-4 mx-auto">
      <MailChimpForm />
    </div>

    <div className="max-w-7xl mx-auto mt-6py-4 px-4 md:py-5 flex items-center justify-center mt-4">
      <div className="flex space-x-6 md:order-2">
        <SocialLinks />
      </div>
    </div>
    <Copyright />
  </footer>
);

export default Footer;
