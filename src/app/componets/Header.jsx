import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold hover:text-gray-300" passHref>
          Home
        </Link>
        <Link href="/music" className="text-lg font-semibold hover:text-gray-300" passHref>
          Music
        </Link>
        <Link href="/about" className="text-lg font-semibold hover:text-gray-300" passHref>
          About
        </Link>
        <Link href="/tour" className="text-lg font-semibold hover:text-gray-300" passHref>
          Tour
        </Link>
        <Link href="/contact" className="text-lg font-semibold hover:text-gray-300" passHref>
          Contact
        </Link>
      </div>
    </nav>
  );
}
