import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  Star,
  MessageCircle,
  CheckCircle,
  Users,
  Award,
} from "lucide-react";


export default function Hero() {

  return (

    <section className="
    relative
    overflow-hidden
    min-h-[90vh]
    bg-gradient-to-br
    from-emerald-950
    via-emerald-800
    to-emerald-600
    text-white
    ">


      {/* Golden Glow */}

      <div className="
      absolute
      -top-20
      -right-20
      w-96
      h-96
      bg-yellow-400
      rounded-full
      blur-3xl
      opacity-30
      "></div>


      <div className="
      absolute
      bottom-0
      left-0
      w-80
      h-80
      bg-yellow-500
      rounded-full
      blur-3xl
      opacity-20
      "></div>




      <div className="
      max-w-7xl
      mx-auto
      px-6
      py-24
      grid
      lg:grid-cols-2
      gap-12
      items-center
      ">



        {/* LEFT SIDE */}


        <div>


          <div className="
          inline-flex
          items-center
          gap-2
          bg-yellow-400/20
          border
          border-yellow-400
          px-5
          py-2
          rounded-full
          text-yellow-300
          font-bold
          ">

            <Star size={18}/>

            Trusted Quran & Arabic Academy

          </div>





          <h1 className="
          mt-6
          text-5xl
          md:text-6xl
          font-extrabold
          leading-tight
          ">

            Learn Quran & Arabic

            <span className="
            block
            text-yellow-400
            ">

              Online With Shoaib Academy

            </span>

          </h1>






          <p className="
          mt-6
          text-lg
          text-emerald-100
          leading-relaxed
          ">

            Learn Quran with Tajweed, Arabic Language,
            Islamic Studies and Seerah from experienced teachers
            through online classes.

          </p>







          {/* Buttons */}



          <div className="
          mt-8
          flex
          flex-wrap
          gap-5
          ">



            <Link

            href="/contact"

            className="
            bg-gradient-to-r
            from-yellow-200
            via-yellow-400
            to-yellow-600
            text-emerald-950
            px-8
            py-4
            rounded-xl
            font-extrabold
            shadow-[0_6px_0_#a16207]
            hover:translate-y-1
            transition
            "

            >

              Enroll Now

            </Link>






            <Link

            href="https://wa.me/923045103458"

            className="
            bg-white
            text-emerald-900
            px-8
            py-4
            rounded-xl
            font-bold
            flex
            items-center
            gap-2
            shadow-xl
            hover:bg-yellow-100
            transition
            "

            >

              <MessageCircle size={20}/>

              Free Trial

            </Link>



          </div>









          {/* Stats */}



          <div className="
          mt-10
          grid
          grid-cols-3
          gap-4
          ">


            <div className="
            bg-white/10
            backdrop-blur
            border
            border-white/20
            rounded-2xl
            p-4
            text-center
            ">

              <Users
              className="mx-auto text-yellow-400"
              />

              <h3 className="font-bold text-xl">
                100+
              </h3>

              <p className="text-sm">
                Students
              </p>

            </div>




            <div className="
            bg-white/10
            backdrop-blur
            border
            border-white/20
            rounded-2xl
            p-4
            text-center
            ">


              <Award
              className="mx-auto text-yellow-400"
              />

              <h3 className="font-bold text-xl">
                5+
              </h3>

              <p className="text-sm">
                Years
              </p>


            </div>





            <div className="
            bg-white/10
            backdrop-blur
            border
            border-white/20
            rounded-2xl
            p-4
            text-center
            ">


              <BookOpen
              className="mx-auto text-yellow-400"
              />

              <h3 className="font-bold text-xl">
                Quran
              </h3>

              <p className="text-sm">
                Tajweed
              </p>


            </div>



          </div>



        </div>









        {/* RIGHT PREMIUM CARD */}




        <div className="relative">





          {/* Floating Badge */}



          <div className="
          absolute
          -top-8
          -left-5
          bg-gradient-to-r
          from-yellow-200
          via-yellow-400
          to-yellow-600
          text-emerald-950
          px-5
          py-3
          rounded-2xl
          shadow-xl
          font-bold
          z-10
          ">

            ⭐ Certified Quran Teacher

          </div>







          {/* Gold Border */}



          <div className="
          bg-gradient-to-br
          from-yellow-100
          via-yellow-400
          to-yellow-600
          p-[3px]
          rounded-[35px]
          shadow-[0_20px_60px_rgba(234,179,8,0.35)]
          ">





            {/* Premium Card */}



            <div className="
            bg-gradient-to-br
            from-emerald-950
            via-emerald-900
            to-emerald-700
            rounded-[35px]
            p-10
            text-center
            border
            border-yellow-400/30
            ">





              <div className="
              w-48
              h-48
              mx-auto
              rounded-full
              bg-gradient-to-br
              from-yellow-200
              via-yellow-400
              to-yellow-600
              flex
              items-center
              justify-center
              shadow-2xl
              ">


                <GraduationCap
                size={90}
                className="text-emerald-950"
                />


              </div>






              <h2 className="
              mt-6
              text-3xl
              font-bold
              ">

                Learn Quran Academy

              </h2>




              <p className="
              mt-3
              text-emerald-100
              ">

                Quran • Tajweed • Arabic • Islamic Studies

              </p>







              <div className="
              mt-8
              grid
              grid-cols-2
              gap-4
              ">




                <div className="
                bg-gradient-to-br
                from-yellow-400/20
                to-emerald-500/20
                border
                border-yellow-400/30
                p-4
                rounded-xl
                ">


                  <CheckCircle
                  className="mx-auto text-yellow-400"
                  />

                  Tajweed


                </div>







                <div className="
                bg-gradient-to-br
                from-yellow-400/20
                to-emerald-500/20
                border
                border-yellow-400/30
                p-4
                rounded-xl
                ">


                  <CheckCircle
                  className="mx-auto text-yellow-400"
                  />

                  Arabic


                </div>




              </div>





            </div>



          </div>




        </div>




      </div>



    </section>

  );

}