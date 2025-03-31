import { useState } from 'react';
import SchoolCard, { SchoolType } from './SchoolCard';
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

const schoolsData: SchoolType[] = [
  {
    id: 1,
    name: "N/A",
    location: "N/A",
    description: "N/A",
    imageSrc: "bg-gray-300",
    phone: "N/A",
    email: "N/A",
    website: "N/A",
  },
  {
    id: 2,
    name: "N/A",
    location: "N/A",
    description: "N/A",
    imageSrc: "bg-gray-300",
    phone: "N/A",
    email: "N/A",
    website: "N/A",
  },
  {
    id: 3,
    name: "N/A",
    location: "N/A",
    description: "N/A",
    imageSrc: "bg-gray-300",
    phone: "N/A",
    email: "N/A",
    website: "N/A",
  },
  {
    id: 4,
    name: "N/A",
    location: "N/A",
    description: "N/A",
    imageSrc: "bg-gray-300",
    phone: "N/A",
    email: "N/A",
    website: "N/A",
  },
  {
    id: 5,
    name: "N/A",
    location: "N/A",
    description: "N/A",
    imageSrc: "bg-gray-300",
    phone: "N/A",
    email: "N/A",
    website: "N/A",
  },
  {
    id: 6,
    name: "N/A",
    location: "N/A",
    description: "N/A",
    imageSrc: "bg-gray-300",
    phone: "N/A",
    email: "N/A",
    website: "N/A",
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
