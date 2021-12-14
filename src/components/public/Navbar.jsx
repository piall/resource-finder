import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <nav className="public">
        <p className="brand">
          <Link href="/">Resource Finder</Link>
        </p>
        <button className="login-btn">
          <Link href="/login">Login</Link>
        </button>
      </nav>
    </div>
  );
}
