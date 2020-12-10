import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head >
            <meta charset="UTF-8"/>
            <meta name="description" content="Free Web tutorials"/>
            <meta name="keywords" content="HTML, CSS, JavaScript"/>
            <meta name="author" content="John Doe"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
