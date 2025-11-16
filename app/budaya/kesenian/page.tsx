"use client"
import { useState } from "react"
import Link from "next/link"
import PhotoGallery from "../../../components/photo-gallery"

const artsItems = [
  {
    name: "Tarian Perang",
    desc: "Tarian penuh semangat yang menceritakan keberanian leluhur, menampilkan gerakan atletik dan formasi yang memukau di setiap pementasan.",
    details:
      "Tarian perang adalah tradisi kuno yang menceritakan kisah pertempuran antar suku. Penari mengenakan pakaian tradisional lengkap sambil melakukan gerakan yang dinamis dan penuh tenaga. Musik tradisional dari tifa mengiringi setiap langkah, menciptakan harmoni yang sempurna antara gerakan dan suara.",
    image: "💃",
  },
  {
    name: "Tifa",
    desc: "Alat musik tradisional dari kayu dan kulit yang bergema dengan suara dalam, menjadi jantung dari musik tradisional Papua.",
    details:
      "Tifa dibuat dari kayu pohon yang dilubangi dan ditutup dengan kulit hewan yang dikeringkan. Cara memainkannya adalah dengan dipukul menggunakan tangan atau pemukul khusus. Suara tifa yang dalam dan kaya menciptakan ritme yang menggugah semangat dan keberanian.",
    image: "🥁",
  },
  {
    name: "Ukiran Kayu",
    desc: "Seni ukir Wamena dengan motif leluhur dan alam yang indah, setiap ukiran menceritakan cerita budaya yang mendalam.",
    details:
      "Ukiran kayu Papuan adalah bentuk seni yang sangat kompleks, menggunakan motif tradisional yang menggambarkan nenek moyang, binatang, dan alam. Setiap ukiran membutuhkan keahlian khusus dan waktu bertahun-tahun untuk dikuasai. Motif-motif ini memiliki makna spiritual dan budaya yang sangat dalam.",
    image: "🪵",
  },
  {
    name: "Lukisan Tradisional",
    desc: "Karya seni yang menggambarkan cerita budaya Dani dengan warna-warna cerah dan simbol-simbol bermakna yang kaya.",
    details:
      "Lukisan tradisional Dani menggunakan bahan alami dan warna dari tanah, tumbuhan, dan mineral lokal. Setiap lukisan menceritakan kisah mitos, legenda, dan kehidupan sehari-hari masyarakat. Lukisan ini bukan hanya karya seni, tapi juga media untuk melestarikan budaya dan sejarah.",
    image: "🎨",
  },
  {
    name: "Alat Musik Tradisional Lainnya",
    desc: "Berbagai alat musik tradisional yang menciptakan orkestra alam dengan suara yang khas dan penuh kedalaman budaya.",
    details:
      "Selain tifa, terdapat berbagai alat musik tradisional lain seperti seruling dari bambu, alat pukul dari batu, dan alat musik dawai tradisional. Setiap alat memiliki suara unik yang bercerita tentang alam Papua dan kehidupan masyarakat yang harmonis.",
    image: "🎺",
  },
  {
    name: "Tari-Tarian Tradisional Lainnya",
    desc: "Koleksi tari-tarian lain yang menampilkan cerita berbeda, dari perayaan hingga ritual upacara yang sakral dan bermakna.",
    details:
      "Selain tarian perang, terdapat tari sambil menari yang menceritakan kisah cinta, tarian panen yang merayakan hasil bumi, dan tarian ritual yang digunakan dalam upacara penting. Setiap tarian memiliki gerakan khas dan makna budaya yang unik.",
    image: "🎭",
  },
]

export default function KesenianPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const photos = [
    { src: "/tarian-perang-papua-wamena.jpg", alt: "Tarian perang Wamena", category: "Tarian" },
    { src: "/tarian-perang-papua.jpg", alt: "Pertunjukan tarian perang tradisional", category: "Tarian" },
    { src: "/tifa-alat-musik-tradisional.jpg", alt: "Tifa, alat musik tradisional", category: "Musik" },
    { src: "/tifa-alat-musik.jpg", alt: "Musisi bermain tifa pada acara adat", category: "Musik" },
    { src: "/tifa-alat-musik-tradisional.jpg", alt: "Pembuatan dan bentuk tifa", category: "Kerajinan" },
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
              Kesenian Daerah <span className="text-primary">Jayawijaya</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Rasakan harmoni dan keindahan seni tradisional yang telah diwariskan melalui generasi-generasi di Lembah
              Baliem. Di sini kami menampilkan dokumentasi tarian, alat musik, dan teknik ukir yang menjadi inti
              ekspresi budaya Jayawijaya.
            </p>
            <p className="mt-4 text-base text-muted-foreground max-w-3xl mx-auto">
              Perhatikan irama tifa, pola ukiran, dan kostum pertunjukan — semuanya memiliki makna simbolis yang kuat.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Galeri Kesenian</h2>
          <p className="text-muted-foreground mb-6">Foto-foto tarian, alat musik, dan karya seni yang mendokumentasikan tradisi.</p>
          <PhotoGallery photos={photos} />
        </div>

        <div className="space-y-4">
          {artsItems.map((item, index) => (
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
            href="/budaya/pakaian"
            className="flex-1 px-6 py-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:bg-muted text-center font-semibold"
          >
            ← Pakaian Adat
          </Link>
          <Link
            href="/budaya/pekerjaan"
            className="flex-1 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-center font-semibold"
          >
            Pekerjaan Masyarakat →
          </Link>
        </div>
      </div>
    </section>
  )
}
