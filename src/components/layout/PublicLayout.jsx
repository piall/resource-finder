import Footer from '../common/Footer';
import PublicNavbar from '../public/Navbar';

export default function UserLayout({ children }) {
  return (
    <>
      <PublicNavbar />
      {children}
      <Footer />
    </>
  );
}
