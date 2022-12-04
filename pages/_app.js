import { useEffect } from 'react';
import '../styles/reset.scss';
import '../styles/globals.scss';
import Layout from '../components/layout';
import { CurrentPageProvider } from '../context/CurrentPageContext';
import { isDesktop } from 'react-device-detect';

function MyApp({ Component, pageProps }) {
  const handleSetVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    if (!isDesktop) {
      handleSetVh();
      window.addEventListener('resize', handleSetVh);

      return () => {
        window.removeEventListener('resize', handleSetVh);
      };
    }
  }, []);
  return (
    <CurrentPageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CurrentPageProvider>
  );
}

export default MyApp;
