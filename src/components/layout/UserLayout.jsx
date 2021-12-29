import UserNavbar from '../private/user/Navbar';
import Footer from '../common/Footer';

export default function UserLayout({ children }) {
  return (
    <>
      <UserNavbar />
      {children}
      <Footer />
    </>
  );
}
