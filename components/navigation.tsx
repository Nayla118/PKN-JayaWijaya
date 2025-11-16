"use client"

import { useState } from "react"
import Link from "next/link"
import DynamicLogo from "./dynamic-logo"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchActive, setSearchActive] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const navItems = [
    { label: "Beranda", href: "/" },
    { label: "Budaya", href: "/budaya" },
    { label: "Keunikan", href: "/keunikan" },
    { label: "Galeri", href: "/galeri" },
    { label: "Kesimpulan", href: "/kesimpulan" },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 bg-gradient-to-r from-emerald-800 via-green-700 to-teal-800 backdrop-blur-md shadow-xl">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Dynamic Logo - Changes based on current page */}
            <DynamicLogo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-3">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-bold text-white hover:text-amber-300 transition-all duration-300 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 rounded-lg transition-all duration-300 scale-0 group-hover:scale-100"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></div>
                </Link>
              ))}
            </div>

            {/* Search & Mobile Menu */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchActive(!searchActive)}
                className="p-3 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-200 transform hover:scale-110 group"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  className="group-hover:stroke-yellow-300"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-3 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-200 transform hover:scale-110"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {searchActive && (
            <div className="pb-4 animate-fadeInUp">
              <div className="relative">
                <input
                  type="text"
                  placeholder="🔍 Cari budaya, makanan, pakaian, atau kesenian..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 border-2 border-emerald-300 rounded-2xl bg-white/95 backdrop-blur-md text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-amber-400 focus:border-amber-500 shadow-xl text-lg font-medium"
                />
              </div>
            </div>
          )}

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 animate-fadeInUp space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-6 py-3 text-sm font-bold text-white hover:bg-white/20 rounded-xl transition-all duration-200 transform hover:scale-105 hover:translate-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  ✨ {item.label}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>
    </>
  )
}
