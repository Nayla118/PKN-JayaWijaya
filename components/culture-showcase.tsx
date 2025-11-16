"use client"

import { useState, useEffect } from "react"

const cultureItems = [
  {
    id: "food",
    title: "Makanan Khas",
    icon: "🍲",
    color: "from-orange-400 to-red-400",
    items: [
      { name: "Papeda", desc: "Makanan pokok dari sagu dengan ikan kuah kuning yang gurih" },
      { name: "Ikan Kuah Kuning", desc: "Ikan segar dimasak dengan kunyit dan rempah tradisional" },
      { name: "Keladi Rebus", desc: "Umbi keladi yang lembut, makanan sampingan bergizi" },
      { name: "Ubi Ungu", desc: "Ubi kaya antosianin, makanan pokok yang menyehatkan" },
    ],
  },
  {
    id: "fashion",
    title: "Pakaian Adat",
    icon: "👔",
    color: "from-emerald-400 to-teal-400",
    items: [
      { name: "Koteka (Pria)", desc: "Pakaian tradisional pria yang melambangkan kebersatuan dengan alam" },
      { name: "Rok Rumbai (Wanita)", desc: "Rok tradisional dengan rumbai kain yang penuh makna budaya" },
      { name: "Noken", desc: "Tas tenunan tradisional untuk membawa barang berharga" },
      { name: "Perhiasan Adat", desc: "Aksesoris dari manik-manik dan tulang yang kaya filosofi" },
    ],
  },
  {
    id: "arts",
    title: "Kesenian Daerah",
    icon: "🎵",
    color: "from-purple-400 to-pink-400",
    items: [
      { name: "Tarian Perang", desc: "Tarian penuh semangat yang menceritakan keberanian leluhur" },
      { name: "Tifa", desc: "Alat musik tradisional dari kayu dan kulit yang bergema" },
      { name: "Ukiran Kayu", desc: "Seni ukir Wamena dengan motif leluhur dan alam" },
      { name: "Lukisan Tradisional", desc: "Karya seni yang menggambarkan cerita budaya Dani" },
    ],
  },
  {
    id: "work",
    title: "Pekerjaan Masyarakat",
    icon: "💼",
    color: "from-yellow-400 to-amber-400",
    items: [
      { name: "Bertani Ubi", desc: "Pertanian lahan yang berkelanjutan dan organik" },
      { name: "Peternak Babi", desc: "Peternakan tradisional untuk kebutuhan upacara adat" },
      { name: "Pengrajin Noken", desc: "Pengrajin tas tradisional dengan teknik ikat yang rumit" },
      { name: "Pedagang Tradisional", desc: "Perdagangan produk lokal di pasar tradisional" },
    ],
  },
  {
    id: "customs",
    title: "Kebiasaan Adat Unik",
    icon: "🔥",
    color: "from-red-400 to-orange-400",
    items: [
      { name: "Festival Lembah Baliem", desc: "Perayaan budaya terbesar dengan pertarungan tradisional" },
      { name: "Upacara Bakar Batu", desc: "Ritual sakral untuk komunikasi dengan leluhur" },
      { name: "Potong Jari (Dani)", desc: "Upacara berkabung yang melambangkan kedukaan mendalam" },
      { name: "Pertarungan Suku", desc: "Pertandingan tradisional yang menunjukkan keberanian" },
    ],
  },
  {
    id: "values",
    title: "Nilai Budaya",
    icon: "❤️",
    color: "from-rose-400 to-pink-400",
    items: [
      { name: "Gotong Royong", desc: "Semangat kebersamaan dalam menjalankan tugas bersama" },
      { name: "Persaudaraan", desc: "Ikatan kuat antar anggota masyarakat yang bersatu" },
      { name: "Hormat Leluhur", desc: "Penghargaan terhadap nenek moyang dan warisan budaya" },
      { name: "Kebersamaan", desc: "Nilai utama dalam setiap aspek kehidupan masyarakat" },
    ],
  },
]

export default function CultureShowcase() {
  const [activeTab, setActiveTab] = useState("food")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const active = cultureItems.find((item) => item.id === activeTab)

  return (
    <section
      id="culture"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/5 to-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Identifikasi Budaya <span className="text-primary">Jayawijaya</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jelajahi kekayaan budaya, tradisi, dan nilai-nilai yang telah diwariskan turun-temurun
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {cultureItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === item.id
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card text-foreground border border-border hover:border-primary/50"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="hidden sm:inline">{item.title}</span>
              <span className="sm:hidden">{item.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        {active && (
          <div className="animate-scaleIn">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-8 text-primary">{active.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {active.items.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${active.color} mb-4 group-hover:scale-110 transition-transform duration-200`}
                    />
                    <h4 className="font-bold text-lg mb-2">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
