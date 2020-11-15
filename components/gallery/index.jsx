import React from "react";
import Image from "./image";
import styles from "../../styles/Home.module.css";
const Gallery = ({ posts }) => {
  console.log("posts", posts);
  const { edges } = posts.data.user.edge_owner_to_timeline_media;
  console.log(edges);
  return (
    <div className={styles.galleryContainer}>
      {edges.map((edge) => {
        return (
          <a
            key={edge.node.id}
            target="_blank"
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
