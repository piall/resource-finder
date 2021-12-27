import Link from 'next/link';
import Image from 'next/image';
import Button from '@material-ui/core/Button';

export default function Navbar() {
  return (
    <div>
      <nav className="public">
        <p className="brand">
          <Link href="/user/home">
            <Image src="/logo.svg" />
          </Link>
        </p>
        <div className="links-container">
          <Link href="/user/home">Home</Link>
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
