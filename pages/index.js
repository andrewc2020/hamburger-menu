// pages/index.js
import Link from 'next/link'

export default function Home() {
  return (
    <nav>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  )
}
