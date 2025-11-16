"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DynamicLogo() {
  const pathname = usePathname()

  // Determine logo based on current page with definitions
  const getLogoConfig = () => {
    if (pathname === '/') {
      return {
        image: '/baliem-valley-landscape.jpg',
        icon: '🏔️',
        title: 'Jayawijaya',
        subtitle: 'Kabupaten dengan kekayaan budaya suku Dani di Lembah Baliem'
      }
    } else if (pathname.includes('/budaya/makanan')) {
      return {
        image: '/papeda-makanan-papua.jpg',
        icon: '🍲',
        title: 'Makanan Khas',
        subtitle: 'Kuliner tradisional seperti papeda dan ikan kuah kuning yang kaya gizi'
      }
    } else if (pathname.includes('/budaya/pakaian')) {
      return {
        image: '/koteka-pakaian-adat-dani.jpg',
        icon: '👔',
        title: 'Pakaian Adat',
        subtitle: 'Busana tradisional suku Dani seperti koteka dan noken'
      }
    } else if (pathname.includes('/budaya/kesenian')) {
      return {
        image: '/tarian-perang-papua-wamena.jpg',
        icon: '🎵',
        title: 'Kesenian',
        subtitle: 'Seni tarian perang, musik tifa, dan ukiran tradisional Papua'
      }
    } else if (pathname.includes('/budaya/pekerjaan')) {
      return {
        image: '/baliem-valley-wamena-papua-landscape.jpg',
        icon: '💼',
        title: 'Pekerjaan',
        subtitle: 'Mata pencaharian bertani, berburu, dan kerajinan tangan tradisional'
      }
    } else if (pathname.includes('/budaya/kebiasaan')) {
      return {
        image: '/festival-lembah-baliem-papua.jpg',
        icon: '🔥',
        title: 'Kebiasaan Adat',
        subtitle: 'Tradisi bakar batu, ritual adat, dan festival budaya tahunan'
      }
    } else if (pathname.includes('/budaya/nilai')) {
      return {
        image: '/tarian-perang-papua.jpg',
        icon: '❤️',
        title: 'Nilai Budaya',
        subtitle: 'Kearifan lokal tentang keberanian, gotong royong, dan harmoni alam'
      }
    } else if (pathname.includes('/budaya')) {
      return {
        image: '/festival-lembah-baliem.jpg',
        icon: '📚',
        title: 'Budaya',
        subtitle: 'Warisan leluhur suku Dani yang lestari hingga kini'
      }
    } else if (pathname.includes('/keunikan')) {
      return {
        image: '/tifa-alat-musik-tradisional.jpg',
        icon: '✨',
        title: 'Keunikan',
        subtitle: 'Keistimewaan budaya, alam, dan tradisi khas Jayawijaya'
      }
    } else if (pathname.includes('/galeri')) {
      return {
        image: '/noken-tas-papua.jpg',
        icon: '📸',
        title: 'Galeri',
        subtitle: 'Dokumentasi foto keindahan alam dan budaya Papua'
      }
    } else if (pathname.includes('/kesimpulan')) {
      return {
        image: '/tarian-perang-papua.jpg',
        icon: '📝',
        title: 'Kesimpulan',
        subtitle: 'Evaluasi pemahaman tentang harmoni dan nilai budaya Jayawijaya'
      }
    }
    
    // Default
    return {
      image: '/baliem-valley-landscape.jpg',
      icon: '🏔️',
      title: 'Jayawijaya',
      subtitle: 'Kabupaten dengan kekayaan budaya suku Dani di Lembah Baliem'
    }
  }

  const logo = getLogoConfig()

  return (
    <Link href="/" className="group flex items-center gap-3 relative max-w-md">
      {/* Logo dengan foto realistis */}
      <div className="relative w-14 h-14 flex-shrink-0 rounded-xl overflow-hidden shadow-xl ring-2 ring-white/50 dark:ring-slate-700/50 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
        <Image
          src={logo.image}
          alt={logo.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="56px"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20"></div>
        
        {/* Icon badge */}
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-xs shadow-lg ring-2 ring-white dark:ring-slate-800">
          {logo.icon}
        </div>
      </div>

      {/* Text dengan definisi lengkap */}
      <div className="flex flex-col min-w-0 flex-1">
        <span className="text-lg sm:text-xl font-black text-white group-hover:text-emerald-100 transition-colors leading-tight truncate">
          {logo.title}
        </span>
        <span className="text-[10px] sm:text-xs text-emerald-100 font-medium leading-snug line-clamp-2">
          {logo.subtitle}
        </span>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 -z-10 bg-white/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Link>
  )
}
