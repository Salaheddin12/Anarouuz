import React from "react";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import Data from "../../../data";
import styles from "../../../styles/Home.module.css";
import Instagram from "../../../components/social/Instagram";
import Twitter from "../../../components/social/Twitter";
import Behance from "../../../components/social/Behance";
import Image from "../../../components/gallery/image";
import RedirectLink from "../../../components/common/RedirectLink";
const Post = ({ post }) => {
  var regexp = new RegExp("#([^\\s]*)", "g");

  const { socialLinks } = Data;

  console.log("post", post);

  const { display_url, edge_media_to_caption } = post.node;

  const { text } = edge_media_to_caption.edges[0].node;

  const description = text.replace(regexp, "");
  const postURL = `https://www.instagram.com/p/${post.node.shortcode}`;
  console.log(postURL);
  return (
    <div className={(styles.container, styles.header)}>
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
      <div className={styles.container}>
        <a href={postURL} >
          <Image Img={display_url} />
        </a>
        <p className={styles.postDescription}>{description}</p>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const options = {
    method: "GET",
    url: "https://iglytics.p.rapidapi.com/ep_user_post.php",
    params: { userid: "5695354789" },
    headers: {
      "x-rapidapi-key": "8ed3ac0a1bmshb2ebf05d9376fdbp1675a1jsn12d4909f1ec8",
      "x-rapidapi-host": "iglytics.p.rapidapi.com",
    },
  };
  const posts = (await axios.request(options)).data.data.user
    .edge_owner_to_timeline_media.edges;
  const paths = posts.map((post) => `/posts/${post.node.id}`);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const options = {
    method: "GET",
    url: "https://iglytics.p.rapidapi.com/ep_user_post.php",
    params: { userid: "5695354789" },
    headers: {
      "x-rapidapi-key": "8ed3ac0a1bmshb2ebf05d9376fdbp1675a1jsn12d4909f1ec8",
      "x-rapidapi-host": "iglytics.p.rapidapi.com",
    },
  };
  const posts = (await axios.request(options)).data.data.user
    .edge_owner_to_timeline_media.edges;
  const post = posts.filter((post) => post.node.id === params.id);
  return { props: { post: post[0] } };
}

export default Post;
