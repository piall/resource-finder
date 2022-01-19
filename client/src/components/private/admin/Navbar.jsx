import Link from 'next/link';
import Router from 'next/router';
import Button from '@material-ui/core/Button';
import { clearLocalStorage } from '../../../helpers/localStorage';

export default function AdminNavbar() {
  const signOut = () => {
    clearLocalStorage();
    Router.push('/');
  };

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
        <Button variant="contained" color="primary" onClick={signOut}>
          Sign Out
        </Button>
      </nav>
    </div>
  );
}
