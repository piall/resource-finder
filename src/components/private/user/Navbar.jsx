import Link from 'next/link';
import Button from '@material-ui/core/Button';

export default function UserNavbar() {
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
          <Link href="/user/author">Author</Link>
        </div>
        <Button variant="contained" color="primary">
          Sign Out
        </Button>
      </nav>
    </div>
  );
}
