import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ahmed Ali",
    country: "🇵🇰 Pakistan",
    review:
      "Excellent Quran classes. The teaching style is very clear and easy to understand.",
  },
  {
    name: "Fatimah Khan",
    country: "🇦🇪 UAE",
    review:
      "My children improved their Quran recitation within a few months. Highly recommended.",
  },
  {
    name: "Abdullah",
    country: "🇬🇧 United Kingdom",
    review:
      "Professional teacher with excellent Arabic and Tajweed knowledge.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-emerald-700 font-semibold uppercase tracking-widest">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold text-emerald-900 mt-4">
            What Our Students Say
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="flex text-yellow-400 mb-4">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
              </div>

              <p className="text-gray-600 leading-7">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold text-xl text-emerald-900">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.country}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}