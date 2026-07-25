import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="bg-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            About Shoaib Quran Academy
          </h1>

          <p className="mt-6 text-xl text-emerald-100 max-w-3xl mx-auto">
            Learn Quran, Arabic Language, Tajweed, Seerah and Islamic
            Studies from qualified scholars with flexible online classes
            for students worldwide.
          </p>

        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-4xl font-bold text-emerald-900">
              Our Mission
            </h2>

            <p className="mt-6 text-gray-700 leading-8">
              Our mission is to provide high-quality Islamic education to
              Muslims across the world through modern online learning.
              We focus on Quran recitation, Tajweed, Arabic language,
              Seerah, Islamic studies, and authentic guidance.
            </p>

            <div className="mt-8 space-y-4">

              <p>✅ Qualified Islamic Scholar</p>
              <p>✅ One-to-One Online Classes</p>
              <p>✅ Male & Female Students</p>
              <p>✅ Flexible Timings</p>
              <p>✅ Worldwide Admissions</p>

            </div>

          </div>

          <div className="bg-emerald-50 rounded-3xl p-10 shadow-xl">

            <h3 className="text-3xl font-bold text-emerald-900">
              Why Students Choose Us
            </h3>

            <div className="mt-8 space-y-5">

              <div>📖 Quran with Tajweed</div>

              <div>🗣 Arabic Speaking Course</div>

              <div>🕌 Seerah & Islamic Studies</div>

              <div>❓ Ask a Mufti Service</div>

              <div>🌍 International Online Classes</div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}