import Footer from '../common/Footer';
import AdminNavbar from '../private/admin/Navbar';

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminNavbar />
      {children}
      <Footer />
    </>
  );
}
