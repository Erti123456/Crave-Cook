import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green-400 text-green-950 mt-auto py-8 px-4 border-t border-green-500/30 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Crave & Cook Logo"
              width={80}
              height={80}
              className="brightness-0 mb-3"
            />
          </Link>
          <p className="text-sm font-semibold max-w-xs text-center md:text-left opacity-90">
            Delicious recipes tailored just for you. Cook with passion, eat with joy.
          </p>
        </div>

        <div className="flex gap-10 text-xs font-bold uppercase tracking-widest">
          <div className="flex flex-col gap-3">
            <h4 className="text-green-900 border-b border-green-500/50 pb-1 mb-1">Explore</h4>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/recipes" className="hover:text-white transition-colors">Browse</Link>
            <Link href="/favorites" className="hover:text-white transition-colors">Favorites</Link>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="text-green-900 border-b border-green-500/50 pb-1 mb-1">Legal</h4>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-green-500/30 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] font-bold opacity-80 uppercase tracking-tighter">
        <p>© 2026 Crave & Cook. All rights reserved.</p>
        <p>Built with Next.js, Clerk & Prisma</p>
      </div>
    </footer>
  );
}
