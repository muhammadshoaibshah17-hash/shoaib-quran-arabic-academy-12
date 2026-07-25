import Link from "next/link";
import {
  Clock,
  GraduationCap,
  CheckCircle,
  MessageCircle,
} from "lucide-react";


const courses = {

  "quran-reading": {
    title: "Quran Reading Course",
    description:
      "Learn Quran reading from basic Arabic letters to fluent Quran recitation.",
    duration: "3 Months",
    level: "Beginner to Advanced",
    points: [
      "Arabic letters recognition",
      "Correct pronunciation",
      "Quran reading practice",
      "Basic Tajweed rules",
      "Daily revision plan",
    ],
  },


  "tajweed": {
    title: "Tajweed Course",
    description:
      "Learn Quran recitation with correct Tajweed rules and improve your pronunciation.",
    duration: "4 Months",
    level: "All Levels",
    points: [
      "Makharij of Quran letters",
      "Rules of Tajweed",
      "Correction of mistakes",
      "Beautiful Quran recitation",
      "Practical exercises",
    ],
  },


  "arabic-language": {
    title: "Arabic Language Course",
    description:
      "Learn Arabic speaking, grammar and Quranic Arabic understanding.",
    duration: "6 Months",
    level: "Beginner",
    points: [
      "Arabic conversation",
      "Vocabulary building",
      "Grammar basics",
      "Speaking practice",
      "Quranic Arabic",
    ],
  },


  "hifz-quran": {
    title: "Hifz Quran Course",
    description:
      "Memorize Quran with proper teacher guidance and revision system.",
    duration: "12 Months",
    level: "All Levels",
    points: [
      "Daily memorization",
      "Revision schedule",
      "Teacher guidance",
      "Regular tests",
      "Mistake correction",
    ],
  },


  "islamic-studies": {
    title: "Islamic Studies Course",
    description:
      "Learn Seerah, Duas and important Islamic teachings.",
    duration: "4 Months",
    level: "Beginner",
    points: [
      "Seerah of Prophet ﷺ",
      "Daily Duas",
      "Basic Fiqh",
      "Islamic manners",
      "Hadith lessons",
    ],
  },


  "quran-listening": {
    title: "Quran Listening Practice",
    description:
      "Improve Quran recitation through listening and practice.",
    duration: "2 Months",
    level: "All Levels",
    points: [
      "Listen and repeat method",
      "Improve pronunciation",
      "Better fluency",
      "Recitation practice",
      "Audio learning",
    ],
  },

};





export default async function CourseDetail({

  params,

}: {

  params: Promise<{
    slug:string;
  }>;

}) {



  const { slug } = await params;



  const course =
  courses[slug as keyof typeof courses];





  if(!course){

    return (

      <div className="
      min-h-screen
      flex
      justify-center
      items-center
      ">

        <h1 className="
        text-4xl
        font-bold
        text-red-600
        ">

          Course Not Found

        </h1>

      </div>

    );

  }







  return (

    <main className="
    min-h-screen
    bg-gradient-to-b
    from-yellow-50
    to-emerald-50
    py-20
    ">



      <div className="
      max-w-5xl
      mx-auto
      px-6
      ">



        <div className="
        bg-gradient-to-br
        from-yellow-300
        via-yellow-500
        to-yellow-700
        p-1
        rounded-3xl
        shadow-2xl
        ">



          <div className="
          bg-gradient-to-br
          from-emerald-950
          to-emerald-700
          rounded-3xl
          p-10
          text-white
          ">



            <h1 className="
            text-4xl
            md:text-5xl
            font-extrabold
            ">

              {course.title}

            </h1>




            <p className="
            mt-5
            text-lg
            text-emerald-100
            ">

              {course.description}

            </p>







            <div className="
            grid
            md:grid-cols-2
            gap-5
            mt-8
            ">




              <div className="
              bg-white/10
              p-5
              rounded-xl
              flex
              gap-3
              ">

                <Clock
                className="text-yellow-400"
                />


                <div>

                  <h3 className="font-bold">
                    Duration
                  </h3>

                  <p>
                    {course.duration}
                  </p>

                </div>


              </div>






              <div className="
              bg-white/10
              p-5
              rounded-xl
              flex
              gap-3
              ">


                <GraduationCap
                className="text-yellow-400"
                />


                <div>

                  <h3 className="font-bold">
                    Level
                  </h3>


                  <p>
                    {course.level}
                  </p>

                </div>


              </div>



            </div>








            <h2 className="
            mt-10
            text-3xl
            font-bold
            ">

              What You Will Learn

            </h2>







            <div className="
            mt-5
            space-y-4
            ">


            {
              course.points.map((item)=>(


                <div

                key={item}

                className="
                flex
                gap-3
                items-center
                "

                >


                  <CheckCircle

                  className="text-yellow-400"

                  />


                  {item}


                </div>


              ))
            }


            </div>








            <Link

            href="/enroll"

            className="
            mt-10
            inline-flex
            items-center
            gap-3
            bg-yellow-400
            text-emerald-950
            px-8
            py-4
            rounded-xl
            font-bold
            shadow-lg
            hover:bg-yellow-300
            transition
            "

            >


              <MessageCircle size={22}/>


              Enroll Now


            </Link>





          </div>



        </div>



      </div>




    </main>

  );

}