"use client";

import {
  User,
  Phone,
  BookOpen,
  Clock,
  MessageCircle,
} from "lucide-react";



export default function EnrollPage() {


  return (

    <main className="
    min-h-screen
    bg-gradient-to-b
    from-yellow-50
    via-white
    to-emerald-50
    py-20
    ">



      <div className="
      max-w-4xl
      mx-auto
      px-6
      ">




        {/* Heading */}


        <div className="
        text-center
        ">


          <h1 className="
          text-5xl
          font-extrabold
          text-emerald-950
          ">

            Join Quran Academy

          </h1>


          <p className="
          mt-5
          text-gray-600
          text-lg
          ">

            Fill this form to start your Quran learning journey.

          </p>


        </div>







        {/* Form Card */}



        <div className="
        mt-12
        bg-gradient-to-br
        from-yellow-200
        via-yellow-400
        to-yellow-600
        p-1
        rounded-3xl
        shadow-2xl
        ">




          <form className="
          bg-white
          rounded-3xl
          p-8
          md:p-10
          space-y-6
          ">




            <div>

              <label className="
              font-bold
              text-emerald-950
              ">

                Full Name

              </label>


              <input

              type="text"

              placeholder="Enter your name"

              className="
              mt-2
              w-full
              border
              rounded-xl
              p-4
              "

              />

            </div>







            <div>

              <label className="
              font-bold
              text-emerald-950
              ">

                Father Name

              </label>


              <input

              type="text"

              placeholder="Father name"

              className="
              mt-2
              w-full
              border
              rounded-xl
              p-4
              "

              />

            </div>







            <div>

              <label className="
              font-bold
              text-emerald-950
              ">

                WhatsApp Number

              </label>


              <input

              type="tel"

              placeholder="0300 XXXXXXX"

              className="
              mt-2
              w-full
              border
              rounded-xl
              p-4
              "

              />

            </div>







            <div>

              <label className="
              font-bold
              text-emerald-950
              ">

                Select Course

              </label>



              <select

              className="
              mt-2
              w-full
              border
              rounded-xl
              p-4
              "

              >


                <option>
                  Quran Reading Course
                </option>


                <option>
                  Tajweed Course
                </option>


                <option>
                  Arabic Language Course
                </option>


                <option>
                  Hifz Quran Course
                </option>


                <option>
                  Islamic Studies
                </option>


              </select>


            </div>







            <div>

              <label className="
              font-bold
              text-emerald-950
              ">

                Preferred Class Timing

              </label>


              <input

              type="text"

              placeholder="Example: Evening 7 PM"

              className="
              mt-2
              w-full
              border
              rounded-xl
              p-4
              "

              />

            </div>







            <div>

              <label className="
              font-bold
              text-emerald-950
              ">

                Message

              </label>


              <textarea

              rows={4}

              placeholder="Your message"

              className="
              mt-2
              w-full
              border
              rounded-xl
              p-4
              "

              ></textarea>


            </div>







            <button

            type="submit"

            className="
            w-full
            bg-gradient-to-r
            from-emerald-950
            to-emerald-700
            text-yellow-400
            py-4
            rounded-xl
            font-bold
            text-lg
            hover:scale-105
            transition
            "

            >

              Submit Admission Request

            </button>







            <a

            href="https://wa.me/923045103458"

            className="
            w-full
            flex
            items-center
            justify-center
            gap-3
            bg-green-500
            text-white
            py-4
            rounded-xl
            font-bold
            "

            >

              <MessageCircle/>

              Contact on WhatsApp

            </a>





          </form>



        </div>





      </div>




    </main>

  );

}