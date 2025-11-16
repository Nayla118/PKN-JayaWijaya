"use client"
import { useState } from "react"
import Link from "next/link"
import PhotoGallery from "../../../components/photo-gallery"

const valuesItems = [
  {
    name: "Gotong Royong",
    desc: "Semangat kebersamaan dalam menjalankan tugas bersama untuk kepentingan komunitas, merupakan fondasi dari masyarakat yang kuat.",
    details:
      "Gotong royong adalah praktik tradisional dimana seluruh komunitas bekerja sama untuk mencapai tujuan bersama tanpa mengharapkan imbalan finansial. Hal ini tercermin dalam berbagai kegiatan seperti membangun rumah, membersihkan ladang, atau mempersiapkan acara besar. Semangat gotong royong menciptakan ikatan sosial yang kuat dan menjaga keharmonisan komunitas.",
    image: "🤝",
  },
  {
    name: "Persaudaraan",
    desc: "Ikatan kuat antar anggota masyarakat yang bersatu dalam suka dan duka, menciptakan keluarga besar yang harmonis dan saling mendukung.",
    details:
      "Persaudaraan dalam budaya Jayawijaya bukan hanya berdasarkan ikatan darah, tapi juga ikatan sosial dan spiritual yang kuat. Masyarakat saling membantu dalam kesulitan, merayakan kebahagiaan bersama, dan menjaga keselamatan satu sama lain. Persaudaraan ini menciptakan rasa aman dan nyaman dalam komunitas.",
    image: "❤️",
  },
  {
    name: "Hormat Leluhur",
    desc: "Penghargaan terhadap nenek moyang dan warisan budaya yang telah mereka tinggalkan untuk generasi mendatang.",
    details:
      "Menghormati leluhur adalah bagian integral dari kehidupan spiritualdan budaya masyarakat Jayawijaya. Hal ini diwujudkan melalui berbagai ritual, upacara, dan tradisi yang dilakukan secara teratur. Menghormati leluhur berarti menjaga warisan budaya mereka dan meneruskan nilai-nilai baik yang telah mereka ajarkan.",
    image: "🕯️",
  },
  {
    name: "Kebersamaan",
    desc: "Nilai utama dalam setiap aspek kehidupan masyarakat, menciptakan harmoni dan keseimbangan dalam berbagai situasi dan keputusan.",
    details:
      "Kebersamaan adalah nilai yang mengutamakan kepentingan komunitas di atas kepentingan individu. Dalam setiap keputusan penting, masyarakat mengumpulkan keluarga dan pemimpin untuk berdiskusi bersama. Keputusan diambil melalui musyawarah yang mengutamakan kesepakatan bersama, bukan keinginan individu.",
    image: "🌍",
  },
  {
    name: "Keseimbangan dengan Alam",
    desc: "Filosofi hidup yang menganggap manusia sebagai bagian dari alam, bukan penguasa alam, dalam menjalankan setiap aktivitas.",
    details:
      "Masyarakat Jayawijaya memiliki pemahaman mendalam tentang keseimbangan dengan alam. Mereka tidak mengambil dari alam lebih dari yang mereka butuhkan, dan mereka menjaga keberlanjutan sumber daya alam untuk generasi mendatang. Filosofi ini tercermin dalam praktik pertanian berkelanjutan dan penghormatan terhadap kekuatan alam.",
    image: "🌳",
  },
  {
    name: "Kejujuran dan Integritas",
    desc: "Nilai ketulusan dan integritas dalam setiap interaksi dan keputusan, membangun kepercayaan dan kredibilitas dalam komunitas.",
    details:
      "Kejujuran adalah nilai fundamental yang dijunjung tinggi dalam budaya Jayawijaya. Berbohong atau berkhianat dianggap sebagai tindakan yang sangat serius dan akan menurunkan status sosial seseorang. Integritas dan kejujuran adalah fondasi dari kepercayaan yang dibangun dalam komunitas.",
    image: "⚖️",
  },
]

export default function NilaiPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const photos = [
    { src: "/baliem-valley-landscape.jpg", alt: "Kehidupan komunal dan gotong royong di ladang", category: "Gotong Royong" },
    { src: "/festival-lembah-baliem.jpg", alt: "Ritual penghormatan leluhur dalam festival", category: "Hormat Leluhur" },
    { src: "/tarian-perang-papua.jpg", alt: "Ekspresi persaudaraan melalui pertunjukan bersama", category: "Persaudaraan" },
    { src: "/noken-tas-papua.jpg", alt: "Noken sebagai simbol kebersamaan dan berbagi", category: "Kebersamaan" },
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
              Nilai Budaya <span className="text-primary">Jayawijaya</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Pahami nilai-nilai inti yang menjadi panduan hidup dan membentuk karakter masyarakat Jayawijaya hingga
              saat ini. Nilai-nilai ini tercermin dalam tindakan sehari-hari, upacara, dan hubungan antaranggota komunitas.
            </p>
            <p className="mt-4 text-base text-muted-foreground max-w-3xl mx-auto">
              Di halaman ini Anda akan melihat bagaimana gotong royong, penghormatan leluhur, dan keseimbangan dengan
              alam membentuk tata sosial dan etika komunitas Jayawijaya.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Galeri Nilai & Kehidupan Sosial</h2>
          <p className="text-muted-foreground mb-6">Foto-foto yang menggambarkan nilai-nilai inti masyarakat dan interaksi sosial mereka.</p>
          <PhotoGallery photos={photos} />
        </div>

        <div className="space-y-4">
          {valuesItems.map((item, index) => (
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
            href="/budaya/kebiasaan"
            className="flex-1 px-6 py-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:bg-muted text-center font-semibold"
          >
            ← Kebiasaan Adat Unik
          </Link>
          <Link
            href="/budaya/makanan"
            className="flex-1 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-center font-semibold"
          >
            Makanan Khas →
          </Link>
        </div>
      </div>
    </section>
  )
}
