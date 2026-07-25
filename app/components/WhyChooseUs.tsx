import {
  Award,
  Clock,
  Globe,
  ShieldCheck,
  UserCheck,
  Video,
} from "lucide-react";

const features = [
  {
    icon: <Award size={42} />,
    title: "Qualified Teacher",
    desc: "Learn from a qualified Islamic scholar with years of teaching experience.",
  },
  {
    icon: <Video size={42} />,
    title: "Live Online Classes",
    desc: "Interactive one-to-one and group classes through Zoom or Google Meet.",
  },
  {
    icon: <Clock size={42} />,
    title: "Flexible Timings",
    desc: "Choose class timings that fit your daily routine.",
  },
  {
    icon: <Globe size={42} />,
    title: "Worldwide Students",
    desc: "Teaching students from Pakistan, Saudi Arabia, UAE, UK, USA and more.",
  },
  {
    icon: <ShieldCheck size={42} />,
    title: "Authentic Islamic Knowledge",
    desc: "Courses based on the Quran, Sunnah and classical Islamic scholarship.",
  },
  {
    icon: <UserCheck size={42} />,
    title: "Personal Attention",
    desc: "Every student receives individual guidance and regular progress reports.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-emerald-700 font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="text-5xl font-bold text-emerald-900 mt-4">
            Excellence in Quran & Arabic Education
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            We are committed to providing high-quality Islamic education
            with modern online teaching methods for students worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-emerald-900 mt-6">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}