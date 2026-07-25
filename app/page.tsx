import LanguageSwitcher from "./components/LanguageSwitcher";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import ContactCTA from "./components/ContactCTA";
import FAQ from "./components/FAQ";
import WhyChooseUs from "./components/WhyChooseUs";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import AskMufti from "./components/AskMufti";
import FeePlans from "./components/FeePlans";
import Courses from "./components/Courses";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";


export default function Home() {

  return (

    <main 
    className="
    min-h-screen
    bg-gradient-to-b
    from-yellow-50
    via-white
    to-emerald-50
    "
    >


      {/* Navbar */}

      <Navbar />



      {/* Hero Section */}

      <Hero />



      {/* About Academy */}

      <About />



      {/* Courses */}

      <Courses />



      {/* Fee Plans */}

      <FeePlans />



      {/* Ask Mufti */}

      <AskMufti />



      {/* Student Reviews */}

      <Testimonials />



      {/* Statistics */}

      <Stats />



      {/* Why Choose Us */}

      <WhyChooseUs />



      {/* FAQ */}

      <FAQ />



      {/* Contact */}

      <ContactCTA />



      {/* Footer */}

      <Footer />



      {/* Floating Buttons */}

      <WhatsAppButton />

      <ScrollToTop />

      <LanguageSwitcher />


    </main>

  );

}