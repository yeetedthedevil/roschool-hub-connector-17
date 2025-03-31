
import { Twitter, Facebook, Instagram, Linkedin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="roschool-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <span className="font-heading text-2xl font-bold">Rosch<span className="text-roschool-green">.uk</span></span>
            </div>
            <p className="text-slate-300 mb-6">
              Connecting our network of schools to provide exceptional education and opportunities for all students.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#schools" className="text-slate-300 hover:text-white transition-colors">
                  Our Schools
                </a>
              </li>
              <li>
                <a href="#mission" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#news" className="text-slate-300 hover:text-white transition-colors">
                  Latest News
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Parent Portal
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Student Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Staff Login
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  School Calendar
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Curriculum Overview
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Admissions
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-slate-300 mb-4">
              Subscribe to our newsletter for the latest updates from across the Roschools network.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Your email address" 
                className="bg-slate-800 border-slate-700 text-white" 
              />
              <Button className="bg-roschool-green hover:bg-green-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-300 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Roschools. All rights reserved.
            </p>
            <p className="text-slate-300 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for education
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
