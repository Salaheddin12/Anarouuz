import React  from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Twitter  from './../components/social/Twiter';
import Behance  from './../components/social/Behance';
import Instagram  from './../components/social/Instagram';
import data from '../data'
import Gallery from '../components/gallery';

export default function Home() {

  const {socialLinks}=data;
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Anarouuz</title>
        <link rel="icon" href="logo.png" />
      </Head>
      <section className={styles.header}>
      <nav className={styles.navBar}>
        <img style={{width:80,height:80}} src="/logo.png"/>
        <AnchorLink offset="100" to="#">Home</AnchorLink>
        <AnchorLink offset="100" to="#work">My Work</AnchorLink>
        <AnchorLink offset="100" to="#contact">Contact</AnchorLink>
      </nav>
      <div className={styles.socialLinks}>
        <a 
          href={socialLinks.twitter}   
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get in touch with me Twitter"><Twitter/></a>
        <a
          href={data.socialLinks.instagram}  
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get in touch with me Instagram">
          <Instagram/>  
        </a>
        <a
          href={data.socialLinks.bahance}  
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get in touch with me Behance">
          <Behance/>
        </a>
      </div>
      <div className={styles.about} id="work">
        <h1 className={styles.title}>Hello.</h1>
        <h3 className={styles.author}>{data.author} here</h3>
        <p className={styles.description}>{data.defaultDescription}</p>
      </div></section>
      <Gallery/>
    </div>
  )
  
}
