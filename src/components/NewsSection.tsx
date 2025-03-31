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
    title: "N/A",
    excerpt: "N/A",
    date: "N/A",
    author: "N/A",
    category: "N/A",
    imageSrc: "bg-gray-300",
  },
  {
    id: 2,
    title: "N/A",
    excerpt: "N/A",
    date: "N/A",
    author: "N/A",
    category: "N/A",
    imageSrc: "bg-gray-300",
  },
  {
    id: 3,
    title: "N/A",
    excerpt: "N/A",
    date: "N/A",
    author: "N/A",
    category: "N/A",
    imageSrc: "bg-gray-300",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.slice(0, visibleNews).map((news) => (
            <div key={news.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 overflow-hidden bg-gray-300">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                  No Image
                </div>
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
