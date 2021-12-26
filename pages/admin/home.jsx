import Navbar from '../../src/components/private/admin/Navbar';

export default function AdminHome() {
  return (
    <div>
      <Navbar />
      <div className="page-container-scroll">
        <div className="page-container"></div>
      </div>
    </div>
  );
}
