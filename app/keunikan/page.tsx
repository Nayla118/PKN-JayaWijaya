"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"
import ThemeToggle from "@/components/theme-toggle"

const uniquenessData = [
  {
    id: "makanan",
    title: "Keunikan Kuliner Tradisional",
    icon: "🍜",
    color: "from-amber-500 to-orange-600",
    summary: "Makanan khas Jayawijaya mencerminkan kearifan lokal dalam memanfaatkan sumber daya alam pegunungan dengan cara yang berkelanjutan.",
    uniqueness: [
      "🌾 **Papeda** - Makanan pokok dari sagu yang unik di Indonesia Timur dengan tekstur lengket khas",
      "🐟 **Ikan Kuah Kuning** - Perpaduan sempurna rempah pegunungan Papua yang kaya kunyit dan jahe",
      "🥔 **Keladi & Ubi Ungu** - Pemanfaatan umbi-umbian lokal sebagai sumber karbohidrat yang bergizi tinggi",
      "📦 **Noken Isi** - Inovasi pengemasan makanan tradisional yang praktis untuk perjalanan",
      "🌿 **Sayur Paku** - Pemanfaatan tumbuhan liar pegunungan sebagai sayuran sehat",
    ],
    conclusion: "Kuliner Jayawijaya menunjukkan adaptasi luar biasa masyarakat pegunungan dalam mengolah bahan lokal menjadi hidangan bergizi. Penggunaan rempah tradisional dan teknik memasak yang diwariskan turun-temurun menciptakan cita rasa autentik yang tidak ditemukan di daerah lain.",
    image: "/papeda-makanan-papua.jpg"
  },
  {
    id: "pakaian",
    title: "Keunikan Pakaian Adat",
    icon: "👔",
    color: "from-emerald-600 to-teal-600",
    summary: "Pakaian adat Jayawijaya bukan sekadar busana, tetapi simbol identitas, status sosial, dan filosofi hidup masyarakat Suku Dani.",
    uniqueness: [
      "👔 **Koteka** - Pakaian pria yang sangat unik, melambangkan kesatuan dengan alam dan kedewasaan",
      "👗 **Rok Rumbai** - Setiap panjang rumbai menceritakan status sosial wanita dalam masyarakat",
      "👜 **Noken** - Tas tradisional yang diakui UNESCO sebagai Warisan Budaya Takbenda Manusia (2012)",
      "💎 **Perhiasan dari Manik & Tulang** - Setiap perhiasan memiliki makna spiritual dan status khusus",
      "👑 **Tutup Kepala dari Bulu Cendrawasih** - Simbol kepemimpinan dan kebangsawanan yang spektakuler",
    ],
    conclusion: "Pakaian adat Jayawijaya adalah karya seni yang hidup, menunjukkan filosofi kehidupan yang harmonis dengan alam. Penggunaan bahan alami dan teknik pembuatan tradisional membuktikan kearifan ekologi yang telah dipraktikkan berabad-abad.",
    image: "/koteka-pakaian-adat-dani.jpg"
  },
  {
    id: "kesenian",
    title: "Keunikan Seni & Budaya",
    icon: "🎭",
    color: "from-green-600 to-emerald-600",
    summary: "Kesenian Jayawijaya menampilkan ekspresi budaya yang kuat melalui tarian, musik, dan seni rupa yang penuh makna.",
    uniqueness: [
      "💃 **Tarian Perang** - Kombinasi atletik dan seni yang menceritakan keberanian leluhur",
      "🥁 **Tifa** - Alat musik tradisional dengan suara dalam yang menjadi jantung musik Papua",
      "🪵 **Ukiran Kayu Wamena** - Motif leluhur dan alam dengan detail rumit yang sarat makna spiritual",
      "🎨 **Lukisan dengan Warna Alami** - Penggunaan tanah, tumbuhan, dan mineral lokal sebagai pigmen",
      "🎺 **Orkestra Alat Musik Tradisional** - Seruling bambu, alat pukul batu yang menciptakan harmoni alam",
    ],
    conclusion: "Kesenian Jayawijaya adalah media penyampaian sejarah, nilai, dan spiritualitas masyarakat. Setiap gerakan tarian, setiap pukulan tifa, dan setiap goresan ukiran menceritakan kisah yang telah diwariskan ribuan tahun.",
    image: "/tarian-perang-papua-wamena.jpg"
  },
  {
    id: "pekerjaan",
    title: "Keberagaman Pekerjaan Masyarakat",
    icon: "⚒️",
    color: "from-yellow-600 to-amber-600",
    summary: "Sistem ekonomi tradisional Jayawijaya menunjukkan keseimbangan antara pemenuhan kebutuhan dan pelestarian alam.",
    uniqueness: [
      "🌾 **Pertanian Berkelanjutan** - Sistem rotasi tanaman dan konservasi lahan yang terbukti ramah lingkungan",
      "🐷 **Peternakan Babi Tradisional** - Babi memiliki nilai sosial tinggi dalam upacara adat dan ekonomi",
      "👜 **Pengrajin Noken** - Keahlian menenun yang diwariskan generasi, menghasilkan karya seni unik",
      "🛒 **Pasar Tradisional** - Pusat ekonomi yang menjaga kelestarian produk lokal dan interaksi sosial",
      "🎣 **Nelayan Sungai & Danau** - Pengetahuan mendalam tentang ekosistem perairan pegunungan",
      "🪨 **Pengrajin Seni Kayu** - Pelestarian teknik ukir tradisional yang bernilai seni tinggi",
    ],
    conclusion: "Keberagaman pekerjaan di Jayawijaya menunjukkan adaptasi luar biasa dengan lingkungan pegunungan. Setiap profesi tidak hanya untuk mencari nafkah, tetapi juga menjaga tradisi dan ekologi lokal.",
    image: "/baliem-valley-wamena-papua-landscape.jpg"
  },
  {
    id: "kebiasaan",
    title: "Kebiasaan & Adat Istiadat Unik",
    icon: "🔥",
    color: "from-teal-600 to-cyan-600",
    summary: "Ritual dan upacara adat Jayawijaya mencerminkan hubungan mendalam masyarakat dengan leluhur, alam, dan komunitas.",
    uniqueness: [
      "🎉 **Festival Lembah Baliem** - Event budaya internasional yang mempertunjukkan kekayaan budaya Papua",
      "🔥 **Upacara Bakar Batu** - Ritual sakral memasak dengan batu panas untuk komunikasi dengan leluhur",
      "🙏 **Tradisi Potong Jari** - Pengorbanan ekstrem sebagai ungkapan kedukaan yang mendalam (kini mulai ditinggalkan)",
      "⚔️ **Pertarungan Suku** - Kompetisi tradisional dengan aturan khusus untuk menyelesaikan konflik",
      "💒 **Upacara Pernikahan Kompleks** - Proses panjang yang melibatkan negosiasi keluarga dan mas kawin tradisional",
      "🌽 **Perayaan Panen Raya** - Syukuran bersama komunitas atas kelimpahan hasil bumi",
    ],
    conclusion: "Adat istiadat Jayawijaya menunjukkan sistem sosial yang kompleks dan terorganisir dengan baik. Setiap ritual memiliki fungsi sosial yang penting: memperkuat ikatan komunitas, menyelesaikan konflik, dan menjaga hubungan spiritual dengan leluhur.",
    image: "/festival-lembah-baliem-papua.jpg"
  },
  {
    id: "nilai",
    title: "Nilai-Nilai Luhur Budaya",
    icon: "❤️",
    color: "from-orange-600 to-amber-600",
    summary: "Nilai budaya Jayawijaya membentuk karakter masyarakat yang solid, harmonis, dan memiliki kearifan ekologi tinggi.",
    uniqueness: [
      "🤝 **Gotong Royong** - Semangat kebersamaan tanpa pamrih yang menjadi fondasi masyarakat kuat",
      "❤️ **Persaudaraan Universal** - Ikatan sosial yang melampaui hubungan darah",
      "🕯️ **Penghormatan Leluhur** - Warisan budaya dijaga dan nilai-nilai baik diteruskan",
      "🌍 **Keputusan Musyawarah** - Kepentingan komunitas di atas kepentingan individu",
      "🌳 **Keseimbangan dengan Alam** - Filosofi hidup sebagai bagian dari alam, bukan penguasa",
      "⚖️ **Kejujuran & Integritas** - Fondasi kepercayaan yang membangun kredibilitas sosial",
    ],
    conclusion: "Sistem nilai Jayawijaya adalah blueprint kehidupan berkelanjutan yang relevan di era modern. Prinsip gotong royong, keseimbangan dengan alam, dan musyawarah untuk mufakat adalah kearifan lokal yang dapat menginspirasi dunia.",
    image: "/baliem-valley-landscape.jpg"
  },
]

