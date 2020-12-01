import React from "react";
import Image from "./image";
import styles from "../../styles/Home.module.css";
const Gallery = ({ posts }) => {
  console.log("posts", posts);
  const { edges } = posts.data.user.edge_owner_to_timeline_media;
  const filtredEdges = edges.filter((item, index) => index < 8);
  console.log(filtredEdges);
  return (
    <div className={styles.galleryContainer}>
      {filtredEdges.map((edge) => {
        return (
          <a
            key={edge.node.id}
            rel="noopener noreferrer"
            href={`/posts/${edge.node.id}`}
          >
            <Image edge={edge} Img={edge.node.thumbnail_src} />
          </a>
        );
      })}
    </div>
  );
};
export default Gallery;
