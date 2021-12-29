import UserNavbar from '../private/user/Navbar';
import Footer from '../common/Footer';

export default function UserLayout({ children }) {
  return (
    <>
      <UserNavbar />
      <div className="page-container-scroll">
        <div className="page-container">{children}</div>
      </div>
      <Footer />
    </>
  );
}
