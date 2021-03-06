import React from "react";
import Tilt from "react-tilt";
import styles from "../reviews.module.css";

export default ({ Img }) => {
  return (
    <Tilt className="Tilt" options={{ max: 25 }}>
      <img src={Img} className={styles.galleryImg} />
    </Tilt>
  );
};
