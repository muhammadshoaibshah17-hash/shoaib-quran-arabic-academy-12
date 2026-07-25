import {
  BookOpen,
  GraduationCap,
  Languages,
  CheckCircle,
  Star,
} from "lucide-react";


export default function About() {

  return (

    <section className="
    py-24
    bg-gradient-to-b
    from-white
    to-yellow-50
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
          inline-flex
          items-center
          gap-2
          bg-yellow-100
          text-emerald-900
          px-5
          py-2
          rounded-full
          font-bold
          ">

            <Star className="text-yellow-600"/>

            About Our Academy

          </div>





          <h2 className="
          mt-6
          text-4xl
          md:text-5xl
          font-extrabold
          text-emerald-950
          ">


            Learn Quran With

            <span className="
            text-yellow-600
            ">

              Shoaib Academy

            </span>


          </h2>





          <p className="
          mt-5
          text-gray-600
          text-lg
          ">

            A professional online platform where students learn
            Quran, Tajweed, Arabic Language and Islamic Studies
            from experienced teachers.

          </p>


        </div>









        <div className="
        mt-16
        grid
        lg:grid-cols-2
        gap-12
        items-center
        ">




          {/* Left Card */}



          <div className="
          relative
          ">



            <div className="
            bg-gradient-to-br
            from-yellow-200
            via-yellow-400
            to-yellow-600
            p-1
            rounded-[35px]
            shadow-2xl
            ">




              <div className="
              bg-gradient-to-br
              from-emerald-950
              via-emerald-900
              to-emerald-700
              rounded-[35px]
              p-10
              text-white
              text-center
              ">




                <div className="
                w-36
                h-36
                mx-auto
                rounded-full
                bg-yellow-400
                flex
                items-center
                justify-center
                shadow-xl
                ">


                  <GraduationCap

                  size={70}

                  className="text-emerald-950"

                  />


                </div>





                <h3 className="
                mt-6
                text-3xl
                font-bold
                ">

                  Muhammad Shoaib

                </h3>




                <p className="
                mt-3
                text-yellow-300
                font-semibold
                ">

                  Quran & Arabic Teacher

                </p>





                <p className="
                mt-5
                text-emerald-100
                ">

                  Dedicated to helping students understand
                  Quran with Tajweed and learn Arabic easily.

                </p>



              </div>


            </div>




          </div>









          {/* Right Content */}



          <div>



            <h3 className="
            text-3xl
            font-bold
            text-emerald-950
            ">

              Why Choose Shoaib Academy?

            </h3>






            <p className="
            mt-5
            text-gray-600
            leading-relaxed
            ">


              Our mission is to provide quality Islamic education
              through modern online teaching methods. Students can
              learn from anywhere in the world with flexible timings.


            </p>







            <div className="
            mt-8
            grid
            gap-5
            ">




              <div className="
              bg-white
              rounded-2xl
              p-5
              shadow-lg
              border-l-4
              border-yellow-500
              flex
              gap-4
              items-center
              ">


                <BookOpen
                className="text-emerald-700"
                size={35}
                />


                <div>

                  <h4 className="font-bold text-emerald-950">

                    Quran With Tajweed

                  </h4>

                  <p className="text-gray-600">

                    Correct pronunciation and beautiful recitation.

                  </p>

                </div>


              </div>








              <div className="
              bg-white
              rounded-2xl
              p-5
              shadow-lg
              border-l-4
              border-yellow-500
              flex
              gap-4
              items-center
              ">


                <Languages
                className="text-emerald-700"
                size={35}
                />


                <div>

                  <h4 className="font-bold text-emerald-950">

                    Arabic Language

                  </h4>

                  <p className="text-gray-600">

                    Learn Arabic speaking and understanding skills.

                  </p>

                </div>


              </div>









              <div className="
              bg-white
              rounded-2xl
              p-5
              shadow-lg
              border-l-4
              border-yellow-500
              flex
              gap-4
              items-center
              ">



                <CheckCircle
                className="text-emerald-700"
                size={35}
                />



                <div>


                  <h4 className="font-bold text-emerald-950">

                    Flexible Online Classes

                  </h4>


                  <p className="text-gray-600">

                    Learn according to your available schedule.

                  </p>


                </div>


              </div>




            </div>




          </div>






        </div>





      </div>


    </section>

  );

}