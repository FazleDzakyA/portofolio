'use client'
import { motion } from 'framer-motion'
import {
  FaLaravel,
  FaPhp,
  FaNodeJs,
  FaAndroid,
  FaDatabase,
} from 'react-icons/fa'
import {
  SiMysql,
  SiFirebase,
  SiTailwindcss,
  SiNextdotjs,
  SiKotlin,
  SiBootstrap,
} from 'react-icons/si'

const projects = [
  {
    title: 'Ronda & Kerja Bakti Monitor',
    desc: 'Sistem monitoring partisipasi warga berbasis web dengan dashboard interaktif dan data real-time.',
    tech: ['Laravel', 'MySQL', 'Bootstrap'],
    icons: [
      { icon: <FaLaravel />, color: '#FF2D20' },
      { icon: <SiMysql />, color: '#00758F' },
      { icon: <SiBootstrap />, color: '#7952B3' },
    ],
    link: '#',
  },
  {
    title: 'SiswaAI',
    desc: 'Aplikasi Android asisten belajar pintar yang membantu siswa memahami materi dan tugas sekolah.',
    tech: ['Android Studio', 'AI API', 'Firebase'],
    icons: [
      { icon: <FaAndroid />, color: '#3DDC84' },
      { icon: <SiFirebase />, color: '#FFCA28' },
    ],
    link: '#',
  },
  {
    title: 'HealthMate',
    desc: 'Aplikasi kesehatan yang memberikan rencana olahraga, menu sehat, dan fitur BMI tracker.',
    tech: ['Kotlin', 'Node.js', 'Next.js'],
    icons: [
      { icon: <SiKotlin />, color: '#A97BFF' },
      { icon: <FaNodeJs />, color: '#83CD29' },
      { icon: <SiNextdotjs />, color: '#000000' },
    ],
    link: '#',
  },
  {
    title: 'Rental Kendaraan App',
    desc: 'Aplikasi modern untuk penyewaan kendaraan lengkap dengan sistem top-up dan cashback member.',
    tech: ['PHP', 'MySQL', 'TailwindCSS'],
    icons: [
      { icon: <FaPhp />, color: '#777BB4' },
      { icon: <SiMysql />, color: '#00758F' },
      { icon: <SiTailwindcss />, color: '#38BDF8' },
    ],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-white px-6 py-20 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-gray-800 text-center"
      >
        My Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.desc}</p>

            {/* Tech Badges */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-gray-100 border border-gray-300 rounded-full text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Tech Icons with color */}
            <div className="flex justify-center gap-4 text-2xl mb-2">
              {project.icons.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.25 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="transition"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>

            <a
              href={project.link}
              className="inline-block mt-2 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
              View Details
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
