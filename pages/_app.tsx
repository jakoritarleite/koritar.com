import { GetLayout, Page } from 'next';
import { MyProps } from 'next/app';
import type { ReactNode } from 'react';

const MyApp = ({ Component, pageProps }: MyProps) => {
  const getLayout: GetLayout =
    Component.getLayout ?? ((page: ReactNode) => page);

  return getLayout(<Component {...pageProps} />, pageProps);
};

export default MyApp;
