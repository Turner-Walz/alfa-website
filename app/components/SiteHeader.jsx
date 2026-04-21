"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function SiteHeader() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    const closeMenu = () => setOpen(false);

    useEffect(() => {
        if (!open) return;
        const handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                closeMenu();
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [open]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/media", label: "Media" },
        { href: "/construction", label: "Construction" },
        { href: "/#contact", label: "Contact" },
    ];

    return (
        <header ref={menuRef} className="sticky top-0 z-50 border-b border-zinc-700 bg-zinc-900/95 backdrop-blur-md">
            <div className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:grid md:grid-cols-3 md:items-center">
                <a href="/" className="absolute left-1/2 -translate-x-1/2 md:hidden" onClick={closeMenu}>
                    <img src="/ALFA-01.png" alt="ALFA logo" className="h-14 w-auto" />
                </a>
                <a href="/" className="hidden md:flex md:items-center md:justify-start">
                    <img src="/ALFA-01.png" alt="ALFA logo" className="h-14 w-auto" />
                </a>
                <nav className="hidden items-center justify-center gap-8 text-sm font-medium text-zinc-300 md:flex">
                    {navLinks.map(({ href, label }) => (
                        <a key={label} href={href} className="transition hover:text-white">{label}</a>
                    ))}
                </nav>
                <div className="hidden md:block" />
                <div className="ml-auto flex justify-end md:hidden">
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={open}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white shadow-lg transition hover:bg-white/10"
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>
            <div className={`fixed left-0 right-0 top-[73px] z-40 md:hidden transition-all duration-300 ease-out ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                <div className="border-b border-white/10 bg-zinc-900/98 backdrop-blur-md px-5 pb-6 pt-4 shadow-2xl">
                    <nav className="mx-auto flex max-w-md flex-col gap-1">
                        {navLinks.map(({ href, label }) => (
                            <a key={label} href={href} onClick={closeMenu} className="rounded-2xl border border-transparent px-4 py-3.5 text-lg font-medium text-zinc-200 transition hover:border-white/10 hover:bg-white/5 hover:text-white">
                                {label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
            <div className={`fixed inset-0 top-[73px] z-30 bg-black/40 md:hidden transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={closeMenu} />
        </header>
    );
}