import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between py-4 px-6">
        <Link href="/" className="text-xl font-semibold tracking-wide">
          YAIBA
        </Link>

        <div className="flex gap-6 text-sm opacity-80">
          <Link href="/about">About</Link>
          <Link href="/team">Team</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
