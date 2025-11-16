"use client"
import { useState, useEffect } from 'react'
import { X, MapPin, Users, Mountain, Heart } from 'lucide-react'

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show modal only on first visit
    const hasVisited = localStorage.getItem('hasVisitedJayawijaya')
    if (!hasVisited) {
      setTimeout(() => setIsOpen(true), 1000)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('hasVisitedJayawijaya', 'true')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-2xl w-full shadow-2xl transform animate-scale-in overflow-hidden">
        {/* Header dengan gradient */}
        <div className="relative h-32 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full blur-2xl"></div>
          </div>
          <div className="relative text-center">
            <h2 className="text-4xl font-black text-white mb-2">Selamat Datang!</h2>
            <p className="text-emerald-100 flex items-center justify-center gap-2">
              <span>❖</span> Jayawijaya - Lembah Baliem <span>❖</span>
            </p>
          </div>
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2 hover:bg-white/20 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">
            Jelajahi kekayaan budaya Kabupaten Jayawijaya yang terletak di jantung pegunungan Papua. 
            Temukan keunikan tradisi, kesenian, dan kehidupan masyarakat yang harmonis dengan alam.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl">
              <MapPin className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-2" />
              <h3 className="font-bold text-slate-800 dark:text-white mb-1">Lokasi</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Pegunungan Tengah Papua</p>
            </div>

            <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-xl">
              <Mountain className="w-8 h-8 text-teal-600 dark:text-teal-400 mb-2" />
              <h3 className="font-bold text-slate-800 dark:text-white mb-1">Lembah Baliem</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Keindahan alam yang memukau</p>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl">
              <Users className="w-8 h-8 text-amber-600 dark:text-amber-400 mb-2" />
              <h3 className="font-bold text-slate-800 dark:text-white mb-1">Suku Dani</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Warisan budaya turun-temurun</p>
            </div>

            <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-xl">
              <Heart className="w-8 h-8 text-rose-600 dark:text-rose-400 mb-2" />
              <h3 className="font-bold text-slate-800 dark:text-white mb-1">Gotong Royong</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Nilai kebersamaan yang kuat</p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleClose}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Mulai Jelajahi 🚀
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.4s ease-out;
        }
      `}</style>
    </div>
  )
}
