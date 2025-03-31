
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="roschool-container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="font-heading text-2xl font-bold text-roschool-blue">Rosch<span className="text-roschool-green">.uk</span></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#schools" className="text-roschool-gray hover:text-roschool-blue font-medium transition-colors">
              Schools
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-roschool-gray hover:text-roschool-blue font-medium transition-colors">
                  About <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <a href="#mission" className="w-full">Our Mission</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#history" className="w-full">History</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#team" className="w-full">Leadership</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#news" className="text-roschool-gray hover:text-roschool-blue font-medium transition-colors">
              News
            </a>
            <a href="#contact" className="text-roschool-gray hover:text-roschool-blue font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="flex items-center">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
            <Button className="bg-roschool-blue hover:bg-blue-800">School Portal</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#schools" 
                className="px-4 py-2 text-roschool-gray hover:bg-roschool-lightGray rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Schools
              </a>
              <a 
                href="#mission" 
                className="px-4 py-2 text-roschool-gray hover:bg-roschool-lightGray rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Mission
              </a>
              <a 
                href="#news" 
                className="px-4 py-2 text-roschool-gray hover:bg-roschool-lightGray rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </a>
              <a 
                href="#contact" 
                className="px-4 py-2 text-roschool-gray hover:bg-roschool-lightGray rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-2 space-y-3">
                <Button variant="outline" size="sm" className="w-full flex justify-center items-center">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
                <Button className="w-full bg-roschool-blue hover:bg-blue-800">School Portal</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
