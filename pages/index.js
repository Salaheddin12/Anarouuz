import React,{useEffect,useState}  from 'react';
import Head from 'next/head'
import axios from "axios";
import styles from '../styles/Home.module.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Twitter  from './../components/social/Twitter';
import Behance  from './../components/social/Behance';
import Instagram  from './../components/social/Instagram';
import Data from '../data'
import Gallery from '../components/gallery';
import Contact from '../components/contact';

const contentful = require("contentful");

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space:process.env.CONTENTFUL_SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
}); 
const Home=({articles})=> {
  const {socialLinks}=Data;

  console.log(articles);
  // const {}
  return (
    <div className={styles.bodyContainer}>
      <Head>
        <title>Anarouuz</title>
        <link rel="icon" href="logo.png" />
      </Head>
      <section className={styles.header}>
      <nav className={styles.navBar}>
      <img className={styles.icon} src="/logo.png"/>
      <a as={AnchorLink} href="#"> Home</a>
      <a as={AnchorLink} href="#work"> My Work</a>
      <a as={AnchorLink} href="#contact"> Contact</a>
      </nav>
      <div className={styles.socialLinks}>
        <a 
          href={socialLinks.twitter}   
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get in touch with me Twitter"><Twitter/></a>
        <a
          href={socialLinks.instagram}  
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get in touch with me Instagram">
          <Instagram/>  
        </a>
        <a
          href={socialLinks.bahance}  
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get in touch with me Behance">
          <Behance/>
        </a>
      </div>
      <div className={styles.about}>
        <h1 className={styles.title}>Hello.</h1>
        <h3 className={styles.author}>{Data.author} here</h3>
        <p className={styles.description}>{Data.defaultDescription}</p>
      </div>
      </section>
      <section id="work">
        <Gallery
          articles={articles}
        />
      </section>
      <section id="contact" 
                style={{  
                    display: "flex",
                    flexFlow: "column nowrap",
                    alignItems: "flex-start"}}>
          <Contact/>
      </section>
    </div>
  )
  
}

export async function getStaticProps() {
  const articles=(await client.getEntries({content_type:'article'}));
    // .then(entry => {return entry.fields})
    // .catch(err => console.log(err));

  return {props:{articles:articles.items}};
}

export default Home;