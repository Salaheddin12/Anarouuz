import React, { useState } from "react";
import axios from "axios";
import Head from "next/head";
import Data from "../../../data";
import styles from "../../../styles/Home.module.css";
import postStyles from "./post.module.css";
import Instagram from "../../../components/social/Instagram";
import Twitter from "../../../components/social/Twitter";
import Behance from "../../../components/social/Behance";
import Image from "../../../components/gallery/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const contentful = require("contentful");

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.CONTENTFUL_SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
const Post = ({ article }) => {
  const { socialLinks } = Data;

  return (
    <div className={styles.header}>
      <Head>
        <title>Anarouuz</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <nav className={styles.navBar}>
        <img className={styles.icon} src="/logo.png" />
        <a href="/">Home</a>
        <a href="/#work">My Work</a>
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
      <div className={styles.container}></div>
    </div>
  );
};

export async function getStaticPaths() {
  const articles = await client.getEntries({ content_type: "article" }).items;
  const paths = articles.map((article) => `/posts/${article.sys.id}`);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const articles = await client.getEntries({ content_type: "article" }).items;
  const article = articles.filter((article) => article.sys.id === params.id);
  return { props: { article: article[0] } };
}

export default Post;
