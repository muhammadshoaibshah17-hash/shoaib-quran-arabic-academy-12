import { MessageCircle, Mail, ShieldCheck } from "lucide-react";

export default function AskMufti() {
  return (
    <section className="py-24 bg-gradient-to-r from-emerald-900 to-emerald-700 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <ShieldCheck
            size={70}
            className="mx-auto text-yellow-400"
          />

          <h2 className="text-5xl font-bold mt-8">
            Ask a Mufti
          </h2>

          <p className="text-xl text-emerald-100 mt-6 max-w-3xl mx-auto leading-8">
            Have an Islamic question?
            Submit your question and receive authentic guidance
            based on the Quran and Sunnah.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">

            <MessageCircle
              size={50}
              className="text-yellow-400"
            />

            <h3 className="text-3xl font-bold mt-6">
              WhatsApp
            </h3>

            <p className="mt-4 text-emerald-100">
              Send your Islamic questions directly on WhatsApp.
            </p>

            <a
              href="https://wa.me/923045103458"
              target="_blank"
              className="inline-block mt-8 bg-yellow-400 text-emerald-950 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition"
            >
              Ask on WhatsApp
            </a>

          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">

            <Mail
              size={50}
              className="text-yellow-400"
            />

            <h3 className="text-3xl font-bold mt-6">
              Email
            </h3>

            <p className="mt-4 text-emerald-100">
              Send detailed Islamic questions by email.
            </p>

            <a
              href="mailto:muhammadshoaibshah17@gmail.com"
              className="inline-block mt-8 bg-white text-emerald-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition"
            >
              Send Email
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}