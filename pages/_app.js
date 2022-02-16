import Layout from '../components/Layout'
import '../styles/globals.css'
import Script from 'next/script';


function MyApp({ Component, pageProps }) {

  return (

    <>

      {/* <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-ZZ167BLGWC`}
      />
      <Script strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZZ167BLGWC', {
            page_path: window.location.pathname,
          });
        `}
      </Script> */}


      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZZ167BLGWC"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZZ167BLGWC');
        `}
      </Script>



      <Layout>


        <Component {...pageProps} />


      </Layout>


    </>
  )
}

export default MyApp
