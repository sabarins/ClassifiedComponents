import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossOrigin="anonymous"/>
     <link href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" rel="stylesheet" crossOrigin="anonymous"/>
     <Script id="bootstrap-cdn" src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" strategy='lazyOnload'/>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script id="jquery-cdn" src="https://cdn.jsdelivr.net/npm/jquery@3.6.2/dist/jquery.min.js" strategy='lazyOnload'/>
      </body>
    </Html>
  )
}