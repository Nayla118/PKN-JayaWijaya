export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform">
                <span className="text-white font-black text-2xl">JW</span>
              </div>
              <div>
                <h3 className="text-2xl font-black">Jayawijaya</h3>
                <p className="text-amber-300 text-sm font-bold">Papua Pegunungan</p>
              </div>
            </div>
            <p className="text-base text-white/90 leading-relaxed font-medium mb-4">
              �️ Menjaga warisan budaya Papua untuk generasi mendatang
            </p>
            <div className="flex gap-2">
              <span className="text-3xl">🏔️</span>
              <span className="text-3xl">🎭</span>
              <span className="text-3xl">�</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black mb-6 text-amber-300 text-xl flex items-center gap-2">
              <span>🔗</span> Navigasi Cepat
            </h4>
            <ul className="space-y-3 text-base">
              <li>
                <a href="/" className="text-white/90 hover:text-amber-300 transition-all flex items-center gap-3 group font-semibold hover:translate-x-2 transform duration-200">
                  <span className="text-xl">🏠</span> Beranda
                </a>
              </li>
              <li>
                <a href="/budaya" className="text-white/90 hover:text-amber-300 transition-all flex items-center gap-3 group font-semibold hover:translate-x-2 transform duration-200">
                  <span className="text-xl">🎭</span> Budaya
                </a>
              </li>
              <li>
                <a href="/keunikan" className="text-white/90 hover:text-amber-300 transition-all flex items-center gap-3 group font-semibold hover:translate-x-2 transform duration-200">
                  <span className="text-xl">⭐</span> Keunikan
                </a>
              </li>
              <li>
                <a href="/galeri" className="text-white/90 hover:text-amber-300 transition-all flex items-center gap-3 group font-semibold hover:translate-x-2 transform duration-200">
                  <span className="text-xl">📸</span> Galeri
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-black mb-6 text-amber-300 text-xl flex items-center gap-2">
              <span>📍</span> Informasi
            </h4>
            <ul className="space-y-4 text-base">
              <li className="flex items-start gap-3">
                <span className="text-2xl">🏛️</span>
                <div>
                  <p className="text-white/90 font-semibold">Wamena, Papua</p>
                  <p className="text-white/70 text-sm">Kabupaten Jayawijaya</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-white/90 font-semibold hover:text-amber-300 transition-colors">
                <span className="text-2xl">📞</span> +62 969 XXXX
              </li>
              <li className="flex items-center gap-3 text-white/90 font-semibold hover:text-amber-300 transition-colors">
                <span className="text-2xl">✉️</span> info@jayawijaya.gov.id
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-black mb-6 text-amber-300 text-xl flex items-center gap-2">
              <span>🌐</span> Ikuti Kami
            </h4>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { icon: "📘", label: "Facebook", color: "from-blue-500 to-blue-600" },
                { icon: "📸", label: "Instagram", color: "from-pink-500 to-purple-600" },
                { icon: "🐦", label: "Twitter", color: "from-cyan-400 to-blue-500" },
                { icon: "📺", label: "YouTube", color: "from-red-500 to-red-600" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`flex flex-col items-center justify-center p-4 bg-gradient-to-br ${social.color} rounded-2xl hover:scale-110 transform transition-all duration-300 shadow-xl hover:shadow-2xl`}
                >
                  <span className="text-3xl mb-1">{social.icon}</span>
                  <span className="text-xs font-bold">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider with decorative line */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-white/20"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-2 rounded-full text-sm font-black">
              🏔️ Jayawijaya 🏔️
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-base text-white/90 font-semibold">
            © 2025 Kabupaten Jayawijaya. Semua hak cipta dilindungi undang-undang.
          </p>
          <div className="flex gap-6 text-base text-white/90 font-semibold">
            <a href="#" className="hover:text-amber-300 transition-colors flex items-center gap-1">
              <span>🔒</span> Privasi
            </a>
            <span className="text-white/50">•</span>
            <a href="#" className="hover:text-amber-300 transition-colors flex items-center gap-1">
              <span>📜</span> Syarat
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
