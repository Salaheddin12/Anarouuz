import Layout from '../components/common/Layout';
import Reviews from '../components/Reviews'

const contentful = require("contentful");

const client = contentful.createClient({

  space:process.env.CONTENTFUL_SPACE_ID,

  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN

});     
export default({articles})=>{
    return (
        <Layout>
      <section id="articles">
        <Reviews
          articles={articles}
        />
      </section>
      </Layout>
    );
}
export async function getStaticProps() {
  const articles=(await client.getEntries({content_type:'article'}));
    // .then(entry => {return entry.fields})
    // .catch(err => console.log(err));

  return {props:{articles:articles.items}};
}