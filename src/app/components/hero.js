'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
  id="home"
  className="min-h-screen flex flex-col justify-center items-center text-center bg-white px-6"
>
  <motion.h1
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-5xl md:text-7xl font-extrabold text-gray-900"
  >
    Hai i'm, <span className="text-gray-700">Faza</span>
  </motion.h1>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.4, duration: 1 }}
    className="mt-4 text-gray-600 max-w-2xl text-lg"
  >
    Atau lebih dikenal dengan Fazle.Seorang pengembang web yang bersemangat, senang membangun pengalaman digital
    yang bersih, modern, dan interaktif.
  </motion.p>

  <motion.a
    href="#projects"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3 }}
    className="mt-8 inline-block px-8 py-3 bg-black text-white rounded-full font-semibold transition-all hover:bg-gray-800"
  >
View My Work 🚀  </motion.a>



      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-10 text-gray-500 text-sm animate-bounce"
      >
        scroll down ↓
      </motion.div>
    </section>
  )
}
