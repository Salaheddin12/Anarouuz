import React, { useState } from "react";
import { defaultSeo } from "next-seo";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Layout from "../../../components/common/Layout";
import styles from "./post.module.css";

const contentful = require("contentful");

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.CONTENTFUL_SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
const Post = ({ article }) => {
  const { title, content } = article.fields;
  console.log(article);
  return (
    <Layout>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: `https://anarouuz.vercel.app/`,
          site_name: "Anarouuz",
          title: title,
        }}
      />
      <div className={styles.post}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.postContent}>
          {documentToReactComponents(content, {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: (node) => (
                <img
                  src={node.data.target.fields.file.url}
                  className={styles.image}
                />
              ),
            },
          })}
        </div>
      </div>
    </Layout>
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
