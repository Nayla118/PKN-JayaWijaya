"use client"
import { useState } from "react"
import Link from "next/link"
import PhotoGallery from "../../../components/photo-gallery"

const customsItems = [
  {
    name: "Festival Lembah Baliem",
    desc: "Perayaan budaya terbesar dengan pertarungan tradisional yang menampilkan keberanian dan keahlian bertarung antar suku.",
    details:
      "Festival Lembah Baliem adalah acara tahunan yang dihadiri oleh ribuan masyarakat dari berbagai suku di wilayah Papua. Acara ini menampilkan pertarungan tradisional dengan berbagai kompetisi, pertunjukan kesenian, dan pameran produk lokal. Festival ini bukan hanya hiburan, tapi juga sarana untuk menjaga semangat persatuan dan kebersamaan antar suku.",
    image: "🎉",
  },
  {
    name: "Upacara Bakar Batu",
    desc: "Ritual sakral untuk komunikasi dengan leluhur, menciptakan jamuan makan yang simbolis dan penuh makna spiritual yang mendalam.",
    details:
      "Upacara bakar batu adalah ritual kuno yang dilakukan dengan memanaskan batu di atas api, kemudian menggunakannya untuk memasak makanan di dalam lubang yang digali. Makanan yang dihasilkan dianggap sebagai persembahan kepada leluhur. Upacara ini biasa dilakukan dalam perayaan penting, pernikahan, atau acara lainnya yang memerlukan berkomunikasi dengan dunia spiritual.",
    image: "🔥",
  },
  {
    name: "Potong Jari (Dani)",
    desc: "Upacara berkabung yang melambangkan kedukaan mendalam, merupakan bentuk pengorbanan dan ekspresi sedih yang sangat intens.",
    details:
      "Potong jari adalah upacara penghormatan terhadap orang yang meninggal, biasanya dilakukan oleh anggota keluarga perempuan. Ini bukan bentuk penyiksaan, tapi pengorbanan yang dianggap sebagai tanda cinta dan kesedihan yang mendalam. Upacara ini mencerminkan kedekatan emosional dan komitmen keluarga dalam budaya Dani.",
    image: "🙏",
  },
  {
    name: "Pertarungan Suku",
    desc: "Pertandingan tradisional yang menunjukkan keberanian, keterampilan, dan kehormatan dalam setiap gerakan dan strategi pertempuran.",
    details:
      "Pertarungan suku adalah kompetisi tradisional yang telah menjadi bagian penting dari budaya Papua. Pertarungan ini dilakukan dengan aturan tertentu dan bertujuan untuk menunjukkan keberanian dan keahlian bertarung. Meskipun terlihat kasar, pertarungan ini memiliki filosofi dan nilai budaya yang dalam, menjadi sarana untuk menyelesaikan konflik tanpa membawa dendam jangka panjang.",
    image: "⚔️",
  },
  {
    name: "Upacara Pernikahan Tradisional",
    desc: "Perayaan pernikahan dengan ritual kuno yang melibatkan seluruh keluarga dan komunitas dalam proses yang panjang dan bermakna.",
    details:
      "Pernikahan tradisional Jayawijaya adalah acara besar yang melibatkan kedua keluarga dan seluruh komunitas. Proses pernikahan dimulai dengan negosiasi antara keluarga, pemberian mas kawin tradisional, hingga upacara pernikahan yang dihadiri ratusan orang. Setiap tahapan memiliki makna budaya dan spiritual yang mendalam.",
    image: "💒",
  },
  {
    name: "Perayaan Panen Raya",
    desc: "Perayaan syukuran hasil panen yang melibatkan seluruh komunitas dalam mengucapkan terima kasih kepada alam dan leluhur.",
    details:
      "Perayaan panen adalah tradisi tahunan yang dilakukan setelah musim panen selesai. Acara ini melibatkan seluruh komunitas dalam berbagi hasil panen, memberikan pengorbanan kepada leluhur, dan mengucapkan terima kasih atas kelimpahan. Perayaan ini juga menjadi sarana untuk mempererat hubungan sosial dan kebersamaan komunitas.",
    image: "🌽",
  },
]

export default function KebiasaanPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const photos = [
    { src: "/festival-lembah-baliem-papua.jpg", alt: "Festival Lembah Baliem: pementasan budaya", category: "Festival" },
    { src: "/festival-lembah-baliem.jpg", alt: "Kerumunan dan ritual pada festival budaya", category: "Festival" },
    { src: "/tarian-perang-papua.jpg", alt: "Pertunjukan tarian perang dalam festival", category: "Ritual" },
    { src: "/baliem-valley-landscape.jpg", alt: "Persiapan upacara di hamparan lembah", category: "Ritual" },
    { src: "/noken-tas-papua.jpg", alt: "Persiapan makanan dan barang untuk upacara", category: "Tradisi" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8">
            <span>←</span> Kembali ke Beranda
          </Link>
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              Kebiasaan Adat Unik <span className="text-primary">Jayawijaya</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ketahui tradisi dan ritual sakral yang telah dijalankan turun-temurun dan menjadi inti dari identitas
              budaya masyarakat. Di sini Anda dapat melihat foto-foto proses upacara, persiapan ritual, serta cerita di
              balik setiap kebiasaan adat.
            </p>
            <p className="mt-4 text-base text-muted-foreground max-w-3xl mx-auto">
              Beberapa tradisi memiliki tujuan sosial dan spiritual: mempererat ikatan, memberi penghormatan kepada
              leluhur, dan menjaga keseimbangan alam.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Galeri Ritual & Kebiasaan</h2>
          <p className="text-muted-foreground mb-6">Foto dokumentasi upacara, persiapan ritual, dan momen-momen penting budaya.</p>
          <PhotoGallery photos={photos} />
        </div>

        <div className="space-y-4">
          {customsItems.map((item, index) => (
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
                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
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

        <div className="mt-16 flex justify-between gap-4">
          <Link
            href="/budaya/pekerjaan"
            className="flex-1 px-6 py-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:bg-muted text-center font-semibold"
          >
            ← Pekerjaan Masyarakat
          </Link>
          <Link
            href="/budaya/nilai"
            className="flex-1 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-center font-semibold"
          >
            Nilai Budaya →
          </Link>
        </div>
      </div>
    </section>
  )
}
