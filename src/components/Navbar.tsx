import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 flex gap-6 py-3 font-medium text-green-800">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/academics">Academics</Link>
        <Link href="/research">Research</Link>
        <Link href="/members">Members</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}