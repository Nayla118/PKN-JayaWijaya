"use client"
import { useState } from "react"
import Link from "next/link"
import PhotoGallery from "../../../components/photo-gallery"

const fashionItems = [
  {
    name: "Koteka (Pria)",
    desc: "Pakaian tradisional pria yang melambangkan kesatuan dengan alam dan identitas suku Dani, merupakan warisan budaya yang sangat berharga.",
    details:
      "Koteka adalah sarung tradisional terbuat dari biji-bijian yang dikering dan diikat dengan tali rotan. Bentuk dan warna koteka menunjukkan status sosial, usia, dan afiliasi suku pemakainya. Setiap ketika memakai koteka adalah bentuk penghormatan terhadap tradisi leluhur.",
    image: "👔",
  },
  {
    name: "Rok Rumbai (Wanita)",
    desc: "Rok tradisional dengan rumbai kain yang penuh makna budaya, menceritakan status sosial dan keindahan wanita Papua dalam setiap gerakan.",
    details:
      "Rok rumbai terbuat dari kulit pohon atau serat tanaman yang dianyam menjadi benang, kemudian dijahit membentuk rok panjang dengan rumbai di bagian bawah. Panjang rumbai menunjukkan status perempuan, semakin panjang semakin tinggi statusnya dalam masyarakat.",
    image: "👗",
  },
  {
    name: "Noken",
    desc: "Tas tenunan tradisional yang indah dan fungsional, digunakan untuk membawa barang berharga dalam aktivitas sehari-hari dan upacara adat.",
    details:
      "Noken dibuat dengan teknik tenunan kuno menggunakan benang dari kulit pohon atau serat tanaman. Setiap noken memiliki motif unik yang berbeda-beda, mencerminkan keahlian dan kreativitas pengrajinnya. Noken bukan hanya tas, tapi juga simbol budaya yang diakui oleh UNESCO.",
    image: "👜",
  },
  {
    name: "Perhiasan Adat",
    desc: "Aksesoris indah dari manik-manik dan tulang yang kaya filosofi, melengkapi penampilan dan menceritakan kisah budaya setiap pemakainya.",
    details:
      "Perhiasan adat dibuat dari manik-manik berbagai warna, tulang, gigi, dan biji-bijian yang dirangkai dengan tali. Setiap jenis perhiasan memiliki makna khusus: gelang menunjukkan kemakmuran, kalung menunjukkan keberanian, dan mahkota menunjukkan kepemimpinan.",
    image: "💎",
  },
  {
    name: "Tutup Kepala Tradisional",
    desc: "Mahkota atau tutup kepala yang dirancang dengan detail rumit, melambangkan derajat dan kepemimpinan dalam struktur sosial masyarakat.",
    details:
      "Tutup kepala tradisional biasanya dibuat dari kulit burung cendrawasih, bulu, dan manik-manik. Desainnya yang spektakuler dan penuh warna membuat pemakainya terlihat perkasa dan dihormati dalam komunitas.",
    image: "👑",
  },
  {
    name: "Gelang dan Kaki Perhiasan",
    desc: "Perhiasan tangan dan kaki yang elegan, menunjukkan kekayaan dan status sosial dari pemakai dalam kehidupan masyarakat tradisional.",
    details:
      "Gelang dibuat dengan cara merangkai manik-manik, tulang, atau biji-bijian dalam berbagai pola dan kombinasi warna. Gelang kaki biasanya lebih tebal dan dipakai sebagai simbol kedewasaan dan kesuksesan dalam kehidupan.",
    image: "💍",
  },
]

export default function PakaianPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const photos = [
    { src: "/koteka-pakaian-adat-dani.jpg", alt: "Koteka tradisional pria Dani", category: "Pakaian" },
    { src: "/koteka-pakaian-adat.jpg", alt: "Koteka variasi bentuk dan gaya", category: "Pakaian" },
    { src: "/noken-tas-papua.jpg", alt: "Noken anyaman khas Papua", category: "Kerajinan" },
    { src: "/festival-lembah-baliem.jpg", alt: "Pakaian adat saat festival Lembah Baliem", category: "Upacara" },
    { src: "/tarian-perang-papua.jpg", alt: "Peragaan pakaian lengkap pada tarian perang", category: "Pertunjukan" },
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
              Pakaian Adat <span className="text-primary">Jayawijaya</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Temukan keindahan dan makna mendalam di balik setiap pakaian dan aksesoris tradisional masyarakat
              Papua. Halaman ini menampilkan foto-foto bahan, proses pembuatan, dan konteks sosial pemakaian pakaian adat.
            </p>
            <p className="mt-4 text-base text-muted-foreground max-w-3xl mx-auto">
              Dari koteka yang melambangkan status sosial hingga noken yang fungsional dan estetik — pelajari cerita di
              balik setiap busana.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Galeri Pakaian & Kerajinan</h2>
          <p className="text-muted-foreground mb-6">Koleksi foto proses pembuatan, ragam motif, dan pemakaian dalam upacara.</p>
          <PhotoGallery photos={photos} />
        </div>

        <div className="space-y-4">
          {fashionItems.map((item, index) => (
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
            href="/budaya/makanan"
            className="flex-1 px-6 py-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:bg-muted text-center font-semibold"
          >
            ← Makanan Khas
          </Link>
          <Link
            href="/budaya/kesenian"
            className="flex-1 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-center font-semibold"
          >
            Kesenian Daerah →
          </Link>
        </div>
      </div>
    </section>
  )
}
