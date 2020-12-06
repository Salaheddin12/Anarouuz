import Head from "next/head";
import Socials from "../Socials";
import styles from "./layout.module.css";

export default ({ children }) => {
  return (
    <div className={styles.bodyContainer}>
      <Head>
        <title>Anarouuz</title>
        <link rel="icon" href="logo.png" />
      </Head>
      {/* <section className={styles.header}> */}
      <nav className={styles.navBar}>
        <img className={styles.icon} src="/logo.png" />
        <a href="/reviews">مراجعات</a>
        <a href="/">الرئيسية</a>
        {/* <a href="/#contact">Contact</a> */}
      </nav>
      {/* </section> */}
      <Socials />
      {children}
    </div>
  );
};
