import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/systemjs@6.8.3/dist/system.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/systemjs@6.8.3/dist/extras/amd.js"></script>
        <script type="systemjs-importmap" dangerouslySetInnerHTML={{
          __html: `{
            "imports": {
              "@mfe/mfe-1": "http://localhost:8080/mfe-mfe-1.js",
              "@mfe/mfe-2": "http://localhost:8081/mfe-mfe-2.js"
            }
          }`
        }}>
          
        </script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
