import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  MessageCircle,
  Send,
  BookOpen,
  User,
  Phone,
  Mail,
} from "lucide-react";


export default function AskMuftiPage() {

  return (

    <>

      <Navbar />


      {/* Hero Section */}

      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Ask Mufti
          </h1>

          <p className="mt-5 text-xl text-emerald-100">
            Submit your Islamic questions and get authentic guidance
          </p>

        </div>

      </section>





      {/* Main Section */}


      <section className="py-20 bg-gray-50">


        <div className="max-w-5xl mx-auto px-6">



          <div className="bg-white shadow-xl rounded-3xl p-8 md:p-12">



            <div className="text-center mb-10">


              <BookOpen
              className="mx-auto text-emerald-700"
              size={45}
              />


              <h2 className="text-4xl font-bold text-emerald-900 mt-4">
                Submit Your Question
              </h2>


              <p className="text-gray-600 mt-3">
                Ask your Islamic questions related to Quran,
                Hadith and Islamic rulings.
              </p>


            </div>







            <form className="space-y-6">



              {/* Name */}

              <div>

                <label className="font-semibold">
                  Full Name
                </label>

                <div className="flex items-center border rounded-xl mt-2">

                  <User className="ml-4 text-emerald-700"/>

                  <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-4 outline-none"
                  />

                </div>

              </div>





              {/* Email */}

              <div>

                <label className="font-semibold">
                  Email Address (Optional)
                </label>


                <div className="flex items-center border rounded-xl mt-2">


                  <Mail className="ml-4 text-emerald-700"/>


                  <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-4 outline-none"
                  />


                </div>


              </div>







              {/* WhatsApp */}

              <div>

                <label className="font-semibold">
                  WhatsApp Number
                </label>


                <div className="flex items-center border rounded-xl mt-2">


                  <Phone className="ml-4 text-emerald-700"/>


                  <input
                  type="text"
                  placeholder="0304 XXXXXXX"
                  className="w-full p-4 outline-none"
                  />


                </div>


              </div>








              {/* Category */}

              <div>


                <label className="font-semibold">
                  Question Category
                </label>


                <select
                className="w-full border rounded-xl p-4 mt-2 outline-none"
                >

                  <option>
                    Select Category
                  </option>

                  <option>
                    Aqeedah
                  </option>

                  <option>
                    Fiqh
                  </option>

                  <option>
                    Quran & Tafseer
                  </option>

                  <option>
                    Hadith
                  </option>

                  <option>
                    Family Issues
                  </option>

                  <option>
                    Other
                  </option>


                </select>


              </div>







              {/* Question */}

              <div>


                <label className="font-semibold">
                  Your Islamic Question
                </label>


                <textarea

                rows={6}

                placeholder="Write your question here..."

                className="w-full border rounded-xl p-4 mt-2 outline-none"

                ></textarea>


              </div>








              {/* Submit Button */}


              <button

              type="submit"

              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3"

              >

                <Send size={22}/>

                Submit Question

              </button>






            </form>







            {/* WhatsApp Button */}


            <a

            href="https://wa.me/923045103458"

            target="_blank"

            className="mt-5 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3"

            >

              <MessageCircle size={22}/>

              Ask Through WhatsApp

            </a>







            {/* Disclaimer */}



            <div className="mt-10 bg-emerald-50 p-5 rounded-xl">


              <h3 className="font-bold text-emerald-900">
                Important Note
              </h3>


              <p className="text-gray-700 mt-2">

                Answers are provided according to Quran and Sunnah
                by qualified scholars. This platform does not replace
                personal consultation with a Mufti.

              </p>


            </div>






          </div>



        </div>



      </section>





      <Footer />


    </>

  );

}