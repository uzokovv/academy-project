import { motion } from "framer-motion";

const TextEffect = ({text}: any) => {
  return (
    <div className="bg-rgb(18,23,35) text-white pt-10 text-center mt-30">
      <motion.h2 className="text-5xl font-bold mb-20">
        {`${text}`.split(" ").map((word, i) => (
          <span key={i} className="inline-block mr-2">
            {word.split("").map((letter, j) => (
              <motion.span
                key={j}
                whileHover={{ y: -9 }}
                className="inline-block"
                transition={{ type: "spring", stiffness: 400 }}
              >
                {letter}
              </motion.span>
            ))} {" "}
          </span>
        ))}
      </motion.h2>
    </div>
  )
}

export default TextEffect