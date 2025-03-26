import Courses from '../components/Main'
import Navbar from '../components/Navbar'
import useParticles from "../components/effect";


function Home() {
  const particlesRef = useParticles();
  return (
    <div>
      <section ref={particlesRef} id="tsparticles" className="relative h-screen w-full">
        <Navbar />
      </section>
      <Courses />
    </div>
  )
}

export default Home