"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [stars, setStars] = useState<Array<{ top: number; left: number; duration: number; delay: number }>>([])

  useEffect(() => {
    setIsLoaded(true)
    // Generate random star positions only on client
    setStars(
      [...Array(15)].map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 3,
      }))
    )
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/baliem-valley-wamena-papua-landscape.jpg"
          alt="Lembah Baliem"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-teal-900/70 to-green-900/80"></div>
      </div>

      {/* Animated decorative circles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-600 rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600 rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-600 rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber-400 rounded-full opacity-40"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animation: `twinkle ${star.duration}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Badge */}
          <div className="mb-8 inline-block">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 text-white px-8 py-4 rounded-full text-base font-black shadow-2xl border-2 border-amber-400/50">
              <span className="text-2xl">🏔️</span>
              Selamat Datang di Lembah Baliem
              <span className="text-2xl">�</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="inline-block bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 bg-clip-text text-transparent drop-shadow-2xl">
              JAYAWIJAYA
            </span>
          </h1>

          {/* Subtitle with icons */}
          <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
            <span className="text-4xl">🎭</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-2xl">
              Jantung Budaya Papua Pegunungan
            </h2>
            <span className="text-4xl">🌺</span>
          </div>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed font-semibold drop-shadow-xl">
            Jelajahi keanekaragaman tradisi Suku Dani, kuliner khas, dan kesenian yang diwariskan turun-temurun
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="/budaya"
              className="group px-10 py-5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white rounded-full font-black text-lg shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-110 flex items-center gap-3"
            >
              <span className="text-2xl">🎨</span>
              <span>Jelajahi Budaya</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/galeri"
              className="group px-10 py-5 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 text-white rounded-full font-black text-lg shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-110 flex items-center gap-3"
            >
              <span className="text-2xl">📸</span>
              <span>Lihat Galeri</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { emoji: "📅", label: "Sejak 1969", color: "from-amber-600 to-orange-600" },
              { emoji: "🏔️", label: "1.500m mdpl", color: "from-emerald-600 to-teal-600" },
              { emoji: "🏛️", label: "Wamena", color: "from-green-600 to-emerald-600" },
              { emoji: "👥", label: "Suku Dani", color: "from-yellow-600 to-amber-600" },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 transform hover:scale-110 transition-all duration-300 shadow-2xl border-2 border-white/30`}
              >
                <div className="text-4xl mb-2">{item.emoji}</div>
                <div className="text-white font-bold text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="animate-bounce bg-emerald-700/40 backdrop-blur-md rounded-full p-4 border-2 border-amber-400/60">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.5);
          }
        }
      `}</style>
    </section>
  )
}
