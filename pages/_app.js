import Layout from '../components/Layout'
import '../styles/globals.css'
import Script from 'next/script';


function MyApp({ Component, pageProps }) {
  return (


    





    <Layout>
      
      <Script 
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
      </Script>
      <Component {...pageProps} />

      
    </Layout>

    
  )
}

export default MyApp
