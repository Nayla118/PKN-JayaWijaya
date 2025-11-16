"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

interface ImageLightboxProps {
  images: { src: string; alt: string; description?: string }[]
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export function ImageLightbox({ images, currentIndex, onClose, onNext, onPrev }: ImageLightboxProps) {
  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose, onNext, onPrev])

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white text-2xl transition-all hover:scale-110"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Image Counter */}
      <div className="absolute top-4 left-4 z-10 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white font-bold">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Previous Button */}
      {currentIndex > 0 && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white text-3xl transition-all hover:scale-110"
          aria-label="Previous"
        >
          ←
        </button>
      )}

      {/* Next Button */}
      {currentIndex < images.length - 1 && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white text-3xl transition-all hover:scale-110"
          aria-label="Next"
        >
          →
        </button>
      )}

      {/* Main Image */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <div 
          className={`relative transition-all duration-300 ${
            isZoomed ? 'w-full h-full' : 'max-w-5xl max-h-[80vh]'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className={`object-contain cursor-zoom-${isZoomed ? 'out' : 'in'}`}
            priority
          />
        </div>
      </div>

      {/* Description */}
      {currentImage.description && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 max-w-2xl bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl text-white text-center">
          <p className="font-semibold text-lg">{currentImage.alt}</p>
          <p className="text-sm text-white/80 mt-1">{currentImage.description}</p>
        </div>
      )}

      {/* Thumbnails */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4 py-2 bg-white/5 backdrop-blur-md rounded-full no-scrollbar">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => {
              const diff = index - currentIndex
              if (diff > 0) {
                for (let i = 0; i < diff; i++) onNext()
              } else if (diff < 0) {
                for (let i = 0; i < Math.abs(diff); i++) onPrev()
              }
            }}
            className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
              index === currentIndex 
                ? 'border-white scale-110' 
                : 'border-white/30 hover:border-white/60 opacity-60 hover:opacity-100'
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

// Gallery Grid Component
interface GalleryGridProps {
  images: { src: string; alt: string; description?: string }[]
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative aspect-square overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="font-bold text-lg">{image.alt}</p>
                {image.description && (
                  <p className="text-sm text-white/80 mt-1">{image.description}</p>
                )}
              </div>
            </div>
            <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              🔍
            </div>
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <ImageLightbox
          images={images}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  )
}
