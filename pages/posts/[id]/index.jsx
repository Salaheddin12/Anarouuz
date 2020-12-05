import React, { useState } from "react";
import Head from "next/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Data from "../../../data";
import styles from "../../../styles/Home.module.css";
import postStyles from "./post.module.css";
import Instagram from "../../../components/social/Instagram";
import Twitter from "../../../components/social/Twitter";
import Behance from "../../../components/social/Behance";

const contentful = require("contentful");

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.CONTENTFUL_SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
const Post = ({ article }) => {
  const { socialLinks } = Data;
  const { title, content, image } = article.fields;
  console.log(article);
  return (
    <div className={styles.header}>
      <Head>
        <title>Anarouuz</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <nav className={styles.navBar}>
        <img className={styles.icon} src="/logo.png" />
        <a href="/">Home</a>
        <a href="/#articles">Articles</a>
        <a href="/#contact">Contact</a>
      </nav>
      <div className={styles.socialLinks}>
        <a
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get in touch with me Twitter"
        >
          <Twitter />
        </a>
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get in touch with me Instagram"
        >
          <Instagram />
        </a>
        <a
          href={socialLinks.bahance}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get in touch with me Behance"
        >
          <Behance />
        </a>
      </div>
      <div className={postStyles.post}>
        <h1 className={postStyles.title}>{title}</h1>
        <div>
          {documentToReactComponents(content, {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: (node) => (
                <img
                  src={node.data.target.fields.file.url}
                  style={{ maxWidth: 600, margin: "2rem auto" }}
                />
              ),
            },
          })}
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const articles = await client.getEntries({ content_type: "article" });
  // const articles = { ...data.items };
  const paths = articles.items.map((article) => `/posts/${article.sys.id}`);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const articles = await client.getEntries({ content_type: "article" });
  // const articles = { ...data.items };
  const article = articles.items.filter(
    (article) => article.sys.id === params.id
  );
  return { props: { article: article[0] } };
}

export default Post;
