"use client"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"
import ThemeToggle from "@/components/theme-toggle"
import FloatingActionButton from "@/components/floating-action-button"
import Preloader from "@/components/preloader"
import WelcomeModal from "@/components/welcome-modal"
import ReadingProgress from "@/components/reading-progress"
import FlipCard from "@/components/flip-card"
import PhotoGallery from "@/components/photo-gallery"
import StatsSection from "@/components/stats-section"
import Image from "next/image"
import Link from "next/link"

const culturePages = [
  {
    id: "food",
    title: "Makanan Khas",
    image: "/papeda-makanan-papua.jpg",
    image2: "/ikan-kuah-kuning-papua.jpg",
    description: "Jelajahi cita rasa tradisional Jayawijaya dengan papeda, ikan kuah kuning, dan keladi yang lezat",
    href: "/budaya/makanan",
    color: "from-orange-400 to-red-500",
    detailInfo: {
      items: 5,
      duration: "3-5 menit",
      highlights: ["Papeda khas Papua", "Ikan kuah kuning", "Keladi bakar"]
    }
  },
  {
    id: "fashion",
    title: "Pakaian Adat",
    image: "/koteka-pakaian-adat-dani.jpg",
    image2: "/noken-tas-papua.jpg",
    description: "Temukan keindahan koteka, rok rumbai, noken, dan perhiasan adat yang bermakna",
    href: "/budaya/pakaian",
    color: "from-emerald-400 to-teal-500",
    detailInfo: {
      items: 4,
      duration: "4-6 menit",
      highlights: ["Koteka tradisional", "Noken anyaman", "Perhiasan bulu"]
    }
  },
  {
    id: "arts",
    title: "Kesenian Daerah",
    image: "/tarian-perang-papua-wamena.jpg",
    image2: "/tifa-alat-musik-tradisional.jpg",
    description: "Rasakan harmoni tarian perang, musik tifa, dan seni ukir Wamena yang memukau",
    href: "/budaya/kesenian",
    color: "from-purple-400 to-pink-500",
    detailInfo: {
      items: 3,
      duration: "5-7 menit",
      highlights: ["Tarian perang", "Musik tifa", "Seni ukir kayu"]
    }
  },
  {
    id: "work",
    title: "Pekerjaan Masyarakat",
    image: "/baliem-valley-wamena-papua-landscape.jpg",
    image2: "/baliem-valley-landscape.jpg",
    description: "Pelajari kehidupan petani, peternak, pengrajin, dan pedagang Jayawijaya",
    href: "/budaya/pekerjaan",
    color: "from-yellow-400 to-amber-500",
    detailInfo: {
      items: 4,
      duration: "3-5 menit",
      highlights: ["Pertanian tradisional", "Peternakan babi", "Kerajinan noken"]
    }
  },
  {
    id: "customs",
    title: "Kebiasaan Adat Unik",
    image: "/festival-lembah-baliem-papua.jpg",
    image2: "/festival-lembah-baliem.jpg",
    description: "Ketahui Festival Lembah Baliem, upacara bakar batu, dan pertarungan tradisional",
    href: "/budaya/kebiasaan",
    color: "from-red-400 to-orange-500",
    detailInfo: {
      items: 3,
      duration: "5-8 menit",
      highlights: ["Festival Lembah Baliem", "Bakar batu", "Perang tradisional"]
    }
  },
  {
    id: "values",
    title: "Nilai Budaya",
    image: "/tarian-perang-papua.jpg",
    image2: "/koteka-pakaian-adat.jpg",
    description: "Pahami gotong royong, persaudaraan, dan nilai kebersamaan masyarakat Jayawijaya",
    href: "/budaya/nilai",
    color: "from-rose-400 to-pink-500",
    detailInfo: {
      items: 5,
      duration: "4-6 menit",
      highlights: ["Gotong royong", "Persaudaraan", "Kebersamaan"]
    }
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Preloader />
      <WelcomeModal />
      <ReadingProgress />
      <ScrollProgress />
      <Navigation />
      <ThemeToggle />
      <FloatingActionButton />
      <HeroSection />

      {/* Culture Pages Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 dark:from-emerald-900 dark:via-teal-900 dark:to-green-900 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-64 h-64 bg-amber-300 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 -right-20 w-80 h-80 bg-emerald-400 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-full text-sm font-black shadow-xl">
                �️ KEKAYAAN BUDAYA �
              </span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl font-black mb-6">
              <span className="inline-block bg-gradient-to-r from-emerald-700 via-teal-600 to-green-700 bg-clip-text text-transparent">
                Budaya Jayawijaya
              </span>
            </h2>
            
            <div className="flex justify-center gap-2 mb-6">
              <div className="h-2 w-16 bg-emerald-600 rounded-full"></div>
              <div className="h-2 w-24 bg-teal-600 rounded-full"></div>
              <div className="h-2 w-16 bg-green-600 rounded-full"></div>
            </div>
            
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-semibold">
              Jelajahi setiap aspek budaya dengan halaman detail yang komprehensif
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturePages.map((page) => (
              <FlipCard
                key={page.id}
                id={page.id}
                title={page.title}
                image={page.image}
                description={page.description}
                href={page.href}
                color={page.color}
                detailInfo={page.detailInfo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Photo Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-black shadow-xl">
                📸 GALERI FOTO
              </span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl font-black mb-4">
              <span className="inline-block bg-gradient-to-r from-amber-700 via-orange-600 to-red-700 bg-clip-text text-transparent">
                Keindahan Jayawijaya
              </span>
            </h2>
            
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Jelajahi keindahan alam, budaya, dan kehidupan masyarakat Lembah Baliem
            </p>
          </div>

          <PhotoGallery
            photos={[
              {
                src: "/papeda-makanan-papua.jpg",
                alt: "Papeda - Makanan Pokok Khas Papua",
                category: "Kuliner"
              },
              {
                src: "/ikan-kuah-kuning-papua.jpg",
                alt: "Ikan Kuah Kuning Papua",
                category: "Kuliner"
              },
              {
                src: "/koteka-pakaian-adat-dani.jpg",
                alt: "Koteka - Pakaian Adat Suku Dani",
                category: "Pakaian Adat"
              },
              {
                src: "/noken-tas-papua.jpg",
                alt: "Noken - Tas Anyaman Tradisional",
                category: "Kerajinan"
              },
              {
                src: "/tarian-perang-papua-wamena.jpg",
                alt: "Tarian Perang Tradisional Wamena",
                category: "Kesenian"
              },
              {
                src: "/tifa-alat-musik-tradisional.jpg",
                alt: "Tifa - Alat Musik Tradisional Papua",
                category: "Kesenian"
              },
              {
                src: "/festival-lembah-baliem-papua.jpg",
                alt: "Festival Lembah Baliem",
                category: "Festival"
              },
              {
                src: "/festival-lembah-baliem.jpg",
                alt: "Pertunjukan Festival Lembah Baliem",
                category: "Festival"
              },
              {
                src: "/baliem-valley-wamena-papua-landscape.jpg",
                alt: "Pemandangan Lembah Baliem Wamena",
                category: "Alam"
              },
              {
                src: "/baliem-valley-landscape.jpg",
                alt: "Keindahan Alam Lembah Baliem",
                category: "Alam"
              },
              {
                src: "/koteka-pakaian-adat.jpg",
                alt: "Masyarakat Suku Dani dengan Koteka",
                category: "Budaya"
              },
              {
                src: "/tarian-perang-papua.jpg",
                alt: "Ritual Tarian Perang Papua",
                category: "Budaya"
              },
            ]}
          />

          <div className="text-center mt-12">
            <Link
              href="/galeri"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <span>Lihat Galeri Lengkap</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
