import Courses from '../components/Main'
import Navbar from '../components/Navbar'
import useParticles from "../components/effect";


function Home() {
  const particlesRef = useParticles();
  return (
    <div>
      <div ref={particlesRef} id="tsparticles" className="absolute top-0 h-screen text-white -z-1">
      </div>

      <Navbar />
      <div className='container mx-auto max-w-[700px] mt-50 text-center text-white'>
        <h1 className='text-5xl font-bold '>Sfera Academy - bu <span className='text-[#6A9C89]'>Kelajak</span> <br />
          kasblar akademiyasi!</h1>

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
      <Courses />
    </div>
  )
}

export default Home