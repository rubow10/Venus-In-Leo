import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Venus In Leo</h3>
          <p>Leading provider of XYZ services with a commitment to excellence and innovation.</p>
          <p className="mt-2">© 2025 Venus In Leo. All rights reserved.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul>
            <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link href="/music" className="hover:text-gray-400">Music</Link></li>
            <li><Link href="/about" className="hover:text-gray-400">About Us</Link></li>
            <li><Link href="/tour" className="hover:text-gray-400">Tour</Link></li>
            <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <ul>
            <li>Phone: +1 555-0123</li>
            <li>Email: venusinleo@gmail.com</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <ul className="flex space-x-4">
            <li><a href="https://facebook.com" className="hover:text-gray-400">Facebook</a></li>
            <li><a href="https://twitter.com" className="hover:text-gray-400">Twitter</a></li>
            <li><a href="https://instagram.com" className="hover:text-gray-400">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

