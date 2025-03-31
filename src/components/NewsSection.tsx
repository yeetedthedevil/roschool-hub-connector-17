
import { useState } from 'react';
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type NewsItemType = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageSrc: string;
};

const newsData: NewsItemType[] = [
  {
    id: 1,
    title: "Roschool Named Education Provider of the Year",
    excerpt: "Our network has been recognized for outstanding academic achievements and innovative teaching practices across all schools.",
    date: "May 15, 2023",
    author: "Admin Team",
    category: "Awards",
    imageSrc: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "New Innovation Center Opens in Regional School",
    excerpt: "A Roschool unveils state-of-the-art facilities designed to enhance science, technology, engineering, and mathematics education.",
    date: "April 22, 2023",
    author: "Education Team",
    category: "Facilities",
    imageSrc: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Annual Roschools Network Conference",
    excerpt: "Educators from across the Roschools network gathered to share insights and strategies for the future of education.",
    date: "March 10, 2023",
    author: "Events Team",
    category: "Events",
    imageSrc: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const NewsSection = () => {
  const [visibleNews, setVisibleNews] = useState(3);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(newsData.map(item => item.category)))];
  
  const filteredNews = filter === 'All' 
    ? newsData 
    : newsData.filter(news => news.category === filter);

  const handleShowMore = () => {
    setVisibleNews(prev => prev + 3);
  };

  return (
    <section id="news" className="section-padding">
      <div className="roschool-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-roschool-blue mb-4">Latest News</h2>
          <p className="text-roschool-gray max-w-2xl mx-auto">
            Stay updated with the latest announcements, events, and achievements from across the Roschools network.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Badge 
              key={category} 
              variant={filter === category ? "default" : "outline"}
              className={filter === category 
                ? "bg-roschool-blue hover:bg-blue-700 cursor-pointer" 
                : "hover:bg-roschool-lightGray cursor-pointer"
              }
              onClick={() => setFilter(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.slice(0, visibleNews).map((news) => (
            <div key={news.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={news.imageSrc} 
                  alt={news.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <Badge className="absolute top-4 right-4 bg-roschool-blue">{news.category}</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-roschool-blue mb-3">{news.title}</h3>
                <div className="flex items-center text-sm text-roschool-gray mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {news.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {news.author}
                  </div>
                </div>
                <p className="text-roschool-gray mb-4">{news.excerpt}</p>
                <Button variant="link" className="p-0 h-auto text-roschool-blue hover:text-blue-700 flex items-center">
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredNews.length > visibleNews && (
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              className="border-roschool-blue text-roschool-blue hover:bg-roschool-blue hover:text-white"
              onClick={handleShowMore}
            >
              Load More News
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
