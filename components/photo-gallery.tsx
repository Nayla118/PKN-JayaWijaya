"use client"
import { useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'

interface PhotoGalleryProps {
  photos: {
    src: string
    alt: string
    category: string
  }[]
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30"
            onClick={() => setSelectedPhoto(index)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-bold text-sm">{photo.category}</p>
                <p className="text-white/80 text-xs">{photo.alt}</p>
              </div>
            </div>
            
            {/* Zoom Icon */}
            <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-800/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
              <ZoomIn className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={photos[selectedPhoto].src}
                alt={photos[selectedPhoto].alt}
                fill
                className="object-contain"
                sizes="100vw"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          {selectedPhoto > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedPhoto(selectedPhoto - 1)
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {selectedPhoto < photos.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedPhoto(selectedPhoto + 1)
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Caption */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white">
            <p className="text-sm text-emerald-300 font-semibold mb-1">{photos[selectedPhoto].category}</p>
            <p className="text-lg font-bold">{photos[selectedPhoto].alt}</p>
            <p className="text-sm text-white/70 mt-2">
              {selectedPhoto + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </>
  )
}
