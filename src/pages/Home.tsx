import { Briefcase, Network, Users } from 'lucide-react';
import Footer from '../components/Footer';
import Courses from '../components/Main'
import Navbar from '../components/Navbar'
import PortfolioGrid from '../components/Section';
import useParticles from "../components/effect";
import { FaCertificate } from 'react-icons/fa';
import { Card, CardContent } from '../components/ui/card';
import TextEffect from '../components/TextEffect';
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { AiOutlineNodeIndex } from "react-icons/ai";
import { GiDiamondHard } from "react-icons/gi";
import { motion } from "framer-motion";
import vedio from '../assets/navy.mp4'


function Home() {
  const features = [
    {
      icon: Users,
      title: "O‘qituvchilarimiz katta tajribaga ega",
      description: "Bizning o‘quv markazimizda o‘z yo‘nalishlari bo‘yicha 1 yildan 3 yilgacha bo‘lgan tajribaga ega o‘qituvchilar ta’lim beradi.",
    },
    {
      icon: Network,
      title: "Muloqot", description: "Darslar davomida fikr almashish uchun 15 daqiqalik tanaffus qilishingiz mumkin. Bu bolalarga muloqotini va fikrlashishini o‘stirishga yordam beradi.",
    },
    {
      icon: Briefcase,
      title: "Biz sizga ish topishga yordam beramiz",
      description: "Markazimizda zamonaviy sohalarda bo‘sh ish o‘rinlarini topishga yordam beruvchi bo‘limi mavjud.",
    },
    {
      icon: FaCertificate,
      title: "Sertifikatga ega bo‘lishingiz mumkin!",
      description: "Kursni muvaffaqiyatli tamomlagan o‘quvchilar “Milliardev companyasi” ning diplom va sertifikatiga ega bo‘ladi.",
    },
  ];
  const particlesRef = useParticles();
  return (
    <div>
      <div ref={particlesRef} id="tsparticles" className="absolute top-0 h-screen text-white -z-1"></div>

      <Navbar />
      <div className='container mx-auto max-w-[700px] mt-50 text-center text-white'>
        <h1 className='text-5xl font-bold '>Milliardev IT  - bu <span className='text-[#6A9C89]'>Kelajak</span> <br />
          kasblar companyasi!</h1>

        <p className='mt-15 text-[#bcbcbc] text-[18px]'>Maqsadimiz hududlardagi yoshlarda zamonaviy kasblarga qiziqishni kuchaytirish,
          ularni muayyan soha mutaxassislari etib tarbiyalash va shu orqali ularning qadr-qimmatini oshirishdan iborat.</p>
        <div className="flex gap-4 items-center justify-center mt-10 mb-70" >
          <button className="px-6 py-3 text-white bg-green-500 rounded-md hover:bg-green-600 transition">
            Kurslar haqida
          </button>
          <button className="px-6 py-3 text-white bg-gray-700 rounded-md hover:bg-gray-600 transition">
            Biz haqimizda
          </button>
        </div>

      </div>
      {/* ======================================================================================= */}

      <TextEffect text={'Afzalliklarimiz'} />
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
        {features.map((feature, index) => (
          <Card key={index} className="bg-transparent border-none text-center hover:transition-ease-in hover:duration-[.9s] hover:bg-[#171F28]">
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <feature.icon className="w-12 h-12 text-green-500 text-left" />
              <h3 className="text-lg font-bold text-white">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ======================================================================================= */}
      <TextEffect text={"Biz Haqimizda"} />
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 p-6 text-white">
        {/* Video Mockup */}
        <div className="relative max-w-sm border-8 border-[#243368] rounded-[40px] overflow-hidden">
          <div className='bg-black pt-11 pb-3 px-3'>
            <video controls className="w-full">
              <source src={vedio} type="video/mp4" />
              Sizning brauzeringiz ushbu videoni qo‘llab-quvvatlamaydi.
            </video>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-xl border-[white] shadow-lg w-full max-w-lg"
        >
          <h2 className="text-xl font-semibold text-center mb-4">Nega bizda o'qishingiz kerak?</h2>
          <div className="grid grid-cols-2 gap-4">
            <Card className="flex items-center gap-3 p-4">
              <FaChalkboardTeacher className="text-2xl text-blue-400" />
              <span>Malakali o'qituvchilar</span>
            </Card>
            <Card className="flex items-center gap-3 p-4">
              <MdCastForEducation className="text-2xl text-green-400" />
              <span>Sifatli ta'lim</span>
            </Card>
            <Card className="flex items-center gap-3 p-4">
              <AiOutlineNodeIndex className="text-2xl text-yellow-400" />
              <span>Bepul networking</span>
            </Card>
            <Card className="flex items-center gap-3 p-4">
              <GiDiamondHard className="text-2xl text-purple-400" />
              <span>Yuqori tajriba</span>
            </Card>
          </div>
        </motion.div>
      </div>

      <Courses />
      <PortfolioGrid />
      <Footer />
    </div>
  )
}

export default Home