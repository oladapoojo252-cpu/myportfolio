import Link from "next/link";
import { GithubIcon, XIcon, InstagramIcon } from "./Icons";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/80 bg-black/85 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="#home" className="text-xl font-bold tracking-tight text-white hover:text-zinc-300 transition-colors">
          OJO.
        </Link>

        <div className="flex items-center gap-6 sm:gap-8 text-sm font-medium text-zinc-400">
          <Link href="#home" className="hover:text-white transition-colors">Home</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-zinc-400">
          <a
            href="https://github.com/oladapoojo252-cpu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://x.com/Oladapothefirst"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="X"
          >
            <XIcon className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com/O_L_A_D_A_P_O"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}