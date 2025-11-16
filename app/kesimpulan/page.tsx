"use client"
import Link from "next/link"
import { Check, X } from "lucide-react"

const statements = [
  {
    no: 1,
    text: "Harmoni dalam keberagaman sangat penting untuk menciptakan lingkungan kerja yang inklusif dan produktif.",
    isTrue: true,
    reason: "Sesuai dengan nilai budaya Jayawijaya tentang gotong royong dan kebersamaan, harmoni dalam keberagaman menciptakan lingkungan yang menghargai kontribusi setiap individu tanpa memandang latar belakang. Masyarakat Jayawijaya yang terdiri dari berbagai suku dan profesi menunjukkan bahwa inklusivitas meningkatkan produktivitas dan kesejahteraan bersama."
  },
  {
    no: 2,
    text: "Keberagaman pekerjaan tidak berkontribusi pada penciptaan harmoni di lingkungan kerja.",
    isTrue: false,
    reason: "Pernyataan ini SALAH. Keberagaman pekerjaan di Jayawijaya (petani, peternak, pengrajin noken, pedagang, nelayan) justru menciptakan ekosistem ekonomi yang harmonis dan saling mendukung. Setiap profesi memiliki peran penting dalam memenuhi kebutuhan masyarakat, menciptakan interdependensi yang memperkuat harmoni sosial."
  },
  {
    no: 3,
    text: "Menerapkan nilai harmoni dalam keberagaman dapat membantu mengurangi konflik dan meningkatkan produktivitas di lingkungan masyarakat dan lingkungan kerja.",
    isTrue: true,
    reason: "Nilai kebersamaan dan gotong royong di Jayawijaya membuktikan bahwa harmoni mengurangi konflik dan meningkatkan produktivitas. Ketika masyarakat bekerja bersama dalam Festival Lembah Baliem atau proyek komunitas, mereka mengesampingkan perbedaan dan fokus pada tujuan bersama, menghasilkan efisiensi dan hasil yang lebih baik."
  },
  {
    no: 4,
    text: "Menciptakan harmoni dalam keberagaman merupakan tanggung jawab pimpinan di tempat kerja, bukan tanggung jawab karyawan.",
    isTrue: false,
    reason: "Pernyataan ini SALAH. Dalam budaya Jayawijaya, harmoni adalah tanggung jawab bersama seluruh anggota komunitas, bukan hanya pemimpin atau kepala suku. Praktik gotong royong menunjukkan bahwa setiap individu berperan aktif dalam menciptakan dan memelihara harmoni, dari anak-anak hingga tetua adat."
  },
  {
    no: 5,
    text: "Toleransi dan harmoni dalam keberagaman adalah konsep yang sama dan dapat digunakan secara bergantian.",
    isTrue: true,
    reason: "Toleransi dan harmoni saling terkait erat dalam menciptakan kebersamaan dan persaudaraan. Masyarakat Jayawijaya mempraktikkan toleransi terhadap perbedaan adat, bahasa, dan kebiasaan antar suku, yang kemudian menciptakan harmoni sosial. Kedua konsep ini bekerja bersama untuk membangun masyarakat yang damai dan sejahtera."
  },
]

