import Link from "next/link";
import {
  BookOpen,
  Languages,
  GraduationCap,
  Moon,
  BookMarked,
  Headphones,
} from "lucide-react";


export default function CoursesPage() {


  const courses = [

    {
      title: "Quran Reading Course",
      slug: "quran-reading",
      duration: "3 Months",
      description:
      "Learn Quran reading from basic letters to fluent recitation.",
      icon: BookOpen,
    },


    {
      title: "Tajweed Course",
      slug: "tajweed",
      duration: "4 Months",
      description:
      "Learn Quran pronunciation and Tajweed rules properly.",
      icon: BookMarked,
    },


    {
      title: "Arabic Language Course",
      slug: "arabic-language",
      duration: "6 Months",
      description:
      "Learn Arabic speaking, grammar and Quranic Arabic.",
      icon: Languages,
    },


    {
      title: "Hifz Quran Course",
      slug: "hifz-quran",
      duration: "12 Months",
      description:
      "Memorize Quran with teacher guidance and revision plan.",
      icon: GraduationCap,
    },


    {
      title: "Islamic Studies Course",
      slug: "islamic-studies",
      duration: "4 Months",
      description:
      "Learn Seerah, Duas and basic Islamic teachings.",
      icon: Moon,
    },


    {
      title: "Quran Listening Practice",
      slug: "quran-listening",
      duration: "2 Months",
      description:
      "Improve Quran recitation through listening practice.",
      icon: Headphones,
    },

  ];





  return (

    <main className="
    min-h-screen
    bg-gradient-to-b
    from-yellow-50
    via-white
    to-emerald-50
    ">



      {/* Hero */}


      <section className="
      bg-gradient-to-br
      from-emerald-950
      via-emerald-800
      to-emerald-600
      py-20
      text-white
      ">


        <div className="
        max-w-6xl
        mx-auto
        px-6
        text-center
        ">


          <h1 className="
          text-5xl
          font-extrabold
          ">

            Our Quran & Arabic Courses

          </h1>


          <p className="
          mt-5
          text-emerald-100
          text-lg
          ">

            Choose your course and start your Islamic learning journey.

          </p>


        </div>


      </section>








      {/* Courses */}



      <section className="
      py-20
      ">


        <div className="
        max-w-7xl
        mx-auto
        px-6
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
        ">



        {
          courses.map((course)=>{


            const Icon = course.icon;



            return (

              <div

              key={course.slug}

              className="
              bg-gradient-to-br
              from-yellow-200
              via-yellow-400
              to-yellow-600
              p-[2px]
              rounded-3xl
              shadow-xl
              hover:-translate-y-2
              transition
              ">



                <div className="
                bg-white
                rounded-3xl
                p-8
                ">




                  <div className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-emerald-900
                  flex
                  items-center
                  justify-center
                  ">


                    <Icon
                    className="text-yellow-400"
                    size={35}
                    />


                  </div>






                  <h2 className="
                  mt-6
                  text-2xl
                  font-bold
                  text-emerald-950
                  ">

                    {course.title}

                  </h2>





                  <p className="
                  mt-3
                  text-gray-600
                  ">

                    {course.description}

                  </p>






                  <div className="
                  mt-5
                  bg-yellow-50
                  p-3
                  rounded-xl
                  font-semibold
                  text-emerald-900
                  ">

                    Duration: {course.duration}

                  </div>






                  <Link

                  href={`/courses/${course.slug}`}

                  className="
                  mt-6
                  inline-block
                  bg-gradient-to-r
                  from-emerald-950
                  to-emerald-700
                  text-yellow-400
                  px-6
                  py-3
                  rounded-xl
                  font-bold
                  "

                  >

                    View Course

                  </Link>




                </div>



              </div>


            );


          })
        }



        </div>



      </section>



    </main>

  );

}