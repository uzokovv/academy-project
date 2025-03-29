import React from "react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import TextEffect from "./TextEffect";

interface PortfolioCardProps {
  title: string;
  link: string;
  image: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, link, image }) => {
  return (
    <Card className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer bg-gray-900 w-full max-w-sm">
      {/* Background Image */}
      <div
        className="w-full h-80 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      
      {/* Overlay with Button on Hover */}
      <CardContent className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
        <h3 className="text-xl font-bold text-white mb-3 text-center">
          {title}
        </h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 text-black px-5 py-2 rounded-md font-semibold hover:bg-yellow-600 transition"
        >
          Batafsil
        </a>
      </CardContent>
    </Card>
  );
};

const PortfolioGrid = () => {
  const portfolioItems = [
    {
      title: "O'ZBEKISTON BO‘YLAB SAYOHAT",
      link: "#",
      image: "/images/global-star-tour.jpg",
    },
    {
      title: "Gardenaria",
      link: "#",
      image: "/images/gardenaria.jpg",
    },
    {
      title: "FAZA",
      link: "#",
      image: "/images/faza.jpg",
    },
  ];

  return (
    <div className="bg-rgb(18,23,35) text-white py-10 text-center">
      <TextEffect text={'Milliardev IT company portfoliosi'} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        {portfolioItems.map((item, index) => (
          <PortfolioCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
