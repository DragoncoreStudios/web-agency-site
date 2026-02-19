"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full backdrop-blur-md bg-white/10 border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="font-semibold text-lg">
          Dragoncore Studios
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/Service">Services</Link>
          <Link href="/Portfolio">Portfolio</Link>
          <Link href="/Contact">Contact</Link>
        </div>

        {/* Mobile */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-black/40 backdrop-blur-md">
          <Link href="/">Home</Link>
          <Link href="/Service">Services</Link>
          <Link href="/Portfolio">Portfolio</Link>
          <Link href="/Contact">Contact</Link>
        </div>
      )}
    </nav>
  );
}