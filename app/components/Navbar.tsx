"use client";

import Link from "next/link";
import { Menu, X, BookOpen } from "lucide-react";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Fees", href: "/fees" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Ask Mufti", href: "/ask-mufti" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-emerald-900 p-3 rounded-xl text-yellow-400 shadow-[0_4px_0_#064e3b]">
            <BookOpen size={28} />
          </div>

          <div>
            <h1 className="text-xl font-extrabold text-emerald-950">
              Learn Quran
            </h1>

            <p className="text-sm font-semibold text-emerald-900">
              With Shoaib
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-5">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
                bg-yellow-300
                text-emerald-950
                font-bold
                px-4
                py-2
                rounded-xl
                shadow-[0_5px_0_#b8860b]
                hover:translate-y-1
                hover:shadow-[0_2px_0_#b8860b]
                transition-all
                duration-200
              "
            >
              {link.name}
            </Link>
          ))}

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Enroll Button */}
          <Link
            href="/contact"
            className="
              bg-emerald-900
              text-yellow-400
              px-6
              py-3
              rounded-xl
              font-extrabold
              shadow-[0_5px_0_#064e3b]
              hover:translate-y-1
              hover:shadow-[0_2px_0_#064e3b]
              transition-all
            "
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-emerald-950"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-yellow-500 border-t border-yellow-600">
          <div className="flex flex-col p-6 gap-5">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  bg-yellow-300
                  text-emerald-950
                  font-bold
                  px-5
                  py-3
                  rounded-xl
                  text-center
                  shadow-[0_4px_0_#b8860b]
                "
              >
                {link.name}
              </Link>
            ))}

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Enroll Button */}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="
                bg-emerald-900
                text-yellow-400
                text-center
                py-3
                rounded-xl
                font-bold
                shadow-[0_4px_0_#064e3b]
              "
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}