import {
  Users,
  Globe,
  GraduationCap,
  BookOpen,
} from "lucide-react";

const stats = [
  {
    icon: <Users size={42} />,
    number: "500+",
    title: "Students",
  },
  {
    icon: <Globe size={42} />,
    number: "15+",
    title: "Countries",
  },
  {
    icon: <GraduationCap size={42} />,
    number: "5+",
    title: "Years Experience",
  },
  {
    icon: <BookOpen size={42} />,
    number: "1000+",
    title: "Online Classes",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-widest text-yellow-400 font-semibold">
            Academy Statistics
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Trusted By Students Worldwide
          </h2>

          <p className="mt-6 text-emerald-100 max-w-3xl mx-auto">
            We provide professional Quran, Arabic and Islamic education
            for students from different countries.
          </p>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-10 text-center hover:bg-white/20 transition"
            >
              <div className="flex justify-center text-yellow-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-5xl font-bold">
                {item.number}
              </h3>

              <p className="mt-3 text-emerald-100 text-lg">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}