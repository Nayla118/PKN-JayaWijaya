"use client"
import { useState, useEffect } from 'react'
import { Share2, ArrowUp, Menu, X, Home, Book, Sparkles, Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'

export default function FloatingActionButton() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleShare = async () => {
    const shareData = {
      title: 'Budaya Jayawijaya',
      text: 'Jelajahi kekayaan budaya Kabupaten Jayawijaya, Papua!',
      url: window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(window.location.href)
        setShowToast(true)
        setTimeout(() => setShowToast(false), 3000)
      }
    } catch (err) {
      console.log('Share failed:', err)
    }
  }

  const menuItems = [
    { icon: Home, label: 'Beranda', href: '/' },
    { icon: Book, label: 'Budaya', href: '/budaya/makanan' },
    { icon: Sparkles, label: 'Keunikan', href: '/keunikan' },
    { icon: ImageIcon, label: 'Galeri', href: '/galeri' },
  ]

  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-24 right-6 z-50 bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-2xl animate-slide-in-right">
          <p className="text-sm font-medium">✓ Link disalin ke clipboard!</p>
        </div>
      )}

      {/* Quick Menu Items */}
      {menuOpen && (
        <div className="fixed bottom-32 right-6 z-40 flex flex-col gap-3">
          {menuItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center gap-3 bg-white dark:bg-slate-800 rounded-full shadow-xl px-4 py-3 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all duration-300 transform hover:scale-105"
              style={{
                animation: `slideInRight 0.3s ease-out ${index * 0.1}s both`
              }}
            >
              <item.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      )}

      {/* Main FAB Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-4 rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-110 animate-bounce-in"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-4 rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
          aria-label="Share website"
        >
          <Share2 className="w-6 h-6" />
        </button>

        {/* Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`bg-gradient-to-r from-purple-500 to-pink-600 text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110 ${
            menuOpen ? 'rotate-90' : 'rotate-0'
          }`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <style jsx global>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
