"use client"
import { useEffect, useState, useRef } from 'react'
import { Users, Mountain, Heart, Sparkles } from 'lucide-react'

interface StatItemProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
  color: string
}

function StatItem({ icon, value, label, suffix = '', color }: StatItemProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className={`bg-gradient-to-br ${color} rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300`}>
      <div className="flex items-center justify-between mb-4">
        <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
          {icon}
        </div>
        <Sparkles className="w-8 h-8 opacity-50" />
      </div>
      
      <div className="text-5xl font-black mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      
      <div className="text-white/80 text-lg font-medium">
        {label}
      </div>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 dark:from-slate-900 dark:via-emerald-900/20 dark:to-teal-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-black shadow-xl">
              📊 FAKTA MENARIK
            </span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-black mb-4">
            <span className="inline-block bg-gradient-to-r from-teal-700 via-emerald-600 to-green-700 bg-clip-text text-transparent">
              Jayawijaya dalam Angka
            </span>
          </h2>
          
          <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Keunikan dan kekayaan budaya yang terjaga hingga kini
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem
            icon={<Users className="w-8 h-8 text-white" />}
            value={6}
            label="Aspek Budaya Utama"
            color="from-emerald-500 to-teal-600"
          />
          
          <StatItem
            icon={<Mountain className="w-8 h-8 text-white" />}
            value={1600}
            suffix="m"
            label="Ketinggian Lembah Baliem"
            color="from-blue-500 to-cyan-600"
          />
          
          <StatItem
            icon={<Heart className="w-8 h-8 text-white" />}
            value={100}
            suffix="+"
            label="Tahun Tradisi Terjaga"
            color="from-rose-500 to-pink-600"
          />
          
          <StatItem
            icon={<Sparkles className="w-8 h-8 text-white" />}
            value={12}
            suffix="+"
            label="Foto Dokumentasi"
            color="from-amber-500 to-orange-600"
          />
        </div>

        {/* Fun Facts */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border-2 border-emerald-100 dark:border-emerald-900">
            <div className="text-4xl mb-3">🎭</div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Festival Lembah Baliem</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Festival budaya tahunan yang menampilkan tarian perang, musik tradisional, dan berbagai atraksi budaya Suku Dani
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border-2 border-teal-100 dark:border-teal-900">
            <div className="text-4xl mb-3">🏔️</div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Lembah Baliem</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Dikelilingi pegunungan Jayawijaya yang megah dengan pemandangan alam yang memukau dan udara yang sejuk
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border-2 border-amber-100 dark:border-amber-900">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Gotong Royong</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Nilai kebersamaan yang kuat dalam setiap aspek kehidupan masyarakat, dari pertanian hingga upacara adat
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
