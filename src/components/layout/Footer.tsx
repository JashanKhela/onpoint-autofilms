// components/layout/Footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-10 text-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-400">&copy; {new Date().getFullYear()} On Point Auto Films. All rights reserved.</p>
        <div className="flex gap-4 text-zinc-400">
          <Link href="/privacy" className="hover:text-[#FB06FC]">Privacy</Link>
          <Link href="/terms" className="hover:text-[#9725E3]">Terms</Link>
          <Link href="/contact" className="hover:text-[#02FDE6]">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
