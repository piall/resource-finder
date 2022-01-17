import Head from 'next/head';

import Footer from '../common/Footer';
import AdminNavbar from '../private/admin/Navbar';

export default function AdminLayout({ children }) {
  return (
    <>
      <Head>
        <title>Resource Finder</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <AdminNavbar />
      <div className="page-container-scroll">
        <div className="page-container">{children}</div>
      </div>
      <Footer />
    </>
  );
}
