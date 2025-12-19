import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo + Site Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/yaib_prod_icon_removebg_preview.png" 
            alt="Yaiba Logo" 
            width={32} 
            height={32}
            className="w-8 h-8"
          />

          <span className="text-xl font-semibold tracking-wide text-white">
            YAIBA
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex gap-6 text-sm text-gray-300">
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/team" className="hover:text-white transition">Team</Link>
          <Link href="/projects" className="hover:text-white transition">Projects</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
