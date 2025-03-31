
import { useState } from 'react';
import SchoolCard, { SchoolType } from './SchoolCard';
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

// Sample data for schools with placeholder content
const schoolsData: SchoolType[] = [
  {
    id: 1,
    name: "Roschool Academy North",
    location: "Northern Region, UK",
    description: "A leading academy providing exceptional education with modern facilities and dedicated teaching staff focused on student success.",
    imageSrc: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    phone: "+44 20 1234 5678",
    email: "info@north.rosch.uk",
    website: "https://north.rosch.uk",
  },
  {
    id: 2,
    name: "Roschool South",
    location: "Southern Region, UK",
    description: "A vibrant learning community focusing on STEM education and creative arts, with excellent facilities for all students.",
    imageSrc: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    phone: "+44 161 234 5678",
    email: "info@south.rosch.uk",
    website: "https://south.rosch.uk",
  },
  {
    id: 3,
    name: "Roschool East",
    location: "Eastern Region, UK",
    description: "An innovative school embracing technology and contemporary teaching methods to prepare students for future success.",
    imageSrc: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    phone: "+44 121 234 5678",
    email: "info@east.rosch.uk",
    website: "https://east.rosch.uk",
  },
  {
    id: 4,
    name: "Roschool West",
    location: "Western Region, UK",
    description: "A school with strong academic traditions and modern approaches, situated in a scenic location with great community ties.",
    imageSrc: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    phone: "+44 131 234 5678",
    email: "info@west.rosch.uk",
    website: "https://west.rosch.uk",
  },
  {
    id: 5,
    name: "Roschool Central",
    location: "Central Region, UK",
    description: "A welcoming school community providing excellent educational opportunities for all students in the heart of the region.",
    imageSrc: "https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    phone: "+44 29 1234 5678",
    email: "info@central.rosch.uk",
    website: "https://central.rosch.uk",
  },
  {
    id: 6,
    name: "Roschool International",
    location: "Multiple Locations, UK",
    description: "A forward-thinking school with international connections, promoting academic excellence and global citizenship.",
    imageSrc: "https://images.unsplash.com/photo-1594312915251-48db9280c8f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    phone: "+44 28 1234 5678",
    email: "info@international.rosch.uk",
    website: "https://international.rosch.uk",
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
