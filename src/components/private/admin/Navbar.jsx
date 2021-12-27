import Link from 'next/link';
import Image from 'next/image';
import Button from '@material-ui/core/Button';

export default function Navbar() {
  return (
    <div>
      <nav className="public">
        <p className="brand">
          <Link href="/admin/home">
            <Image src="/logo.svg" alt="logo" />
          </Link>
        </p>
        <div className="links-container">
          <Link href="/admin/home">Home</Link>
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
