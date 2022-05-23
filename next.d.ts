import type {
  NextPage,
  NextComponentType,
  NextPageContext,
  NextLayoutComponentType
} from 'next';
import type { AppProps } from 'next/app';
import { ReactNode } from 'react';

declare module 'next' {
  type GetLayout<P = {}> = (page: ReactNode, pageProps: P) => ReactNode;

  type Page<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: GetLayout<IP>;
  };
}

declare module 'next/app' {
  type MyProps<P = {}> = AppProps<P> & {
    Component: Page<P>;
  };
}
