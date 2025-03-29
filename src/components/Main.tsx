import { motion } from "framer-motion";
import { Button } from "./ui/button";

const courses = [
  {
    title: "Foundation",
    duration: "Davomiyligi: 2 oy",
    description:
      "Foundation kursida dasturlash sohasida boshlang‘ich bilimlarga ega bo‘lish bilan birga dasturlash sohasidagi asosiy konseptlarni va texnologiyalarni o‘rganishga tayyorlaydi.",
    image: "http://localhost:5173/src/assets/milliardev.jpg",
  },
  {
    title: "Front-end",
    duration: "Davomiyligi: 6 oy",
    description:
      "Front-end foydalanuvchi interfeysini yaratadigan qismi bo‘lib, saytning dizayni, animatsiyalar, va foydalanuvchi bilan interaktiv kommunikatsiya qurishni o‘z ichiga oladi.",
    image: "http://localhost:5173/src/assets/milliardev.jpg",
  },
  {
    title: "Back-end",
    duration: "Davomiyligi: 10 oy",
    description:
      "Back-end Siz foydalanayotgan websaytni ichki qismi bo‘lib, server, ma'lumotlar bazasi va tizimlar orasidagi logikani yaratishni, turli o‘yin va telegram botlar yaratishni o‘rganasiz.",
    image: "http://localhost:5173/src/assets/milliardev.jpg",
  },
];

export default function Courses() {
  return (
    <div className="bg-rgb(18,23,35) text-white py-20 px-8 text-center relative">
      <motion.h2 className="text-5xl font-bold mb-20">
        {"Asosiy yo‘nalishlarimiz".split(" ").map((word, i) => (
          <span key={i} className="inline-block">
            {word.split("").map((letter, j) => (
              <motion.span
                key={j}
                whileHover={{ y: -9 }}
                className="inline-block mr-[1px]"
                transition={{ type: "spring", stiffness: 400 }}
              >
                {letter}
              </motion.span>
            ))} {" "}
          </span>
        ))}
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center relative z-10">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#161b22] p-8 rounded-xl w-[350px] shadow-xl border border-gray-700 flex flex-col justify-between"
          >
            <div className="flex flex-col items-start">
              <div className="flex gap-2 mb-4">
                {Array(5).fill("⭐").map((star, i) => (
                  <span key={i} className="text-yellow-500">{star}</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 text-left text-[15px] leading-relaxed">
                {course.description}
              </p>
              <div className="border-b border-gray-700 w-full my-4"></div>
              <div className="flex items-center gap-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{course.title}</h3>
                  <p className="text-gray-400 text-sm">{course.duration}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button
          variant="outline"
          className="border-white text-white bg-rgb(18,23,35) hover:bg-whiteru hover:text-blue-900 transition-all px-8 py-6 text-lg font-semibold uppercase tracking-widest border-2"
        >
          Batafsil
        </Button>
      </div>
    </div>
  );
}
