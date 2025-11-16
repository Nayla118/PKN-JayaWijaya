"use client"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"
import ThemeToggle from "@/components/theme-toggle"
import Link from "next/link"

const culturePages = [
  {
    id: "food",
    title: "Makanan Khas",
    icon: "🍲",
    description: "Jelajahi cita rasa tradisional Jayawijaya dengan papeda, ikan kuah kuning, dan keladi yang lezat",
    href: "/budaya/makanan",
    color: "from-orange-400 to-red-500",
  },
  {
    id: "fashion",
    title: "Pakaian Adat",
    icon: "👔",
    description: "Temukan keindahan koteka, rok rumbai, noken, dan perhiasan adat yang bermakna",
    href: "/budaya/pakaian",
    color: "from-emerald-400 to-teal-500",
  },
  {
    id: "arts",
    title: "Kesenian Daerah",
    icon: "🎵",
    description: "Rasakan harmoni tarian perang, musik tifa, dan seni ukir Wamena yang memukau",
    href: "/budaya/kesenian",
    color: "from-purple-400 to-pink-500",
  },
  {
    id: "work",
    title: "Pekerjaan Masyarakat",
    icon: "💼",
    description: "Pelajari kehidupan petani, peternak, pengrajin, dan pedagang Jayawijaya",
    href: "/budaya/pekerjaan",
    color: "from-yellow-400 to-amber-500",
  },
  {
    id: "customs",
    title: "Kebiasaan Adat Unik",
    icon: "🔥",
    description: "Ketahui Festival Lembah Baliem, upacara bakar batu, dan pertarungan tradisional",
    href: "/budaya/kebiasaan",
    color: "from-red-400 to-orange-500",
  },
  {
    id: "values",
    title: "Nilai Budaya",
    icon: "❤️",
    description: "Pahami gotong royong, persaudaraan, dan nilai kebersamaan masyarakat Jayawijaya",
    href: "/budaya/nilai",
    color: "from-rose-400 to-pink-500",
  },
]

export default function BerandaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navigation />
      <ThemeToggle />
      <HeroSection />

      {/* Culture Pages Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Identifikasi Budaya <span className="text-primary">Jayawijaya</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jelajahi setiap aspek budaya dengan halaman detail yang komprehensif
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturePages.map((page) => (
              <Link key={page.id} href={page.href}>
                <div className="group h-full bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-br ${page.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {page.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{page.title}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">{page.description}</p>
                  <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Pelajari Selengkapnya
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
