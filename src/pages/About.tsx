import { FaTelegram, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { Button } from "../components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "../components/ui/breadcrumb";
import Footer from "../components/Footer";
export default function AboutPage() {
  return (
    <div className=" bg-gray-900 text-white min-h-screen px-6 md:px-16 py-10 mt-20">
      <div className="flex justify-between items-center">
        {/* Header Section */}
        <div className="text-center md:text-left mb-10 p-10">
          <h1 className="text-3xl md:text-3xl font-bold mb-4">
            Sfera Academy bilan yaqindan tanishing!
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Sfera Academy haqida ko'proq ma'lumotlarni ijtimoiy tarmoqlarimizdan ham olishingiz mumkin.
          </p>
          {/* Social Media Icons */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a href="#" className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600">
              <FaTelegram size={24} />
            </a>
            <a href="#" className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
        {/* Breadcrumb */}

        <Breadcrumb className="text-gray-400 text-md mb-6 flex gap-2">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Bosh sahifa {'>'} </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/about" className="text-[#206563]">
              Sfera Academy bilan yaqindan tanishing!
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      {/* Values Section */}
      <div className="text-center">
        <h2 className="text-5xl mt-18 font-bold mb-4">Qadriyatlarimiz bilan tanishing</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Quyidagi tugma orqali, markazimizning qadriyatlari, maqsadi va shiori bilan tanishishingiz mumkin!
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button className="bg-[#5E8A79] hover:bg-[#406456] transition px-9 py-7 rounded-[2px] text-[17px]">Tanishish</Button>
          <Button variant="secondary" className="px-6 py-7 text-white bg-[#2A2F39] rounded-[2px] text-[17px] hover:bg-[#22262f] transition">Bizning Fotosuratlar</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
