import Link from 'next/link';
import Button from '@material-ui/core/Button';

export default function AdminNavbar() {
  return (
    <div>
      <nav className="public">
        <p className="brand">
          <Link href="/admin/">
            <img src="/logo.svg" alt="logo" />
          </Link>
        </p>
        <div className="links-container">
          <Link href="/admin/">Home</Link>
          <Link href="/admin/topic">Topic</Link>
          <Link href="/admin/resource">Resource</Link>
          <Link href="/admin/author">Author</Link>
        </div>
        <Button variant="contained" color="primary">
          Sign Out
        </Button>
      </nav>
    </div>
  );
}
