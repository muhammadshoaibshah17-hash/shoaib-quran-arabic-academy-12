import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  BookOpen,
  Languages,
  HeartHandshake,
  Scale,
  Star,
  CheckCircle,
} from "lucide-react";

const plans = [
  {
    title: "Noorani Qaida",
    icon: <BookOpen size={42} />,
    pakistan: "Rs. 2,000 / Month",
    international: "$30 / Month",
    popular: false,
  },
  {
    title: "Quran with Tajweed",
    icon: <BookOpen size={42} />,
    pakistan: "Rs. 3,000 / Month",
    international: "$40 / Month",
    popular: false,
  },
  {
    title: "Arabic Language",
    icon: <Languages size={42} />,
    pakistan: "Rs. 4,000 / Month",
    international: "$50 / Month",
    popular: false,
  },
  {
    title: "Seerah of Prophet ﷺ",
    icon: <HeartHandshake size={42} />,
    pakistan: "Rs. 2,500 / Month",
    international: "$35 / Month",
    popular: false,
  },
  {
    title: "Daily Masail (Fiqh)",
    icon: <Scale size={42} />,
    pakistan: "Rs. 2,500 / Month",
    international: "$35 / Month",
    popular: false,
  },
  {
    title: "Premium Combo",
    icon: <Star size={42} />,
    pakistan: "Rs. 6,000 / Month",
    international: "$80 / Month",
    popular: true,
  },
];

export default function FeesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Course Fee Plans
          </h1>

          <p className="mt-6 text-xl text-emerald-100 max-w-3xl mx-auto">
            Choose the course that best fits your learning journey.
            Affordable fee plans for students in Pakistan and worldwide.
          </p>

        </div>

      </section>

      {/* Pricing */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {plans.map((plan, index) => (

            <div
              key={index}
              className={`rounded-3xl shadow-xl p-8 transition hover:scale-105 ${
                plan.popular
                  ? "bg-emerald-900 text-white border-4 border-yellow-400"
                  : "bg-white"
              }`}
            >

              {plan.popular && (
                <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-5">
                  ⭐ Most Popular
                </div>
              )}

              <div
                className={`mb-6 ${
                  plan.popular ? "text-yellow-400" : "text-emerald-700"
                }`}
              >
                {plan.icon}
              </div>

              <h2 className="text-3xl font-bold">
                {plan.title}
              </h2>

              <div className="mt-8">

                <h3 className="font-semibold">
                  🇵🇰 Pakistan
                </h3>

                <p className="text-3xl font-bold mt-2">
                  {plan.pakistan}
                </p>

              </div>

              <div className="mt-6">

                <h3 className="font-semibold">
                  🌍 International
                </h3>

                <p
                  className={`text-3xl font-bold mt-2 ${
                    plan.popular ? "text-yellow-400" : "text-emerald-700"
                  }`}
                >
                  {plan.international}
                </p>

              </div>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  Live One-to-One Classes
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  Flexible Class Timing
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  Monthly Progress Report
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  Free Trial Class
                </div>

              </div>

              <Link
                href="/contact"
                className={`block mt-10 text-center py-4 rounded-full font-bold transition ${
                  plan.popular
                    ? "bg-yellow-400 text-emerald-900 hover:bg-yellow-300"
                    : "bg-emerald-700 text-white hover:bg-emerald-800"
                }`}
              >
                Enroll Now
              </Link>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-emerald-900 text-white py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Start Your Learning Journey Today
          </h2>

          <p className="mt-6 text-lg text-emerald-100">
            Book your FREE trial class and begin learning with experienced teachers.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-yellow-400 text-emerald-900 px-10 py-4 rounded-full font-bold hover:bg-yellow-300 transition"
          >
            Book Free Trial
          </Link>

        </div>

      </section>

      <Footer />
    </>
  );
}