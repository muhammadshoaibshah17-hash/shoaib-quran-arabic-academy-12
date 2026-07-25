import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Image,
  Award,
  BookOpen,
  Users,
} from "lucide-react";


export default function GalleryPage() {

  const galleryItems = [

    {
      title: "Quran Learning Classes",
      description: "Online Quran and Tajweed learning sessions",
      image:
        "https://images.unsplash.com/photo-1609599006353-e629aaabfeae",
    },

    {
      title: "Arabic Language Classes",
      description: "Learn Arabic speaking and grammar",
      image:
        "https://images.unsplash.com/photo-1542816417-0983c9c9ad53",
    },

    {
      title: "Islamic Education",
      description: "Authentic Islamic knowledge and guidance",
      image:
        "https://images.unsplash.com/photo-1564769625905-50e93615e769",
    },

    {
      title: "Student Success",
      description: "Helping students improve Quran skills",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    },

  ];



  return (

    <>

      <Navbar />



      {/* Hero */}


      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">


          <h1 className="text-5xl font-bold">
            Our Gallery
          </h1>


          <p className="mt-5 text-xl text-emerald-100">
            Explore Quran, Arabic and Islamic learning journey
          </p>


        </div>

      </section>





      {/* Gallery Cards */}



      <section className="py-20 bg-gray-50">


        <div className="max-w-7xl mx-auto px-6">



          <div className="text-center mb-12">


            <Image
            className="mx-auto text-emerald-700"
            size={45}
            />


            <h2 className="text-4xl font-bold text-emerald-900 mt-4">
              Academy Highlights
            </h2>


            <p className="text-gray-600 mt-3">
              Some moments from our educational journey
            </p>


          </div>





          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">



            {galleryItems.map((item,index)=>(


              <div

              key={index}

              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition"

              >



                <img

                src={item.image}

                alt={item.title}

                className="w-full h-56 object-cover"

                />




                <div className="p-6">


                  <h3 className="text-xl font-bold text-emerald-900">

                    {item.title}

                  </h3>



                  <p className="text-gray-600 mt-3">

                    {item.description}

                  </p>


                </div>



              </div>


            ))}



          </div>



        </div>


      </section>








      {/* Achievement Section */}



      <section className="py-20 bg-white">


        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">



          <div className="bg-emerald-50 rounded-3xl p-8 text-center">


            <BookOpen
            className="mx-auto text-emerald-700"
            size={40}
            />


            <h3 className="text-2xl font-bold mt-4 text-emerald-900">

              Quran Education

            </h3>


            <p className="mt-3 text-gray-600">

              Quran reading, Tajweed and memorization guidance.

            </p>


          </div>






          <div className="bg-emerald-50 rounded-3xl p-8 text-center">


            <Users
            className="mx-auto text-emerald-700"
            size={40}
            />


            <h3 className="text-2xl font-bold mt-4 text-emerald-900">

              Students

            </h3>


            <p className="mt-3 text-gray-600">

              Helping students worldwide learn Quran and Arabic.

            </p>


          </div>






          <div className="bg-emerald-50 rounded-3xl p-8 text-center">


            <Award
            className="mx-auto text-emerald-700"
            size={40}
            />


            <h3 className="text-2xl font-bold mt-4 text-emerald-900">

              Quality Learning

            </h3>


            <p className="mt-3 text-gray-600">

              Professional teaching with Islamic values.

            </p>


          </div>



        </div>


      </section>





      <Footer />

    </>

  );

}