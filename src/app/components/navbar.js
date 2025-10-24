'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
  ]

  return (
    <nav className="fixed w-full top-0 left-0 bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-semibold text-gray-900 tracking-tight"
        >
          Faza<span className="text-gray-500">Dev</span>
        </motion.h1>

        {/* Tombol Menu (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none text-xl"
        >
          ☰
        </button>

        {/* Links */}
        <ul
          className={`${
            open ? 'flex' : 'hidden'
          } absolute md:static top-16 md:top-0 left-0 w-full md:w-auto flex-col md:flex-row items-center gap-6 bg-white md:bg-transparent md:flex transition-all duration-300 border-t md:border-none border-gray-200`}
        >
          {links.map((link, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative font-medium text-gray-700 hover:text-gray-900 transition duration-300 group"
            >
              <a href={link.href} className="px-1">
                {link.label}
              </a>
              {/* Animasi underline */}
              <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
