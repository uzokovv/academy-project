import React from "react";
import { FaTelegram, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { Card, CardContent } from "./ui/card";
import logg from '../assets/milliardev.jpg'

const Footer: React.FC = () => {
  return (
    <footer className="bg-rgb(30,35,46) text-gray-300 py-10 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
        <div>
          <img src={logg} alt="Milliardev IT" className="w-15" />
          <p className="mt-4 text-gray-400">Milliardev IT - bu zamonaviy companya !</p>
          <div className="flex gap-4 mt-4 text-gray-400">
            <a href="https://t.me/Milliardev_admin"><FaTelegram size={24} /></a>
            <FaInstagram size={24} />
            <FaYoutube size={24} />
            <FaFacebook size={24} />
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Foydali havolalar</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Biz haqimizda</li>
            <li>Portfolio</li>
            <li>Kurslar</li>
            <li>Tashriflar</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Qo‘shimcha</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Qadriyatlarimiz</li>
            <li>Yutuqlarimiz</li>
            <li>Foto suratlar</li>
            <li>FAQ</li>
            <li>Maxfiylik siyosati</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Yordam</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Bog‘lanish</li>
            <li>Ro‘yxatdan o‘tish</li>
            <li>Tel: 78 113-60-62</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10 border-t border-gray-700 pt-4 text-gray-400">
        © Milliardev IT company, 2021
      </div>
    </footer>
  );
};

export default Footer;
