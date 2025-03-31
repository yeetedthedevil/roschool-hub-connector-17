
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Phone, Mail } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type SchoolType = {
  id: number;
  name: string;
  location: string;
  description: string;
  imageSrc: string;
  phone: string;
  email: string;
  website: string;
};

interface SchoolCardProps {
  school: SchoolType;
}

const SchoolCard = ({ school }: SchoolCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img
          src={school.imageSrc}
          alt={school.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-roschool-blue">{school.name}</CardTitle>
        <CardDescription className="flex items-center text-roschool-gray">
          <MapPin className="h-4 w-4 mr-1" />
          {school.location}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-roschool-gray mb-4">{school.description}</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-roschool-green" />
            <span>{school.phone}</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2 text-roschool-green" />
            <span>{school.email}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-roschool-blue hover:bg-blue-800 flex items-center justify-center"
          asChild
        >
          <a href={school.website} target="_blank" rel="noopener noreferrer">
            Visit School Website
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SchoolCard;
