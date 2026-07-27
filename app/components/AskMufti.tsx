"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  MessageCircle,
  Send,
  Mail,
  ShieldCheck,
} from "lucide-react";


export default function AskMufti() {


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


      console.error("EMAILJS ERROR:", err);



      setError(
        "Something went wrong. Please try again."
      );


    }



    setLoading(false);


  };





  return (


    <section className="py-16 bg-gray-50">


      <div className="max-w-4xl mx-auto px-6">



        <div className="bg-white rounded-3xl shadow-xl p-8">



          <div className="text-center mb-8">


            <ShieldCheck
              className="mx-auto text-emerald-700"
              size={45}
            />


            <h2 className="text-4xl font-bold text-emerald-900 mt-4">

              Ask Mufti

            </h2>


            <p className="text-gray-600 mt-3">

              Submit your Islamic questions and get authentic guidance.

            </p>


          </div>





          {success && (

            <div className="bg-green-100 text-green-800 p-4 rounded-xl mb-5">

              {success}

            </div>

          )}




          {error && (

            <div className="bg-red-100 text-red-800 p-4 rounded-xl mb-5">

              {error}

            </div>

          )}







          <form

            ref={formRef}

            onSubmit={handleSubmit}

            className="space-y-5"

          >




            <input

              type="text"

              name="name"

              placeholder="Your Name"

              required

              className="w-full border rounded-xl p-4"

            />





            <input

              type="email"

              name="email"

              placeholder="Email Address"

              className="w-full border rounded-xl p-4"

            />





            <input

              type="text"

              name="phone"

              placeholder="WhatsApp Number"

              required

              className="w-full border rounded-xl p-4"

            />






            <select

              name="category"

              required

              className="w-full border rounded-xl p-4"

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






            <textarea

              name="question"

              rows={6}

              placeholder="Write your Islamic question here..."

              required

              className="w-full border rounded-xl p-4"

            />







            <button

              type="submit"

              disabled={loading}

              className="w-full bg-emerald-700 hover:bg-emerald-800 disabled:bg-gray-400 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3"

            >


              <Send size={22}/>


              {loading
                ? "Sending..."
                : "Submit Question"
              }


            </button>




          </form>






          <a

            href="https://wa.me/923045103458"

            target="_blank"

            className="mt-5 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3"

          >


            <MessageCircle size={22}/>


            Ask Through WhatsApp


          </a>





        </div>



      </div>



    </section>


  );

}