'use client'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa'

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-white px-6 py-20 text-center"
    >
      {/* Judul */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-10 text-gray-800"
      >
        About Me
      </motion.h2>

      {/* Isi utama */}
      <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto gap-10">
        {/* Foto profil */}
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          src="https://avatars.githubusercontent.com/u/9919?v=4"
          alt="Profile Picture"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-gray-200"
        />

        {/* Teks deskripsi */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-700 text-lg leading-relaxed max-w-2xl"
        >
          <p>
  Halo! Saya <span className="font-semibold text-gray-900">Fazle</span>, seorang{' '}
  <span className="font-semibold text-gray-900">Web Developer</span> yang kreatif
  dan teliti asal Indonesia 🇮🇩. Saya senang mengubah ide menjadi pengalaman web
  yang indah, fungsional, dan interaktif.
</p>

<p className="mt-4">
  Terampil dalam{' '}
  <span className="font-semibold text-gray-900">Next.js</span>,{' '}
  <span className="font-semibold text-gray-900">Tailwind CSS</span>, dan{' '}
  <span className="font-semibold text-gray-900">Laravel</span>. Selalu
  belajar dan menjelajahi teknologi baru untuk membuat web menjadi lebih hidup
  dan menarik ✨
</p>


          {/* Tombol kontak */}
          <a
              href="https://wa.me/6281311636736"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-black text-white rounded-full font-semibold transition-all duration-300 hover:bg-gray-800 hover:scale-105"
          >
            Contact Me
          </a>

          {/* Ikon Sosial Media */}
          <div className="flex justify-center gap-6 mt-6 text-2xl text-gray-600">
            <motion.a
              href="https://wa.me/6281311636736"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#25D366' }}
            >
              <FaWhatsapp />
            </motion.a>
            <motion.a
              href="https://instagram.com/fazleguna"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#E1306C' }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://www.tiktok.com/@only.faza?_t=ZS-90n6O6KHIzB&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#000000' }}
            >
              <FaTiktok />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
