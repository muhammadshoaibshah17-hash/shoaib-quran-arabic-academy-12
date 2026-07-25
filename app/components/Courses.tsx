import Link from "next/link";

import {
  BookOpen,
  Languages,
  GraduationCap,
  Moon,
  BookMarked,
  Headphones,
} from "lucide-react";



export default function Courses() {


  const courses = [


    {
      title: "Quran Reading Course",

      slug: "quran-reading",

      description:
      "Learn Quran reading from basic Arabic letters to fluent Quran recitation.",

      icon: BookOpen,

    },



    {
      title: "Tajweed Course",

      slug: "tajweed",

      description:
      "Learn correct Quran pronunciation and Tajweed rules with practice.",

      icon: BookMarked,

    },



    {
      title: "Arabic Language Course",

      slug: "arabic-language",

      description:
      "Learn Arabic speaking, reading and Quranic Arabic understanding.",

      icon: Languages,

    },



    {
      title: "Hifz Quran Course",

      slug: "hifz-quran",

      description:
      "Memorize Quran with proper guidance and revision system.",

      icon: GraduationCap,

    },



    {
      title: "Islamic Studies",

      slug: "islamic-studies",

      description:
      "Learn Seerah, Duas and important Islamic knowledge.",

      icon: Moon,

    },



    {
      title: "Quran Listening Practice",

      slug: "quran-listening",

      description:
      "Improve your Quran recitation through listening exercises.",

      icon: Headphones,

    },


  ];






  return (


    <section className="
    py-24
    bg-gradient-to-b
    from-yellow-50
    via-white
    to-emerald-50
    ">



      <div className="
      max-w-7xl
      mx-auto
      px-6
      ">





        {/* Heading */}


        <div className="
        text-center
        max-w-3xl
        mx-auto
        ">


          <div className="
          inline-block
          bg-yellow-200
          text-emerald-950
          px-5
          py-2
          rounded-full
          font-bold
          ">

            Our Learning Programs

          </div>





          <h2 className="
          mt-6
          text-4xl
          md:text-5xl
          font-extrabold
          text-emerald-950
          ">


            Premium Quran & Arabic

            <span className="
            text-yellow-600
            ">

             Courses

            </span>


          </h2>




          <p className="
          mt-5
          text-gray-600
          text-lg
          ">

            Choose the course according to your learning goal
            and start your Islamic education journey.

          </p>


        </div>









        {/* Course Cards */}



        <div className="
        mt-14
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
          group
          bg-gradient-to-br
          from-yellow-200
          via-yellow-400
          to-yellow-600
          p-[2px]
          rounded-3xl
          shadow-xl
          hover:-translate-y-3
          transition-all
          duration-300
          ">



            <div className="
            bg-white
            rounded-3xl
            p-8
            h-full
            ">




              {/* Icon */}



              <div className="
              w-16
              h-16
              rounded-2xl
              bg-gradient-to-br
              from-emerald-950
              to-emerald-600
              flex
              items-center
              justify-center
              shadow-lg
              ">



                <Icon

                size={35}

                className="text-yellow-400"

                />


              </div>







              <h3 className="
              mt-6
              text-2xl
              font-bold
              text-emerald-950
              ">

                {course.title}

              </h3>







              <p className="
              mt-4
              text-gray-600
              leading-relaxed
              ">

                {course.description}

              </p>








              {/* Learn More Button */}



              <Link

              href={`/courses/${course.slug}`}

              className="
              mt-7
              inline-block
              bg-gradient-to-r
              from-emerald-950
              to-emerald-700
              text-yellow-400
              px-6
              py-3
              rounded-xl
              font-bold
              shadow-[0_5px_0_#064e3b]
              hover:translate-y-1
              hover:shadow-[0_2px_0_#064e3b]
              transition
              "


              >

                Learn More

              </Link>





            </div>



          </div>


          )


        })


        }





        </div>






      </div>



    </section>


  );

}