export default function KesimpulanPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-950">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400 hover:gap-3 transition-all mb-8 font-semibold">
            <span>←</span> Kembali ke Beranda
          </Link>
          
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                📝 Harmoni dalam Keberagaman
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black mb-4 bg-gradient-to-r from-emerald-700 via-teal-700 to-green-700 bg-clip-text text-transparent">
              Kesimpulan
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Pernyataan-pernyataan tentang harmoni dalam keberagaman berdasarkan nilai-nilai budaya Jayawijaya yang menjunjung tinggi gotong royong, persaudaraan, dan kebersamaan
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border-2 border-emerald-200 dark:border-emerald-700">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 text-white">
                  <th className="px-6 py-5 text-center font-black text-lg border-r-2 border-white/20 w-20">No</th>
                  <th className="px-6 py-5 text-left font-black text-lg border-r-2 border-white/20">Pernyataan</th>
                  <th className="px-6 py-5 text-center font-black text-lg border-r-2 border-white/20 w-32">Benar</th>
                  <th className="px-6 py-5 text-center font-black text-lg w-32">Salah</th>
                </tr>
              </thead>
              <tbody>
                {statements.map((statement, index) => (
                  <tr 
                    key={statement.no} 
                    className={`border-b-2 border-slate-200 dark:border-slate-700 transition-all hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 ${
                      index % 2 === 0 ? 'bg-slate-50 dark:bg-slate-900/50' : 'bg-white dark:bg-slate-800'
                    }`}
                  >
                    <td className="px-6 py-6 text-center font-bold text-2xl text-emerald-700 dark:text-emerald-400 border-r-2 border-slate-200 dark:border-slate-700">
                      {statement.no}
                    </td>
                    <td className="px-6 py-6 border-r-2 border-slate-200 dark:border-slate-700">
                      <p className="text-base leading-relaxed font-medium text-slate-800 dark:text-slate-200 mb-3">
                        {statement.text}
                      </p>
                      {/* Reason/Explanation */}
                      <div className="mt-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border-l-4 border-blue-500">
                        <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-1 flex items-center gap-2">
                          <span className="text-lg">💡</span> Alasan:
                        </p>
                        <p className="text-sm leading-relaxed text-blue-800 dark:text-blue-200">
                          {statement.reason}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center border-r-2 border-slate-200 dark:border-slate-700">
                      {statement.isTrue ? (
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500 shadow-lg shadow-green-500/50">
                          <Check className="w-7 h-7 text-white" strokeWidth={4} />
                        </div>
                      ) : (
                        <div className="w-12 h-12"></div>
                      )}
                    </td>
                    <td className="px-6 py-6 text-center">
                      {!statement.isTrue ? (
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500 shadow-lg shadow-red-500/50">
                          <X className="w-7 h-7 text-white" strokeWidth={4} />
                        </div>
                      ) : (
                        <div className="w-12 h-12"></div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cultural Context */}
        <div className="mt-12 p-8 bg-gradient-to-br from-amber-100 via-yellow-100 to-amber-50 dark:from-amber-900/30 dark:via-yellow-900/30 dark:to-amber-800/30 rounded-3xl border-2 border-amber-300 dark:border-amber-700 shadow-xl">
          <h3 className="text-2xl font-black mb-4 text-amber-900 dark:text-amber-300 flex items-center gap-3">
            <span className="text-3xl">🏔️</span>
            Refleksi Nilai Budaya Jayawijaya
          </h3>
          <p className="text-base leading-relaxed text-amber-900 dark:text-amber-200 mb-4">
            Pernyataan di atas mencerminkan nilai-nilai budaya masyarakat Jayawijaya yang menjunjung tinggi harmoni dalam keberagaman:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-2xl">🤝</span>
              <div>
                <strong className="text-amber-900 dark:text-amber-300">Gotong Royong:</strong>
                <span className="text-amber-800 dark:text-amber-200"> Bekerja sama tanpa pamrih untuk mencapai tujuan bersama, menciptakan lingkungan yang inklusif dan produktif.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">❤️</span>
              <div>
                <strong className="text-amber-900 dark:text-amber-300">Persaudaraan:</strong>
                <span className="text-amber-800 dark:text-amber-200"> Ikatan kuat dalam suka dan duka yang melampaui perbedaan latar belakang dan pekerjaan.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🌍</span>
              <div>
                <strong className="text-amber-900 dark:text-amber-300">Kebersamaan:</strong>
                <span className="text-amber-800 dark:text-amber-200"> Mengutamakan kepentingan komunitas di atas individu, setiap orang memiliki tanggung jawab menciptakan harmoni.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <strong className="text-amber-900 dark:text-amber-300">Toleransi dan Harmoni:</strong>
                <span className="text-amber-800 dark:text-amber-200"> Saling menghormati perbedaan dan bekerja bersama untuk mengurangi konflik serta meningkatkan produktivitas.</span>
              </div>
            </li>
          </ul>
          <div className="mt-6 p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl border border-amber-300 dark:border-amber-600">
            <p className="text-sm font-semibold text-amber-900 dark:text-amber-200 text-center">
              💡 Keberagaman pekerjaan di Jayawijaya (petani, peternak, pengrajin, pedagang, nelayan) justru menciptakan ekosistem ekonomi yang harmonis dan saling mendukung — bukan mengurangi harmoni.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
          <Link
            href="/budaya/nilai"
            className="flex-1 px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-emerald-300 dark:border-emerald-700 hover:border-emerald-500 transition-all hover:shadow-xl text-center font-bold text-emerald-700 dark:text-emerald-400 hover:scale-105 transform"
          >
            ← Pelajari Nilai Budaya
          </Link>
          <Link
            href="/budaya"
            className="flex-1 px-6 py-4 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white hover:shadow-2xl hover:shadow-emerald-500/50 transition-all text-center font-bold hover:scale-105 transform"
          >
            Jelajahi Budaya →
          </Link>
          <Link
            href="/galeri"
            className="flex-1 px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-600 to-yellow-600 text-white hover:shadow-2xl hover:shadow-amber-500/50 transition-all text-center font-bold hover:scale-105 transform"
          >
            Lihat Galeri Foto →
          </Link>
        </div>
      </div>
    </section>
  )
}
