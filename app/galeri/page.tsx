"use client"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"
import ThemeToggle from "@/components/theme-toggle"
import GalleryGrid from "@/components/image-lightbox"
import ShareButton from "@/components/share-button"
import PrintDownload from "@/components/print-download"
import FadeIn from "@/components/animations"

const galleryImages = [
  {
    src: "/baliem-valley-landscape.jpg",
    alt: "Lembah Baliem",
    description: "Pemandangan spektakuler Lembah Baliem yang dikelilingi pegunungan"
  },
  {
    src: "/festival-lembah-baliem.jpg",
    alt: "Festival Lembah Baliem",
    description: "Perayaan budaya terbesar di Papua dengan tarian perang tradisional"
  },
  {
    src: "/tarian-perang-papua.jpg",
    alt: "Tarian Perang",
    description: "Tarian tradisional Suku Dani yang penuh semangat"
  },
  {
    src: "/koteka-pakaian-adat.jpg",
    alt: "Koteka - Pakaian Adat",
    description: "Pakaian adat tradisional laki-laki Suku Dani"
  },
  {
    src: "/noken-tas-papua.jpg",
    alt: "Noken",
    description: "Tas tradisional Papua yang diakui UNESCO"
  },
  {
    src: "/tifa-alat-musik.jpg",
    alt: "Tifa",
    description: "Alat musik tradisional Papua"
  },
  {
    src: "/papeda-makanan-papua.jpg",
    alt: "Papeda",
    description: "Makanan khas Papua yang terbuat dari sagu"
  },
  {
    src: "/ikan-kuah-kuning-papua.jpg",
    alt: "Ikan Kuah Kuning",
    description: "Kuliner khas Papua dengan cita rasa istimewa"
  },
]

export default function GaleriPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
      <ScrollProgress />
      <Navigation />
      <ThemeToggle />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn delay={0}>
            <div className="text-center mb-8">
              <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full text-base font-black shadow-2xl">
                  📸 GALERI FOTO 📸
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl font-black mb-6 leading-tight">
                <span className="inline-block bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                  Galeri
                </span>
                <br />
                <span className="text-white">Jayawijaya</span>
              </h1>

              <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
                Koleksi foto dan dokumentasi visual budaya, alam, dan kehidupan masyarakat Suku Dani di Lembah Baliem
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-center items-center">
                <ShareButton 
                  title="Galeri Budaya Jayawijaya"
                  text="Lihat koleksi foto budaya Papua di Kabupaten Jayawijaya!"
                />
                <PrintDownload 
                  title="Galeri Jayawijaya"
                  contentId="gallery-content"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" id="gallery-content">
        <div className="max-w-7xl mx-auto">
          <FadeIn delay={100}>
            <div className="mb-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-black mb-4 text-gray-900">
                Dokumentasi Visual Budaya Papua
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Klik pada gambar untuk melihat dalam ukuran penuh dengan kontrol navigasi interaktif
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <GalleryGrid images={galleryImages} />
          </FadeIn>

          {/* Info Section */}
          <FadeIn delay={300}>
            <div className="mt-16 bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 text-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10 text-center">
                <div className="text-5xl mb-4">📷</div>
                <h3 className="text-3xl font-black mb-4">Tips Menjelajahi Galeri</h3>
                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                    <div className="text-3xl mb-2">🖱️</div>
                    <h4 className="font-bold mb-2">Klik untuk Zoom</h4>
                    <p className="text-sm text-white/80">Klik gambar untuk melihat detail dalam ukuran penuh</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                    <div className="text-3xl mb-2">⌨️</div>
                    <h4 className="font-bold mb-2">Keyboard Navigation</h4>
                    <p className="text-sm text-white/80">Gunakan ← → untuk navigasi, ESC untuk tutup</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                    <div className="text-3xl mb-2">📱</div>
                    <h4 className="font-bold mb-2">Touch Friendly</h4>
                    <p className="text-sm text-white/80">Swipe untuk berpindah gambar di perangkat mobile</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
