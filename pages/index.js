import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
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
    <div className={styles.container}>{!loginStatus && <PublicHome />}</div>
  );
}
