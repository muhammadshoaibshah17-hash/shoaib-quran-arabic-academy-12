import { Phone, MessageCircle, Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <span className="uppercase tracking-widest text-yellow-400 font-semibold">
          Start Today
        </span>

        <h2 className="text-5xl font-bold mt-5">
          Begin Your Quran Journey Today
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-emerald-100 text-lg leading-8">
          Join students from Pakistan, Saudi Arabia, UAE, UK, USA and many
          other countries. Book your FREE trial class today.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-12">

          <a
            href="https://wa.me/923045103458"
            target="_blank"
            className="flex items-center gap-3 bg-yellow-400 text-emerald-950 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition"
          >
            <MessageCircle size={22} />
            WhatsApp Now
          </a>

          <a
            href="mailto:muhammadshoaibshah17@gmail.com"
            className="flex items-center gap-3 border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-emerald-900 transition"
          >
            <Mail size={22} />
            Email Us
          </a>

          <a
            href="tel:+923045103458"
            className="flex items-center gap-3 border-2 border-yellow-400 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 hover:text-emerald-950 transition"
          >
            <Phone size={22} />
            Call Now
          </a>

        </div>

      </div>
    </section>
  );
}