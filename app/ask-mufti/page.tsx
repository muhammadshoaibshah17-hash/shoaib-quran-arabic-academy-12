"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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


  const formRef = useRef<HTMLFormElement>(null);


  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");



  const SERVICE_ID = "service_zno89lh";

  const TEMPLATE_ID = "template_4bj7ekk";

  const PUBLIC_KEY = "qum4TcvWDxM8KWX7g";




  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();


    setSuccess("");

    setError("");



    if (!formRef.current) return;



    setLoading(true);



    try {


      await emailjs.sendForm(

        SERVICE_ID,

        TEMPLATE_ID,

        formRef.current,

        PUBLIC_KEY

      );



      setSuccess(
        "Your question has been submitted successfully."
      );



      formRef.current.reset();



    } catch (err) {


      console.error(err);



      setError(
        "Something went wrong. Please try again."
      );


    }



    setLoading(false);


  };





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


      </section>      {/* Main Section */}


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




            {/* Success Message */}

            {success && (

              <div className="bg-green-100 text-green-800 p-4 rounded-xl mb-5">

                {success}

              </div>

            )}




            {/* Error Message */}

            {error && (

              <div className="bg-red-100 text-red-800 p-4 rounded-xl mb-5">

                {error}

              </div>

            )}






            <form

              ref={formRef}

              onSubmit={handleSubmit}

              className="space-y-6"

            >






              {/* Name */}


              <div>


                <label className="font-semibold">

                  Full Name

                </label>



                <div className="flex items-center border rounded-xl mt-2">



                  <User className="ml-4 text-emerald-700"/>



                  <input

                    type="text"

                    name="name"

                    required

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

                    name="email"

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

                    name="phone"

                    required

                    placeholder="0304 XXXXXXX"

                    className="w-full p-4 outline-none"

                  />



                </div>


              </div>              {/* Category */}


              <div>


                <label className="font-semibold">

                  Question Category

                </label>



                <select

                  name="category"

                  required

                  className="w-full border rounded-xl p-4 mt-2 outline-none"

                >


                  <option value="">

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


                  name="question"

                  required

                  rows={6}


                  placeholder="Write your question here..."


                  className="w-full border rounded-xl p-4 mt-2 outline-none"



                ></textarea>



              </div>








              {/* Submit Button */}



              <button


                type="submit"


                disabled={loading}


                className="w-full bg-emerald-700 hover:bg-emerald-800 disabled:bg-gray-400 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3"



              >



                <Send size={22}/>



                {loading

                  ? "Submitting..."

                  : "Submit Question"

                }



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