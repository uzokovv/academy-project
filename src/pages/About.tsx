import { FaTelegram, FaInstagram, FaYoutube, FaFacebook, FaCertificate } from "react-icons/fa";
import { Button } from "../components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "../components/ui/breadcrumb";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import TextEffect from "../components/TextEffect";
import { Briefcase, Network, Users } from "lucide-react";


export default function AboutPage() {
  const icons: any = [
    { name: "Telegram", icon: FaTelegram },
    { name: "Instagram", icon: FaInstagram },
    { name: "Youtube", icon: FaYoutube },
    { name: "Facebook", icon: FaFacebook },
  ]
  const features: any = [
    {
      icon: Users,
      title: "Keng va shinam muhit",
      description: "Bizning o'quv markaz bir vaqtning ozida 150 dan ortiq o‘quvchilar va 20 dan ortiq katta jamoani bir maskanga yig‘a olgan ta‘lim va innovatsiya markazi.Bu o‘quvchilarga muhit yaratishga yordam beradi va bir-birini tushunishlari uchun imkoniyat yaratadi.",
    },
    {
      icon: Network,
      title: "Malakali ustozlar ko‘magi", 
      description: "Malakali o‘qituvchilarning o‘quvchilarga yordam berishini ta’minlaydi. Ustozlar o‘quvchilarni o‘rganish jarayonida maslahat beradi, vazifalarni bajarishda yordam berish va ularga darslarini yanada mustahkamlashga ko‘mak beradi.",
    },
    {
      icon: Briefcase,
      title: "Amaliyotlarga asoslangan dars ishlanmalari",
      description: "Bu, nazariy bilimlarni amaliyotga o‘tkazishni o‘z ichiga olgan darslar bo‘lib, o‘quvchilarga nazariy ma’lumotlarni amaliyotda ishlatish va ularning ustida amalga oshirishga imkoniyat yaratadi.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 md:px-16 py-10 mt-20">
      <div className="flex justify-between items-center">
        {/* Header Section */}
        <div className="text-center md:text-left mb-10 py-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Sfera Academy bilan yaqindan tanishing!
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Sfera Academy haqida ko'proq ma'lumotlarni ijtimoiy tarmoqlarimizdan ham olishingiz mumkin.
          </p>
          {/* Social Media Icons */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">

            {
              icons.map((item: any) => (
                <TooltipProvider key={item.name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" className="group bg-[#1E232E] text-[#788293] border-none hover:bg-[#5E8A79] hover:text-white">
                        {/* item.icon ni dinamik ravishda render qilish */}
                        <item.icon size={50} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-white text-black p-2 rounded-[10px] mb-2">
                      <p>{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))

            }
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

      <div className="bg-gray-900 text-white mt-50 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-6">“Milliardev company” bu -</h1>
          <div className="text-gray-400">
            <p className="text-lg mb-4">
              Dasturlash, dizayn va marketing kabi zamonaviy kasblar o‘rgatiladigan markaz.
            </p>
            <p className="text-lg mb-4">
              Zamonaviy kasblar yordamida insonlar hayotini yaxshilovchi va kelajakka bo‘lgan
              ishonchni mustahkamlovchi maskan.
            </p>
            <p className="text-lg mb-6">
              Bir vaqtning o‘zida 100 dan ortiq o‘quvchilar va 20 dan ortiq katta jamoani bir maskanga yig‘a olgan ta’lim va innovatsiya markazi.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Card className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <CardContent className="flex justify-center">
              <img
                src="/sfera-academy-illustration.png"
                alt="Sfera Academy Illustration"
                className="w-full max-w-md"
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ======================================================================================= */}

      <TextEffect text={'Nima uchun bizni tanlashingiz kerak'} />
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
        {features.map((feature: any, index: number) => (
          <Card key={index} className="bg-transparent border-none text-center hover:transition-ease-in hover:duration-[.9s] hover:bg-[#171F28]">
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <feature.icon className="w-12 h-12 text-green-500 text-left" />
              <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
              <p className="text-md text-gray-400">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Footer />
    </div>
  );
}
