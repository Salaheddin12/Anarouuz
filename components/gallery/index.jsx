import React from "react";
import Image from "./image";
import styles from "../../styles/Home.module.css";
const Gallery = ({ articles }) => {
  console.log(articles);
  console.log(articles[0].fields.image.fields.file.url, articles[0].sys.id);

  return (
    <div className={styles.galleryContainer}>
      {articles.map((article) => {
        return (
          <a href={`./posts/${article.sys.id}`} rel="noopener noreferrer">
            <Image Img={`https:${article.fields.image.fields.file.url}`} />
          </a>
        );
      })}
    </div>
  );
};
export default Gallery;
