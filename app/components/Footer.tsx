import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Academy */}
          <div>
            <h2 className="text-3xl font-bold text-yellow-400">
              Shoaib Quran Academy
            </h2>

            <p className="mt-6 text-gray-300 leading-7">
              Professional Online Quran, Tajweed, Arabic Language,
              Seerah and Islamic Studies Academy for students
              around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="space-y-3">
              <Link href="/" className="block hover:text-yellow-400">
                Home
              </Link>

              <Link href="/about" className="block hover:text-yellow-400">
                About
              </Link>

              <Link href="/courses" className="block hover:text-yellow-400">
                Courses
              </Link>

              <Link href="/fees" className="block hover:text-yellow-400">
                Fees
              </Link>

              <Link href="/ask-mufti" className="block hover:text-yellow-400">
                Ask a Mufti
              </Link>

              <Link href="/contact" className="block hover:text-yellow-400">
                Contact
              </Link>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Our Courses
            </h3>

            <div className="space-y-3 text-gray-300">
              <p>📖 Quran with Tajweed</p>
              <p>🗣 Arabic Language</p>
              <p>🕌 Seerah Course</p>
              <p>❓ Ask a Mufti</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <Phone className="text-yellow-400" size={20} />
                <span>+92 3045103458</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-yellow-400" size={20} />
                <span>muhammadshoaibshah17@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-yellow-400" size={20} />
                <span>Peshawar, Pakistan</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-emerald-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-gray-400 text-sm">
            © 2026 Shoaib Quran Academy. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed for Worldwide Quran Students 🌍
          </p>

        </div>
      </div>
    </footer>
  );
}