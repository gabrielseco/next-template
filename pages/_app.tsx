import { TranslateProvider } from '@rogal/react-translate';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { i18nConfig } from '@config/i18n';
import '@styles/main.scss';

type FixMe = any;

interface AppProps {
  Component: FixMe;
  pageProps: FixMe;
}

const queryClient = new QueryClient();

// eslint-disable-next-line
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const isDev = process.env.NODE_ENV === 'development';
  return (
    <TranslateProvider i18n={i18nConfig}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        {isDev && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </TranslateProvider>
  );
}
