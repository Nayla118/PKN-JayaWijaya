"use client"

import { useState } from "react"

const galleryItems = [
  { id: 1, category: "food", title: "Papeda Tradisional", image: "/papeda-makanan-papua.jpg" },
  { id: 2, category: "food", title: "Ikan Kuah Kuning", image: "/ikan-kuah-kuning-papua.jpg" },
  { id: 3, category: "fashion", title: "Pakaian Adat Koteka", image: "/koteka-pakaian-adat.jpg" },
  { id: 4, category: "fashion", title: "Noken Tradisional", image: "/noken-tas-papua.jpg" },
  { id: 5, category: "arts", title: "Tarian Perang", image: "/tarian-perang-papua.jpg" },
  { id: 6, category: "arts", title: "Alat Musik Tifa", image: "/tifa-alat-musik.jpg" },
  { id: 7, category: "festival", title: "Festival Lembah Baliem", image: "/festival-lembah-baliem.jpg" },
  { id: 8, category: "nature", title: "Pemandangan Lembah Baliem", image: "/baliem-valley-landscape.jpg" },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)
  const [filter, setFilter] = useState("all")

  const categories = [
    { id: "all", label: "Semua" },
    { id: "food", label: "Makanan" },
    { id: "fashion", label: "Pakaian" },
    { id: "arts", label: "Kesenian" },
    { id: "festival", label: "Festival" },
    { id: "nature", label: "Alam" },
  ]

  const filtered = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter)

  return (
    <section
      id="gallery"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/5 to-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Galeri Budaya <span className="text-primary">Jayawijaya</span>
          </h2>
          <p className="text-lg text-muted-foreground">Koleksi foto keindahan dan kekayaan budaya Jayawijaya</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                filter === cat.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground border border-border hover:border-primary/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-lg cursor-pointer bg-card aspect-square"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-4">
                <h3 className="text-white font-semibold text-sm">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeInUp">
          <div className="relative max-w-2xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-secondary transition-colors text-3xl"
            >
              ✕
            </button>
            <img
              src={selectedImage.image || "/placeholder.svg"}
              alt={selectedImage.title}
              className="w-full rounded-lg"
            />
            <h3 className="text-white text-xl font-bold mt-4">{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </section>
  )
}
