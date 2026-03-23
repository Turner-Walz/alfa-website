"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function SiteHeader() {
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-700 bg-zinc-900/95 backdrop-blur-md">
            <div className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:grid md:grid-cols-3 md:items-center">
                {/* Mobile centered logo */}
                <a
                    href="/"
                    className="absolute left-1/2 -translate-x-1/2 md:hidden"
                    onClick={closeMenu}
                >
                    <img
                        src="/ALFA-01.png"
                        alt="ALFA logo"
                        className="h-14 w-auto"
                    />
                </a>

                {/* Desktop logo */}
                <a
                    href="/"
                    className="hidden md:flex md:items-center md:justify-start"
                >
                    <img
                        src="/ALFA-01.png"
                        alt="ALFA logo"
                        className="h-14 w-auto"
                    />
                </a>

                {/* Desktop nav */}
                <nav className="hidden items-center justify-center gap-8 text-sm font-medium text-zinc-300 md:flex">
                    <a href="/" className="transition hover:text-white">Home</a>
                    <a href="/about" className="transition hover:text-white">About</a>
                    <a href="/media" className="transition hover:text-white">Media</a>
                    <a href="/construction" className="transition hover:text-white">Construction</a>
                    <a href="/#contact" className="transition hover:text-white">Contact</a>
                </nav>

                {/* Mobile menu button / desktop spacer */}
                <div className="ml-auto flex justify-end md:justify-end">
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={open}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white shadow-lg transition hover:bg-white/10 md:hidden"
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="border-t border-white/10 bg-zinc-900/98 px-5 pb-5 pt-4">
                    <nav className="mx-auto flex max-w-md flex-col gap-2">
                        <a
                            href="/"
                            onClick={closeMenu}
                            className="rounded-2xl border border-transparent px-4 py-3 text-base font-medium text-zinc-200 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            onClick={closeMenu}
                            className="rounded-2xl border border-transparent px-4 py-3 text-base font-medium text-zinc-200 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                        >
                            About
                        </a>
                        <a
                            href="/media"
                            onClick={closeMenu}
                            className="rounded-2xl border border-transparent px-4 py-3 text-base font-medium text-zinc-200 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                        >
                            Media
                        </a>
                        <a
                            href="/construction"
                            onClick={closeMenu}
                            className="rounded-2xl border border-transparent px-4 py-3 text-base font-medium text-zinc-200 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                        >
                            Construction
                        </a>
                        <a
                            href="/#contact"
                            onClick={closeMenu}
                            className="rounded-2xl border border-transparent px-4 py-3 text-base font-medium text-zinc-200 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}