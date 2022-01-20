import Footer from '../common/Footer';
import PublicNavbar from '../public/Navbar';

export default function PublicLayout({ children }) {
  return (
    <>
      <PublicNavbar />
      <div className="page-container-scroll">
        <div className="page-container">{children}</div>
      </div>
      <Footer />
    </>
  );
}