export default function KeunikanPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredData = uniquenessData.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.summary.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
      <ScrollProgress />
      <Navigation />
      <ThemeToggle />

      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-amber-300 hover:gap-3 transition-all mb-8 text-lg font-semibold">
            <span>←</span> Kembali ke Beranda
          </Link>

          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full text-base font-black shadow-2xl">
                ✨ KESIMPULAN & ANALISIS ✨
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black mb-6 leading-tight">
              <span className="inline-block bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                Keunikan Budaya
              </span>
              <br />
              <span className="text-white">Jayawijaya</span>
            </h1>

            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              Analisis mendalam tentang keunikan dan keistimewaan dari setiap aspek budaya masyarakat Suku Dani di Lembah Baliem
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="🔍 Cari keunikan budaya..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-4 focus:ring-amber-400 focus:border-amber-400 transition-all text-lg font-medium"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredData.map((item, index) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-emerald-400 transform hover:-translate-y-2"
              >
                {/* Image Header */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-60 group-hover:opacity-40 transition-opacity`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-7xl mb-3">{item.icon}</div>
                      <h3 className="text-3xl font-black drop-shadow-lg">{item.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Summary */}
                  <div className="mb-6">
                    <div className="inline-block bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 rounded-full mb-4">
                      <span className="text-emerald-800 font-bold text-sm">📊 RINGKASAN</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed font-medium text-lg">
                      {item.summary}
                    </p>
                  </div>

                  {/* Uniqueness Points */}
                  <div className="mb-6">
                    <div className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full mb-4">
                      <span className="text-amber-800 font-bold text-sm">⭐ KEUNIKAN</span>
                    </div>
                    <ul className="space-y-3">
                      {item.uniqueness.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                          <span className="text-emerald-600 font-bold mt-1">•</span>
                          <span className="flex-1" dangerouslySetInnerHTML={{ __html: point }} />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Conclusion */}
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-emerald-200">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">💡</span>
                      <h4 className="text-xl font-black text-emerald-900">Kesimpulan</h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {item.conclusion}
                    </p>
                  </div>

                  {/* Learn More Button */}
                  <Link
                    href={`/budaya/${item.id}`}
                    className={`mt-6 w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r ${item.color} text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all group/btn`}
                  >
                    <span>Pelajari Lebih Detail</span>
                    <svg className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Overall Conclusion */}
          <div className="mt-16 bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 text-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🏔️</div>
                <h2 className="text-4xl sm:text-5xl font-black mb-4">
                  Kesimpulan Umum Budaya Jayawijaya
                </h2>
              </div>

              <div className="max-w-5xl mx-auto space-y-6 text-lg leading-relaxed">
                <p className="text-white/95 font-medium">
                  <strong className="text-amber-300">Budaya Jayawijaya</strong> adalah perpaduan harmonis antara <strong>kearifan ekologi</strong>, <strong>solidaritas sosial yang kuat</strong>, dan <strong>spiritualitas yang mendalam</strong>. Masyarakat Suku Dani telah mengembangkan sistem kehidupan yang berkelanjutan selama ribuan tahun, membuktikan bahwa manusia dapat hidup sejahtera tanpa merusak alam.
                </p>

                <p className="text-white/95 font-medium">
                  Setiap aspek budaya—dari kuliner, pakaian, seni, pekerjaan, hingga sistem nilai—saling terkait dan membentuk <strong className="text-amber-300">ekosistem budaya yang utuh</strong>. Papeda dan ikan kuah kuning bukan sekadar makanan, tetapi representasi adaptasi dengan lingkungan pegunungan. Koteka dan noken bukan sekadar pakaian, tetapi simbol identitas dan filosofi hidup. Tifa dan tarian perang bukan sekadar hiburan, tetapi media penyampai sejarah dan nilai-nilai leluhur.
                </p>

                <p className="text-white/95 font-medium">
                  Yang paling istimewa adalah <strong className="text-amber-300">sistem nilai gotong royong</strong>, <strong>keseimbangan dengan alam</strong>, dan <strong>musyawarah mufakat</strong> yang masih dijaga hingga kini. Di tengah modernisasi global, masyarakat Jayawijaya membuktikan bahwa tradisi dan kemajuan dapat berjalan beriringan.
                </p>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mt-8 border-2 border-amber-400/50">
                  <div className="text-center">
                    <p className="text-2xl font-black text-amber-300 mb-2">
                      "Lembah Baliem adalah museum hidup kearifan nusantara"
                    </p>
                    <p className="text-white/80 text-lg">
                      Sebuah warisan yang wajib kita jaga untuk generasi mendatang
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-black mb-6 text-gray-900">
            Jelajahi Lebih Lanjut
          </h3>
          <p className="text-xl text-gray-600 mb-8 font-medium">
            Lihat galeri foto dan video dokumentasi budaya Jayawijaya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/galeri"
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 group"
            >
              <span>📸</span>
              <span>Galeri Foto</span>
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/budaya"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 group"
            >
              <span>🎭</span>
              <span>Jelajahi Budaya</span>
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
