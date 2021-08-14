import '../styles/globals.css';
import '../styles/tailwind.css';

import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';

import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
        />
        <link
          href='/favicon/favicon-16x16.png'
          rel='icon'
          type='image/png'
          sizes='16x16'
        />
        <link
          href='/favicon/favicon-32x32.png'
          rel='icon'
          type='image/png'
          sizes='32x32'
        />
        <link
          rel='apple-touch-icon'
          href='/favicon/apple-touch-icon.png'
        ></link>
        <meta name='theme-color' content='#0C3F7A' />
      </Head>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider attribute='class'>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
