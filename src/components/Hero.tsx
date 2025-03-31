
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-roschool-blue/90 to-roschool-blue py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-40 bg-white opacity-10" 
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 70%)" }}></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-white opacity-10"
            style={{ clipPath: "polygon(0 30%, 100% 0, 100% 100%, 0 100%)" }}></div>
      </div>
      
      <div className="roschool-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Welcome to the Roschools Hub
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Connecting our network of schools to provide exceptional education and opportunities for all students
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-roschool-blue hover:bg-gray-100">
              Find a School
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
