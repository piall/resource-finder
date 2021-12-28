import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '@material-ui/core/Button';

export default function Navbar() {
  const router = useRouter();

  return (
    <div>
      <nav className="public">
        <p className="brand">
          <Link href="/">
            <img src="/logo.svg" alt="logo" />
          </Link>
        </p>
        <div className="links-container">
          <Link
            href="#Home"
            className={router.asPath == '/#Home' ? 'active' : ''}
          >
            Home
          </Link>

          <Link
            href="#About"
            className={router.asPath == '/#About' ? 'active' : ''}
          >
            About
          </Link>
          <Link
            href="#Topics"
            className={router.asPath == '/#Topics' ? 'active' : ''}
          >
            Topics
          </Link>
        </div>
        <Button variant="contained" color="primary">
          <Link href="/signin">Sign In</Link>
        </Button>
      </nav>
    </div>
  );
}
