"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Info } from 'lucide-react'

interface FlipCardProps {
  id: string
  title: string
  image: string
  description: string
  href: string
  color: string
  detailInfo: {
    items: number
    duration: string
    highlights: string[]
  }
}

export default function FlipCard({ id, title, image, description, href, color, detailInfo }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const emojiMap: { [key: string]: string } = {
    food: '🍲',
    fashion: '👔',
    arts: '🎵',
    work: '💼',
    customs: '🔥',
    values: '❤️',
  }

  return (
    <div
      className="group h-[480px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-emerald-400 cursor-pointer">
            {/* Foto Asli */}
            <div className="relative w-full h-56 rounded-2xl mb-6 overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-20 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Icon Badge */}
              <div className={`absolute top-4 right-4 w-16 h-16 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                <span className="text-3xl filter drop-shadow-lg">{emojiMap[id]}</span>
              </div>
              
              {/* Info Icon */}
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-800/90 p-2 rounded-lg backdrop-blur-sm">
                <Info className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>

            <h3 className="text-3xl font-black mb-4 text-slate-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 transition-all">
              {title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 text-base leading-relaxed">
              {description}
            </p>

            <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-bold group-hover:gap-3 gap-2 transition-all">
              <span>Pelajari Selengkapnya</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className={`h-full bg-gradient-to-br ${color} rounded-3xl p-8 shadow-2xl flex flex-col justify-between text-white`}>
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-black">{title}</h3>
                <span className="text-5xl">{emojiMap[id]}</span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm opacity-90 mb-1">Total Konten</p>
                  <p className="text-2xl font-bold">{detailInfo.items} Item</p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm opacity-90 mb-1">Durasi Baca</p>
                  <p className="text-2xl font-bold">{detailInfo.duration}</p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm opacity-90 mb-2">Sorotan:</p>
                  <ul className="space-y-1">
                    {detailInfo.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm flex items-center gap-2">
                        <span className="text-yellow-300">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <Link
              href={href}
              className="w-full bg-white text-slate-800 py-4 rounded-xl font-bold text-center hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Buka Halaman
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  )
}
