"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + 10
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-emerald-600 via-teal-600 to-green-700">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="mb-8 animate-bounce-slow">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-ping"></div>
            <div className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-4xl font-black text-emerald-600">JW</span>
            </div>
          </div>
          <h1 className="text-4xl font-black text-white mb-2">Jayawijaya</h1>
          <p className="text-emerald-100 text-lg flex items-center justify-center gap-2">
            <span>❖</span> Lembah Baliem <span>❖</span>
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-yellow-300 transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-white/80 text-sm mt-3 font-medium">{progress}%</p>
        </div>

        {/* Loading Dots */}
        <div className="flex gap-2 justify-center mt-6">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>

        {/* Tagline */}
        <p className="text-white/60 text-sm mt-8 italic">
          Memuat kekayaan budaya Papua...
        </p>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(-5%);
          }
          50% {
            transform: translateY(0);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </div>
  )
}
