"use client"
import { useState } from "react"
import Link from "next/link"
import PhotoGallery from "../../../components/photo-gallery"

const workItems = [
  {
    name: "Bertani Ubi",
    desc: "Pertanian lahan yang berkelanjutan dan organik, menjadi sumber kehidupan utama masyarakat Jayawijaya selama berabad-abad.",
    details:
      "Pertanian ubi di Jayawijaya menggunakan metode tradisional yang telah terbukti berkelanjutan. Lahan pertanian dikelola dengan sistem rotasi tanam dan konservasi alam yang baik. Ubi yang dihasilkan menjadi makanan pokok dan juga dijual di pasar tradisional untuk pendapatan keluarga.",
    image: "🌾",
  },
  {
    name: "Peternak Babi",
    desc: "Peternakan tradisional untuk kebutuhan upacara adat dan konsumsi sehari-hari, babi memiliki nilai sosial yang tinggi dalam budaya.",
    details:
      "Peternakan babi tradisional dilakukan dengan membiarkan babi berkeliaran di sekitar rumah sambil memberikan makanan tambahan. Babi ini sangat penting dalam upacara adat, pernikahan, dan perayaan penting lainnya. Setiap keluarga biasanya memiliki beberapa ekor babi sebagai simbol kekayaan.",
    image: "🐷",
  },
  {
    name: "Pengrajin Noken",
    desc: "Pengrajin tas tradisional dengan teknik ikat yang rumit, menciptakan produk unik yang diakui secara internasional.",
    details:
      "Pengrajin noken memiliki keahlian khusus yang diwariskan dari generasi ke generasi. Proses pembuatan noken sangat rumit, dimulai dari mengumpulkan bahan, memroses serat, hingga menenun dengan pola-pola kompleks. Setiap noken yang dihasilkan adalah karya seni unik yang membutuhkan waktu berminggu-minggu untuk diselesaikan.",
    image: "👜",
  },
  {
    name: "Pedagang Tradisional",
    desc: "Perdagangan produk lokal di pasar tradisional, menjadi tulang punggung ekonomi lokal dan menjaga kelestarian produk tradisional.",
    details:
      "Pedagang tradisional menjual berbagai produk lokal seperti hasil pertanian, kerajinan tangan, dan produk tradisional lainnya di pasar. Mereka tidak hanya berfungsi sebagai penjual, tapi juga sebagai penjaga tradisi dan budaya, memastikan produk tradisional tetap dihargai dan berkembang.",
    image: "🛒",
  },
  {
    name: "Nelayan Tradisional",
    desc: "Penangkapan ikan dengan cara tradisional di sungai dan danau, menyediakan protein tinggi untuk kebutuhan masyarakat lokal.",
    details:
      "Nelayan tradisional menggunakan peralatan sederhana seperti pancing, jala, dan perangkap tradisional untuk menangkap ikan. Mereka memiliki pengetahuan mendalam tentang perilaku ikan dan musim penangkapan yang baik, hasil tangkapan mereka menjadi bahan utama dalam masakan tradisional.",
    image: "🎣",
  },
  {
    name: "Pengrajin Seni Kayu",
    desc: "Pengrajin yang membuat karya seni dari kayu dengan motif tradisional yang indah dan penuh makna budaya yang dalam.",
    details:
      "Pengrajin seni kayu memiliki keahlian khusus dalam mengukir kayu menjadi berbagai bentuk dan motif yang indah. Mereka menggunakan peralatan tradisional dan memiliki pemahaman mendalam tentang desain tradisional. Karya mereka sering menjadi souvenir dan dihargai oleh kolektor seni.",
    image: "🪨",
  },
]

export default function PekerjaanPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const photos = [
    { src: "/baliem-valley-wamena-papua-landscape.jpg", alt: "Ladang dan terasering pertanian tradisional", category: "Pertanian" },
    { src: "/tifa-alat-musik-tradisional.jpg", alt: "Pasar lokal dan aktivitas perdagangan", category: "Ekonomi" },
    { src: "/noken-tas-papua.jpg", alt: "Pengrajin noken sedang menenun", category: "Kerajinan" },
    { src: "/tifa-alat-musik.jpg", alt: "Nelayan dan metode penangkapan tradisional", category: "Perikanan" },
    { src: "/festival-lembah-baliem.jpg", alt: "Pertukaran barang dan ritual ekonomi saat festival", category: "Upacara" },
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
              Pekerjaan Masyarakat <span className="text-primary">Jayawijaya</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Pelajari kehidupan sehari-hari masyarakat Jayawijaya melalui berbagai profesi tradisional yang tetap
              terjaga hingga saat ini. Halaman ini menjelaskan praktik bertani, beternak, menjala ikan, dan kerajinan
              tangan yang menopang ekonomi lokal.
            </p>
            <p className="mt-4 text-base text-muted-foreground max-w-3xl mx-auto">
              Kami menyoroti metode berkelanjutan yang digunakan komunitas untuk menjaga alam sambil memenuhi kebutuhan
              hidup mereka.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Galeri Pekerjaan & Kehidupan</h2>
          <p className="text-muted-foreground mb-6">Dokumentasi aktivitas sehari-hari, pasar, dan proses kerajinan tradisional.</p>
          <PhotoGallery photos={photos} />
        </div>

        <div className="space-y-4">
          {workItems.map((item, index) => (
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
            href="/budaya/kesenian"
            className="flex-1 px-6 py-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:bg-muted text-center font-semibold"
          >
            ← Kesenian Daerah
          </Link>
          <Link
            href="/budaya/kebiasaan"
            className="flex-1 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-center font-semibold"
          >
            Kebiasaan Adat Unik →
          </Link>
        </div>
      </div>
    </section>
  )
}
