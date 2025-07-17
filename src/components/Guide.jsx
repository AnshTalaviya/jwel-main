import React from 'react';
import { Link } from 'react-router-dom';
const guides = [
  {
    id: 1,
    title: "Ring Size Guide",
    description: "Our handy finger size guide will help you to measure your finger size accurately.",
    image: "/images/g3.jpg", 
    link: "/ring-guide"
  },
  {
    id: 2,
    title: "Diamonds Guide - 4Cs",
    description: "The 4C's are the internationally known standards for grading a diamond as put in place by the Global Institute of Diamonds (GIA).",
    image: "/images/g2.jpg", 
    link: "#"
  },
  {
    id: 3,
    title: "Pages Ring Size Conversion Chart",
    description: "Our handy conversion chart allows you to find your ring size for diamond engagement rings and wedding rings comparing sizes in mm and inches.",
    image: "/images/g4.jpg", 
    link: "#"
  }
];

const Guide = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {guides.map((guide) => (
          <div key={guide.id} className="flex flex-col">
            <img 
              src={guide.image} 
              alt={guide.title} 
              className="w-full h-60 object-cover rounded-md mb-4 shadow" 
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{guide.title}</h3>
            <p className="text-gray-700 mb-4">{guide.description}</p>
            {/* <Link to={guide.link} className="text-dark-600 hover:text-blue-800 font-medium flex items-center">
              Read More <span className="ml-1">→</span>
            </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guide;
