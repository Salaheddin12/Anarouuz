import data from "../../../data";
import styles from "./socials.module.css";
import Instagram from "./Icons/Instagram";
import Twitter from './Icons/Twitter'
import Behance from './Icons/Behance'
const { socialLinks } = data;
export default () => {
  return (
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
  );
};
