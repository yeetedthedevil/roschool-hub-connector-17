
import { useState } from 'react';
import SchoolCard, { SchoolType } from './SchoolCard';
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

// Sample data for schools
const schoolsData: SchoolType[] = [
  {
    id: 1,
    name: "Roschool Academy London",
    location: "London, UK",
    description: "Our flagship academy providing exceptional education in the heart of London with state-of-the-art facilities and expert teaching staff.",
    imageSrc: "https://images.unsplash.com/photo-1592303637753-ce1e6b8a0ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    phone: "+44 20 1234 5678",
    email: "info@london.rosch.uk",
    website: "https://london.rosch.uk",
  },
  {
    id: 2,
    name: "Roschool Manchester",
    location: "Manchester, UK",
    description: "A vibrant learning community in Manchester focusing on STEM education and creative arts, with excellent sports facilities.",
    imageSrc: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    phone: "+44 161 234 5678",
    email: "info@manchester.rosch.uk",
    website: "https://manchester.rosch.uk",
  },
  {
    id: 3,
    name: "Roschool Birmingham",
    location: "Birmingham, UK",
    description: "An innovative school community embracing technology and contemporary teaching methods to prepare students for future success.",
    imageSrc: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    phone: "+44 121 234 5678",
    email: "info@birmingham.rosch.uk",
    website: "https://birmingham.rosch.uk",
  },
  {
    id: 4,
    name: "Roschool Edinburgh",
    location: "Edinburgh, UK",
    description: "A school with strong academic traditions and modern approaches, situated in Scotland's historic capital.",
    imageSrc: "https://images.unsplash.com/photo-1594312915251-48db9280c8f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    phone: "+44 131 234 5678",
    email: "info@edinburgh.rosch.uk",
    website: "https://edinburgh.rosch.uk",
  },
  {
    id: 5,
    name: "Roschool Cardiff",
    location: "Cardiff, UK",
    description: "A welcoming school community celebrating Welsh culture and providing excellent educational opportunities for all students.",
    imageSrc: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    phone: "+44 29 1234 5678",
    email: "info@cardiff.rosch.uk",
    website: "https://cardiff.rosch.uk",
  },
  {
    id: 6,
    name: "Roschool Belfast",
    location: "Belfast, UK",
    description: "A forward-thinking school fostering community connections and promoting academic excellence in Northern Ireland.",
    imageSrc: "https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    phone: "+44 28 1234 5678",
    email: "info@belfast.rosch.uk",
    website: "https://belfast.rosch.uk",
  },
];

const SchoolDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSchools, setFilteredSchools] = useState<SchoolType[]>(schoolsData);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setFilteredSchools(schoolsData);
    } else {
      const filtered = schoolsData.filter(
        school => 
          school.name.toLowerCase().includes(term) || 
          school.location.toLowerCase().includes(term)
      );
      setFilteredSchools(filtered);
    }
  };

  return (
    <section id="schools" className="section-padding bg-roschool-lightGray">
      <div className="roschool-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-roschool-blue mb-4">Our School Network</h2>
          <p className="text-roschool-gray max-w-2xl mx-auto">
            Discover our family of schools across the United Kingdom, each providing exceptional 
            education tailored to their local communities.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search schools by name or location..."
              className="pl-10"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </Button>
        </div>

        {/* Schools Grid */}
        {filteredSchools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSchools.map((school) => (
              <SchoolCard key={school.id} school={school} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-lg text-roschool-gray">No schools found matching your search.</p>
            <Button 
              variant="link" 
              className="mt-2 text-roschool-blue"
              onClick={() => {
                setSearchTerm('');
                setFilteredSchools(schoolsData);
              }}
            >
              Clear search
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SchoolDirectory;
