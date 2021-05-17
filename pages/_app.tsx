import { ApolloProvider } from '@apollo/client';
import { NextComponentType, GetStaticProps } from 'next';
import client from '../apollo-client';

function MyApp({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  pageProps: GetStaticProps;
}) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
