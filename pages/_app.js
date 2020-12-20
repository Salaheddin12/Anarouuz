import "../styles/globals.css";
import {DefaultSeo,SocialProfileJsonLd} from 'next-seo';
import SEO from '../next-seo.config'
import  Head  from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO}/>
      <SocialProfileJsonLd
        type="WebPage"
        name="Anarouuz"
        url="https://anarouuz.vercel.app/"
        sameAs={[
          'https://www.behance.net/Anarouuz',
          'https://twitter.com/TheAnarouuz',
          'https://www.instagram.com/anarouuz',
        ]}
      />
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
