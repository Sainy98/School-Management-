
import '../Styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.push('/');  // Redirect to Show Schools page
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
