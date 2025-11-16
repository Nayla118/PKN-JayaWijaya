"use client"
import { useState } from "react"
import Link from "next/link"
import PhotoGallery from "../../../components/photo-gallery"

const foodItems = [
  {
    name: "Papeda",
    desc: "Makanan pokok dari sagu dengan ikan kuah kuning yang gurih dan lezat, menjadi hidangan utama dalam kehidupan sehari-hari masyarakat Jayawijaya.",
    details:
      "Papeda terbuat dari tepung sagu yang dimasak dengan air hingga membentuk pasta putih yang lengket. Disajikan dengan ikan segar dalam kuah kuning berempah, menciptakan kombinasi rasa yang sempurna dan bergizi tinggi.",
    image: "🍲",
  },
  {
    name: "Ikan Kuah Kuning",
    desc: "Ikan segar dimasak dengan kunyit, jahe, dan rempah-rempah tradisional yang memberikan cita rasa autentik Papua yang kaya dan mendalam.",
    details:
      "Kuah kuning dibuat dari kombinasi kunyit, jahe, bawang merah, dan cabai yang dihaluskan. Ikan dipilih dari hasil tangkapan sungai atau laut lokal, dimasak dengan perlahan hingga empuk dan bumbu meresap sempurna.",
    image: "🐟",
  },
  {
    name: "Keladi Rebus",
    desc: "Umbi keladi yang lembut dan bergizi, menjadi makanan sampingan yang sempurna untuk melengkapi hidangan utama masyarakat Jayawijaya.",
    details:
      "Keladi direbus hingga matang dalam air garam. Teksturnya yang lembut dan rasa yang sedikit manis membuat keladi menjadi pilihan favorit sebagai pendamping makanan pokok.",
    image: "🥔",
  },
  {
    name: "Ubi Ungu",
    desc: "Ubi kaya antosianin dengan warna ungu yang indah, menyediakan nutrisi lengkap dan menjadi alternatif makanan pokok yang menyehatkan.",
    details:
      "Ubi ungu dapat dimasak dengan berbagai cara: direbus, digoreng, atau dijadikan bubur. Kandungan antosianin memberikan manfaat antioksidan yang tinggi untuk kesehatan tubuh.",
    image: "🟣",
  },
  {
    name: "Noken Isi",
    desc: "Makanan khas berupa nasi yang dibungkus dalam noken (tas tradisional) untuk perjalanan dan upacara adat, praktis dan bergizi.",
    details:
      "Noken isi adalah nasi putih yang dibumbui sedang dan dibungkus dalam noken. Biasa dibawa dalam upacara atau perjalanan jauh karena mudah dibawa dan tahan lama.",
    image: "📦",
  },
  {
    name: "Sayur Paku",
    desc: "Paku muda yang diolah menjadi sayuran bergizi tinggi, menjadi sayuran favorit dalam menu harian masyarakat Jayawijaya.",
    details:
      "Paku dipetik saat masih muda, lalu diolah dengan cara ditumis atau dikukus. Rasanya yang sedikit pahit dan teksturnya yang renyah menjadikan sayur paku sebagai pilihan sehat.",
    image: "🌿",
  },
]

export default function MakananPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const photos = [
    { src: "/papeda-makanan-papua.jpg", alt: "Papeda dengan ikan kuah kuning", category: "Makanan" },
    { src: "/ikan-kuah-kuning-papua.jpg", alt: "Ikan kuah kuning khas Papua", category: "Makanan" },
    { src: "/papeda-makanan-papua.jpg", alt: "Penyajian papeda tradisional", category: "Makanan" },
    { src: "/noken-tas-papua.jpg", alt: "Noken berisi makanan untuk dibawa saat upacara", category: "Tradisi" },
    { src: "/festival-lembah-baliem.jpg", alt: "Festival dan jamuan rakyat dengan hidangan tradisional", category: "Upacara" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8">
            <span>←</span> Kembali ke Beranda
          </Link>
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              Makanan Khas <span className="text-primary">Jayawijaya</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Jelajahi cita rasa tradisional yang telah diwariskan turun-temurun dan menjadi bagian penting dari
              identitas kuliner Papua. Di halaman ini Anda akan menemukan foto-foto autentik, penjelasan cara
              pengolahan, serta konteks sosial dan upacara yang terkait dengan makanan khas Jayawijaya.
            </p>
            <p className="mt-4 text-base text-muted-foreground max-w-3xl mx-auto">
              Highlight: papeda sebagai makanan pokok, ikan kuah kuning sebagai lauk tradisional, serta umbi-umbian
              lokal yang mendukung ketahanan pangan komunitas.
            </p>
          </div>
        </div>

        {/* Photo gallery for food */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Galeri Makanan & Tradisi Kuliner</h2>
          <p className="text-muted-foreground mb-6">Klik foto untuk memperbesar dan membaca keterangan singkat tiap gambar.</p>
          <PhotoGallery photos={photos} />
        </div>

        {/* Food Cards */}
        <div className="space-y-4">
          {foodItems.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-200"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-6 flex items-start gap-6 hover:bg-muted/50 transition-colors text-left"
              >
                <div className="text-5xl flex-shrink-0">{item.image}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
                <div className="text-2xl flex-shrink-0 text-primary">{expandedIndex === index ? "−" : "+"}</div>
              </button>

              {expandedIndex === index && (
                <div className="px-6 pb-6 pt-0 border-t border-border">
                  <p className="text-foreground leading-relaxed">{item.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-16 flex justify-between gap-4">
          <Link
            href="/budaya/nilai"
            className="flex-1 px-6 py-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:bg-muted text-center font-semibold"
          >
            ← Nilai Budaya
          </Link>
          <Link
            href="/budaya/pakaian"
            className="flex-1 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-center font-semibold"
          >
            Pakaian Adat →
          </Link>
        </div>
      </div>
    </section>
  )
}
