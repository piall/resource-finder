import Footer from '../common/Footer';
import AdminNavbar from '../private/admin/Navbar';

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminNavbar />
      <div className="page-container-scroll">
        <div className="page-container">{children}</div>
      </div>
      <Footer />
    </>
  );
}
