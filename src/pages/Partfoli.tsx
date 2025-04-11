import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";
import TextEffect from "../components/TextEffect";
import Footer from "../components/Footer";

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

const Portfoli = () => {
  const portfolioItems = [
    {
      title: "O'ZBEKISTON BO‘YLAB SAYOHAT",
      link: "#",
      image: "https://suret.pics/uploads/posts/2023-09/1695273917_006.jpg",
    },
    {
      title: "Gardenaria",
      link: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJqxCzhVRrUBUNpyz-e74mtn28OI9fwhLKUUApAeLyxSfN8B61bAE8G11NZanJZC2eAo&usqp=CAU",
    },
    {
      title: "FAZA",
      link: "#",
      image: "https://suret.pics/uploads/posts/2023-09/1695273365_3-48.jpg",
    },
    {
      title: "FAZA",
      link: "#",
      image: "https://avatarko.ru/img/kartinka/2/muzhchina_kapyushon_1774.jpg",
    },
    {
      title: "FAZA",
      link: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ590K0KSbqLdEhQKkCQcSvn3a5VI2UPg5_Yvf0dJVFJR3-aH5OgrSrBmwaLQNiD1Fh8PM&usqp=CAU",
    },
    {
      title: "FAZA",
      link: "#",
      image: "https://avatarko.ru/img/kartinka/2/muzhchina_kapyushon_1774.jpg",
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
      <Footer/>
    </div>
    
  );
};

export default Portfoli;
