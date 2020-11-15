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

const Home=({posts})=> {
  const {socialLinks}=Data;

  console.log('index',posts);
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
      <section id="work"><Gallery posts={posts}/></section>
      <section id="contact">
          <Contact/>
      </section>
    </div>
  )
  
}

export async function getStaticProps() {
  const options = {
    method: 'GET',
    url: 'https://iglytics.p.rapidapi.com/ep_user_post.php',
    params: {userid: '5695354789'},
    headers: {
      'x-rapidapi-key': '8ed3ac0a1bmshb2ebf05d9376fdbp1675a1jsn12d4909f1ec8',
      'x-rapidapi-host': 'iglytics.p.rapidapi.com'
    }
  };
  const posts= (await axios.request(options)).data;
  // .then(response =>{
  //   console.log(response);
  //   posts=response.data
  // })
  // .catch(error=> {
  //   console.error(error);
  // });
  console.log("in getstaticprops",posts);
  return {props:{posts}};
}

export default Home;