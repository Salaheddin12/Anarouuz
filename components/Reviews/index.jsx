import React from "react";
import Image from "./image";
import Link from "next/link";
import styles from "./reviews.module.css";
const Gallery = ({ articles }) => {
  return (
    <div className={styles.ReviewsContainer}>
      {articles.map((article) => {
        return (
          <Link href={`/posts/${article.sys.id}`}>
            <a key={article.sys.id} rel="noopener noreferrer">
              <Image Img={`https:${article.fields.image.fields.file.url}`} />
            </a>
          </Link>
        );
      })}
    </div>
  );
};
export default Gallery;
