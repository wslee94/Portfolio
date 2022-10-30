import '../styles/reset.scss';
import '../styles/globals.scss';
import Layout from '../components/layout';
import { CurrentPageProvider } from '../context/CurrentPageContext';

function MyApp({ Component, pageProps }) {
  return (
    <CurrentPageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CurrentPageProvider>
  );
}

export default MyApp;
