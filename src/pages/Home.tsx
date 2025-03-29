import { Briefcase, Network, Users } from 'lucide-react';
import Footer from '../components/Footer';
import Courses from '../components/Main'
import Navbar from '../components/Navbar'
import PortfolioGrid from '../components/Section';
import useParticles from "../components/effect";
import { FaCertificate } from 'react-icons/fa';
import { Card, CardContent } from '../components/ui/card';
import TextEffect from '../components/TextEffect';




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
      description: "Kursni muvaffaqiyatli tamomlagan o‘quvchilar “Sfera Akademiyasi” ning diplom va sertifikatiga ega bo‘ladi.",
    },
  ];
  const particlesRef = useParticles();
  return (
    <div>
      <div ref={particlesRef} id="tsparticles" className="absolute top-0 h-screen text-white -z-1">
      </div>

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

      <TextEffect text={'Afzalliklarimiz'} />
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
        {features.map((feature, index) => (
          <Card key={index} className="bg-transparent border-none text-center hover:bg-[#171F28]">
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <feature.icon className="w-12 h-12 text-green-500 text-left" />
              <h3 className="text-lg font-bold text-white">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Courses />
      <PortfolioGrid />
      <Footer />
    </div>
  )
}

export default Home