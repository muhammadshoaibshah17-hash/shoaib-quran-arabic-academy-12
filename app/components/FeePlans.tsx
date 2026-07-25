import { CheckCircle } from "lucide-react";

export default function FeePlans() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-emerald-700 font-semibold uppercase tracking-widest">
            Fee Plans
          </span>

          <h2 className="text-5xl font-bold text-emerald-900 mt-4">
            Affordable Monthly Fees
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            We offer separate fee plans for students in Pakistan and for
            international students.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Pakistan Plan */}

          <div className="rounded-3xl border-2 border-emerald-700 p-10 shadow-xl">

            <h3 className="text-3xl font-bold text-emerald-900">
              🇵🇰 Pakistan
            </h3>

            <p className="text-5xl font-extrabold mt-6 text-emerald-700">
              Rs. 5,000
              <span className="text-lg text-gray-500"> / Month</span>
            </p>

            <div className="space-y-4 mt-10">

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600"/>
                <span>3 Classes per Week</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600"/>
                <span>Live Zoom Classes</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600"/>
                <span>Quran & Tajweed</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600"/>
                <span>Monthly Progress Report</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600"/>
                <span>Free Trial Class</span>
              </div>

            </div>

            <button className="mt-10 w-full bg-emerald-700 text-white py-4 rounded-xl font-bold hover:bg-emerald-800 transition">
              Enroll Now
            </button>

          </div>

          {/* International Plan */}

          <div className="rounded-3xl bg-emerald-900 text-white p-10 shadow-xl">

            <h3 className="text-3xl font-bold">
              🌍 International
            </h3>

            <p className="text-5xl font-extrabold mt-6 text-yellow-400">
              $50
              <span className="text-lg text-gray-300"> / Month</span>
            </p>

            <div className="space-y-4 mt-10">

              <div className="flex items-center gap-3">
                <CheckCircle className="text-yellow-400"/>
                <span>3 Live Classes per Week</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-yellow-400"/>
                <span>Flexible Timings</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-yellow-400"/>
                <span>One-to-One Teaching</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-yellow-400"/>
                <span>Progress Report</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-yellow-400"/>
                <span>Free Trial Class</span>
              </div>

            </div>

            <button className="mt-10 w-full bg-yellow-400 text-emerald-950 py-4 rounded-xl font-bold hover:bg-yellow-300 transition">
              Book Free Trial
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}