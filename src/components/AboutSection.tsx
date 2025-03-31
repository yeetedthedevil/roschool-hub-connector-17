import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Users, Book, BookOpen } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="mission" className="section-padding">
      <div className="roschool-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-roschool-blue mb-4">About Roschools</h2>
          <p className="text-roschool-gray max-w-2xl mx-auto">
            Learn more about our network, mission, and the values that drive our educational approach.
          </p>
        </div>

        <Tabs defaultValue="mission" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="mission" className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              <span className="hidden md:inline">Our Mission</span>
              <span className="md:hidden">Mission</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden md:inline">Our History</span>
              <span className="md:hidden">History</span>
            </TabsTrigger>
            <TabsTrigger value="values" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              <span className="hidden md:inline">Core Values</span>
              <span className="md:hidden">Values</span>
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden md:inline">Leadership</span>
              <span className="md:hidden">Leaders</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mission" className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-roschool-blue mb-4">Our Mission</h3>
              <p className="text-roschool-gray mb-4">
                At Roschools, our mission is to provide exceptional education that inspires and empowers every student to 
                reach their full potential. We believe in creating inclusive learning environments that nurture 
                creativity, critical thinking, and a lifelong love of learning.
              </p>
              <p className="text-roschool-gray">
                Through our network of schools, we aim to deliver consistent educational excellence 
                while respecting the unique character and needs of each local community we serve. 
                We are committed to preparing our students for the challenges and opportunities of the 
                future, equipping them with the knowledge, skills, and values they need to succeed.
              </p>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-roschool-lightGray p-4 rounded-lg text-center">
                  <h4 className="font-bold text-roschool-blue mb-2">Innovation</h4>
                  <p className="text-sm">Embracing new ideas and approaches to teaching and learning</p>
                </div>
                <div className="bg-roschool-lightGray p-4 rounded-lg text-center">
                  <h4 className="font-bold text-roschool-blue mb-2">Excellence</h4>
                  <p className="text-sm">Striving for the highest standards in all that we do</p>
                </div>
                <div className="bg-roschool-lightGray p-4 rounded-lg text-center">
                  <h4 className="font-bold text-roschool-blue mb-2">Community</h4>
                  <p className="text-sm">Building strong relationships between schools, families, and communities</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-roschool-blue mb-4">Our History</h3>
              <p className="text-roschool-gray mb-4">
                Roschools was founded in 2005 with a vision to create a network of schools that share best practices 
                while maintaining their individual identities. What began as a partnership between two schools 
                in London has grown into a nationwide network of educational excellence.
              </p>
              <p className="text-roschool-gray">
                Our journey has been marked by continuous growth, innovation, and a commitment to raising 
                educational standards. Through strategic development and collaboration, we have expanded our 
                reach while deepening our impact, touching the lives of thousands of students across the United Kingdom.
              </p>
              
              <div className="mt-6 border-l-2 border-roschool-blue pl-6 space-y-6">
                <div>
                  <h4 className="font-bold text-roschool-blue">2005</h4>
                  <p className="text-sm text-roschool-gray">Foundation of Roschools with two partner schools in London</p>
                </div>
                <div>
                  <h4 className="font-bold text-roschool-blue">2010</h4>
                  <p className="text-sm text-roschool-gray">Expansion to Manchester and Birmingham</p>
                </div>
                <div>
                  <h4 className="font-bold text-roschool-blue">2015</h4>
                  <p className="text-sm text-roschool-gray">Established schools in Scotland and Wales</p>
                </div>
                <div>
                  <h4 className="font-bold text-roschool-blue">2020</h4>
                  <p className="text-sm text-roschool-gray">Launch of the Roschools Digital Initiative</p>
                </div>
                <div>
                  <h4 className="font-bold text-roschool-blue">Today</h4>
                  <p className="text-sm text-roschool-gray">A network of excellence across the UK</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="values" className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-roschool-blue mb-4">Core Values</h3>
              <p className="text-roschool-gray mb-6">
                Our core values guide everything we do across the Roschools network. They shape our culture, 
                inform our decision-making, and inspire our approach to education.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-roschool-lightGray rounded-lg p-4">
                  <h4 className="font-bold text-roschool-blue mb-2">Integrity</h4>
                  <p className="text-sm text-roschool-gray">
                    We act with honesty, transparency, and ethical responsibility in all that we do.
                  </p>
                </div>
                <div className="border border-roschool-lightGray rounded-lg p-4">
                  <h4 className="font-bold text-roschool-blue mb-2">Inclusion</h4>
                  <p className="text-sm text-roschool-gray">
                    We create welcoming environments where diversity is celebrated and everyone belongs.
                  </p>
                </div>
                <div className="border border-roschool-lightGray rounded-lg p-4">
                  <h4 className="font-bold text-roschool-blue mb-2">Innovation</h4>
                  <p className="text-sm text-roschool-gray">
                    We embrace change, creativity, and continuous improvement in our educational practices.
                  </p>
                </div>
                <div className="border border-roschool-lightGray rounded-lg p-4">
                  <h4 className="font-bold text-roschool-blue mb-2">Excellence</h4>
                  <p className="text-sm text-roschool-gray">
                    We strive for the highest standards in teaching, learning, and all school operations.
                  </p>
                </div>
                <div className="border border-roschool-lightGray rounded-lg p-4">
                  <h4 className="font-bold text-roschool-blue mb-2">Collaboration</h4>
                  <p className="text-sm text-roschool-gray">
                    We work together across our network to share knowledge and achieve common goals.
                  </p>
                </div>
                <div className="border border-roschool-lightGray rounded-lg p-4">
                  <h4 className="font-bold text-roschool-blue mb-2">Responsibility</h4>
                  <p className="text-sm text-roschool-gray">
                    We take ownership of our actions and their impact on students, communities, and society.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-roschool-blue mb-4">Leadership Team</h3>
              <p className="text-roschool-gray mb-6">
                Our experienced leadership team brings together diverse expertise in education, 
                management, and innovation to guide the Roschools network.
              </p>
              
              <div className="flex justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-roschool-lightGray mx-auto mb-4 overflow-hidden">
                    <img 
                      src="/lovable-uploads/f712c699-4a96-4aa6-9c6c-a348f4d3c8b3.png" 
                      alt="Rob Hastings"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-roschool-blue">Rob Hastings</h4>
                  <p className="text-sm text-roschool-gray">Chief Executive Officer</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AboutSection;
