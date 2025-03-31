
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SchoolDirectory from "@/components/SchoolDirectory";
import AboutSection from "@/components/AboutSection";
import NewsSection from "@/components/NewsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <SchoolDirectory />
        <AboutSection />
        <NewsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
