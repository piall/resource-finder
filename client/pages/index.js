import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getFromLocalStorage } from '../src/helpers/localStorage';
import PublicHome from '../src/components/public/Home';

export default function Home() {
  const [loginStatus, setLoginStatus] = useState(false);
  useEffect(() => {
    if (getFromLocalStorage('user')) {
      setLoginStatus(true);
    }
  });
  return (
    <div>
      <Head>
        <title>Resource Finder</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      {!loginStatus && <PublicHome />}
    </div>
  );
}
