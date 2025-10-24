import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-center py-10 text-sm text-gray-600 relative z-10">
      <p>
        © {new Date().getFullYear()} <span className="font-semibold text-gray-800">Faza</span> — 
        Crafted with ❤️ using <span className="font-semibold text-gray-800">Next.js</span> & Tailwind CSS
      </p>

      <div className="flex justify-center gap-6 mt-4 text-xl text-gray-500">
        <a
              href="https://wa.me/6281311636736"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition"
        >
          <FaWhatsapp />
        </a>
        <a
              href="https://instagram.com/fazleguna"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>
        <a
              href="https://www.tiktok.com/@only.faza?_t=ZS-90n6O6KHIzB&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
          <FaTiktok />
        </a>
      </div>
    </footer>
  )
}
