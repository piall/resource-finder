import Link from 'next/link';
import Router from 'next/router';
import Button from '@material-ui/core/Button';
import { clearLocalStorage } from '../../../helpers/localStorage';

export default function UserNavbar() {
  const signOut = () => {
    clearLocalStorage();
    Router.push('/');
  };

  return (
    <div>
      <nav className="public">
        <p className="brand">
          <Link href="/user/">
            <img src="/logo.svg" alt="logo" />
          </Link>
        </p>
        <div className="links-container">
          <Link href="/user/">Home</Link>
          <Link href="/user/topic">Topic</Link>
          <Link href="/user/resource">Resource</Link>
          {/* <Link href="/user/author">Author</Link> */}
        </div>
        <Button variant="contained" color="primary" onClick={signOut}>
          Sign Out
        </Button>
      </nav>
    </div>
  );
}
