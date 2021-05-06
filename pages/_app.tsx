import { NextComponentType, GetStaticProps } from 'next';

function MyApp({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  pageProps: GetStaticProps;
}) {
  return <Component {...pageProps} />;
}

export default MyApp;
