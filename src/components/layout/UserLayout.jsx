import Head from 'next/head';

import UserNavbar from '../private/user/Navbar';
import Footer from '../common/Footer';

export default function UserLayout({ children }) {
  return (
    <>
      <Head>
        <title>Resource Finder</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <UserNavbar />
      <div className="page-container-scroll">
        <div className="page-container">{children}</div>
      </div>
      <Footer />
    </>
  );
}
