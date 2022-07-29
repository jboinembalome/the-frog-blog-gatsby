/**
 * The file gatsby-browser lets you respond to Gatsby-specific events within 
 * the browser and wrap your page components in additional global components.
 * (More info: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/)
 */

import React from "react";
import Layout from "./src/components/layout/Layout";
import "./src/styles/style.css";

// Wrapper for all pages
export function wrapPageElement({ element, props }) {
  return (
    <Layout {...props}>
      {element}
    </Layout>
  );
}
