import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Map,
} from "lucide-react";

import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";


export default function ContactPage() {

  return (

    <>

      <Navbar />


      {/* Hero Section */}

      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-5 text-xl text-emerald-100">
            Get in touch with Learn Quran with Shoaib Academy
          </p>

        </div>

      </section>



      {/* Contact Section */}


      <section className="py-20 bg-gray-50">


        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">



          {/* Contact Information */}


          <div>


            <h2 className="text-4xl font-bold text-emerald-900">
              Get In Touch
            </h2>


            <p className="mt-5 text-gray-600 text-lg">
              Contact us for Quran classes, Arabic learning,
              free trial classes and admission details.
            </p>




            <div className="mt-10 space-y-8">



              {/* Phone */}

              <div className="flex gap-4">

                <Phone className="text-emerald-700" size={28}/>

                <div>

                  <h3 className="font-bold text-lg">
                    Phone
                  </h3>

                  <a 
                  href="tel:+923045103458"
                  className="text-gray-600"
                  >
                    0304 5103458
                  </a>

                </div>

              </div>




              {/* Email */}

              <div className="flex gap-4">

                <Mail className="text-emerald-700" size={28}/>

                <div>

                  <h3 className="font-bold text-lg">
                    Email
                  </h3>

                  <a 
                  href="mailto:muhammadshoaibshah17@gmail.com"
                  className="text-gray-600"
                  >
                    muhammadshoaibshah17@gmail.com
                  </a>

                </div>

              </div>




              {/* Address */}

              <div className="flex gap-4">

                <MapPin className="text-emerald-700" size={28}/>

                <div>

                  <h3 className="font-bold text-lg">
                    Address
                  </h3>

                  <p className="text-gray-600">
                    Peshawar, Pakistan
                  </p>

                </div>

              </div>




              {/* Timing */}

              <div className="flex gap-4">

                <Clock className="text-emerald-700" size={28}/>

                <div>

                  <h3 className="font-bold text-lg">
                    Class Timing
                  </h3>

                  <p className="text-gray-600">
                    Available 24/7 Flexible Schedule
                  </p>

                </div>

              </div>



            </div>





            {/* Social Buttons */}



            <div className="mt-10 flex flex-wrap gap-4">



              <a
              href="https://wa.me/923045103458"
              target="_blank"
              className="bg-green-500 text-white px-5 py-3 rounded-xl flex items-center gap-2"
              >

                <MessageCircle size={20}/>

                WhatsApp

              </a>





              <a
              href="https://maps.app.goo.gl/277Q73EBKmWBtTen7"
              target="_blank"
              className="bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center gap-2"
              >

                <Map size={20}/>

                Map

              </a>





              <a
              href="https://www.facebook.com/share/19CA2Guc1z/"
              target="_blank"
              className="bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2"
              >

                <FaFacebook size={20}/>

                Facebook

              </a>





              <a
              href="https://youtube.com/@learnquranwithshoaib?si=uWyC391CSBAXyb06"
              target="_blank"
              className="bg-red-600 text-white px-5 py-3 rounded-xl flex items-center gap-2"
              >

                <FaYoutube size={20}/>

                YouTube

              </a>





              <a
              href="https://www.linkedin.com/in/muhammadshoaib-shah-0921a830a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              className="bg-sky-700 text-white px-5 py-3 rounded-xl flex items-center gap-2"
              >

                <FaLinkedin size={20}/>

                LinkedIn

              </a>



            </div>



          </div>







          {/* Contact Form */}



          <div className="bg-white rounded-3xl shadow-xl p-8">


            <h2 className="text-3xl font-bold text-emerald-900">
              Send Message
            </h2>




            <form className="mt-8 space-y-5">



              <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-xl p-4"
              />




              <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-xl p-4"
              />




              <input
              type="text"
              placeholder="WhatsApp Number"
              className="w-full border rounded-xl p-4"
              />




              <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full border rounded-xl p-4"
              ></textarea>





              <button
              type="submit"
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-xl font-bold"
              >

                Send Message

              </button>



            </form>






            <a
            href="https://wa.me/923045103458"
            target="_blank"
            className="mt-5 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3"
            >

              <MessageCircle size={22}/>

              Chat on WhatsApp

            </a>




          </div>



        </div>


      </section>



      <Footer />


    </>

  );

}