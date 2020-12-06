import React,{useEffect,useState}  from 'react';
import Data from '../data'
import Reviews from '../components/Reviews';
// import Contact from '../components/contact';
import Layout from '../components/common/Layout';
import styles from '../styles/Home.module.css'

const contentful = require("contentful");

const client = contentful.createClient({

  space:process.env.CONTENTFUL_SPACE_ID,

  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN

}); 
const Home=({articles})=> {
  return (
<Layout>
      <div className={`${styles.about} .about`}>
        <h1 className={styles.title}>Hello.</h1>
        <h3 className={styles.author}>{Data.author} here</h3>
        <p className={styles.description}>{Data.defaultDescription}</p>
      </div>
      <section id="articles">
        <Reviews
          articles={articles}
        />
      </section>
      {/* <section id="contact" 
                style={{  
                    display: "flex",
                    flexFlow: "column nowrap",
                    alignItems: "flex-start"}}>
          <Contact/>
      </section> */}
      </Layout>
  )
  
}

export async function getStaticProps() {
  const articles=(await client.getEntries({content_type:'article'}));
  
    // .then(entry => {return entry.fields})
  return {props:{articles:articles.items}};
}

export default Home;