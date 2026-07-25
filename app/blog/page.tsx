import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  BookOpen,
  Calendar,
  ArrowRight,
} from "lucide-react";


export default function BlogPage() {


  const blogs = [

    {
      title: "How to Learn Quran with Tajweed?",
      category: "Quran Learning",
      date: "July 2026",
      description:
        "Learn the importance of Tajweed and how to improve your Quran recitation step by step.",
    },


    {
      title: "Benefits of Learning Arabic Language",
      category: "Arabic Language",
      date: "July 2026",
      description:
        "Discover how learning Arabic helps you understand Quran and Islamic teachings better.",
    },


    {
      title: "10 Daily Masnoon Duas Every Muslim Should Know",
      category: "Duas",
      date: "July 2026",
      description:
        "A collection of important daily duas with Arabic text and meanings.",
    },


    {
      title: "Importance of Salah in Islam",
      category: "Islamic Knowledge",
      date: "July 2026",
      description:
        "Understand the importance of Salah and its role in a Muslim's life.",
    },


    {
      title: "Seerah of Prophet Muhammad ﷺ",
      category: "Seerah",
      date: "July 2026",
      description:
        "Learn beautiful lessons from the life of Prophet Muhammad ﷺ.",
    },


    {
      title: "Quran Reading for Beginners",
      category: "Beginner Course",
      date: "July 2026",
      description:
        "A complete guide for beginners who want to start learning Quran.",
    },


  ];



  return (

    <>

      <Navbar />



      {/* Hero Section */}


      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-20">


        <div className="max-w-6xl mx-auto px-6 text-center">


          <h1 className="text-5xl font-bold">
            Islamic Knowledge Blog
          </h1>


          <p className="mt-5 text-xl text-emerald-100">
            Learn Quran, Arabic and Islamic teachings through our articles
          </p>


        </div>


      </section>






      {/* Blog Section */}



      <section className="py-20 bg-gray-50">


        <div className="max-w-7xl mx-auto px-6">



          <div className="text-center mb-12">


            <BookOpen
            className="mx-auto text-emerald-700"
            size={45}
            />


            <h2 className="text-4xl font-bold text-emerald-900 mt-4">
              Latest Articles
            </h2>


            <p className="text-gray-600 mt-3">
              Increase your Islamic knowledge with our educational articles.
            </p>


          </div>





          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">



            {blogs.map((blog,index)=>(


              <div

              key={index}

              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition"


              >



                <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">

                  {blog.category}

                </div>





                <h3 className="text-2xl font-bold text-emerald-900 mt-5">

                  {blog.title}

                </h3>





                <div className="flex items-center gap-2 text-gray-500 mt-4">

                  <Calendar size={18}/>

                  {blog.date}

                </div>





                <p className="text-gray-600 mt-5">

                  {blog.description}

                </p>






                <button

                className="mt-6 flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-900"

                >

                  Read More

                  <ArrowRight size={18}/>

                </button>





              </div>



            ))}



          </div>



        </div>


      </section>






      <Footer />


    </>

  );

}