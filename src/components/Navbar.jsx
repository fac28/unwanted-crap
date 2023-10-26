import Link from 'next/link'


export default function Navbar() {
  return (
    <nav>
      <Link
        className="home"
        href="/"
      >
        <h1>Unwanted Crap</h1>
      </Link>
      <div className="basket">
        <Link href="/basket">
          Basket
        </Link>
      </div>
    </nav>
  )
}
