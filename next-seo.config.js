const title = 'Anarouuz';
const description =
  'Salahuddin, Muslim, Moroccan, Photographer, Designer, Writer, Physicist.';

const SEO = {
  title,
  description,
  canonical: 'https://anarouuz.vercel.app/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://anarouuz.vercel.app/',
    title,
    description,
    images: [
      {
        url: 'https://devrev.ma/static/images/devrev-og-image.webp',
        alt: title,
        width: 820,
        height: 312
      }
    ]
  },
  twitter: {
    handle: '@TheAnarouuz',
    site: '@TheAnarouuz',
    cardType: 'summary_large_image'
  },
};

export default SEO;
