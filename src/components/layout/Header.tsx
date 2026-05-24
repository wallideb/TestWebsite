"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-slate-900/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🦅</span>
          <span className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
            Raptor<span className="text-amber-400">Nest</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm text-white/70 hover:text-amber-400 transition-colors">
            Map
          </Link>
          <Link href="/species" className="text-sm text-white/70 hover:text-amber-400 transition-colors">
            Species
          </Link>
          <Link href="/live-cams" className="text-sm text-white/70 hover:text-amber-400 transition-colors">
            Live Cams
          </Link>
          <Link href="/about" className="text-sm text-white/70 hover:text-amber-400 transition-colors">
            About & Sources
          </Link>
        </nav>

        <button
          className="md:hidden text-white/70 hover:text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-slate-900/98 border-t border-white/10 px-4 py-3 flex flex-col gap-3">
          <Link href="/" className="text-sm text-white/70 hover:text-amber-400 py-1" onClick={() => setMobileOpen(false)}>Map</Link>
          <Link href="/species" className="text-sm text-white/70 hover:text-amber-400 py-1" onClick={() => setMobileOpen(false)}>Species</Link>
          <Link href="/live-cams" className="text-sm text-white/70 hover:text-amber-400 py-1" onClick={() => setMobileOpen(false)}>Live Cams</Link>
          <Link href="/about" className="text-sm text-white/70 hover:text-amber-400 py-1" onClick={() => setMobileOpen(false)}>About & Sources</Link>
        </nav>
      )}
    </header>
  );
}
