import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/shared/Seo";
import MostRecentBlogs from "../components/blog/MostRecentBlogs";

const IndexPage = ({ data: { markdownRemark: home, site } }) => (
  <>
    <h1 className="text-5xl font-extrabold text-center mt-3">
      {site.siteMetadata.title}
    </h1>
    <p className="font-bold text-center">{home.frontmatter.homeText}</p>

    <p className="font-extrabold mt-10 text-red-600">INTRODUCING</p>
    <h2 className="text-3xl font-extrabold">What is The Frog Blog?</h2>
    <hr />

    <p className="mt-5 text-justify">
      Hi! 👋 I'm Guyliane, I've been passionate about development for so long
      that I've spent many sleepless nights exploring our favorite site like
      Stack Overflow to get unstuck. I've been able to increase my skills thanks
      to all this and I'm still learning a lot. So I decided to open my
      <strong>SIMPLE</strong> Blog to share with you all my tips all my problems
      all my findings so that you too can sleep a little more! 🤞
    </p>
    <div className="text-right">
      <p className="font-extrabold mt-10 text-red-600">STAY UP TO DATE</p>
      <h2 className="text-3xl font-extrabold">Check my last post :</h2>
    </div>
    <hr />
    <MostRecentBlogs />
  </>
);

export const Head = () => <Seo />;

export default IndexPage;

export const indexPageQuery = graphql`
  query IndexPageTemplate {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index" } }) {
      frontmatter {
        homeText
      }
    }
  }
`;
