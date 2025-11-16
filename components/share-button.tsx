"use client"
import { useState } from "react"

interface ShareButtonProps {
  title: string
  text: string
  url?: string
}

export default function ShareButton({ title, text, url }: ShareButtonProps) {
  const [showMenu, setShowMenu] = useState(false)
  const [copied, setCopied] = useState(false)

  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '')

  const shareData = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${text} ${shareUrl}`)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleShare = (platform: keyof typeof shareData) => {
    window.open(shareData[platform], '_blank', 'width=600,height=400')
    setShowMenu(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
      >
        <span className="text-xl">📤</span>
        <span>Bagikan</span>
      </button>

      {showMenu && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setShowMenu(false)}
          />

          {/* Menu */}
          <div className="absolute top-full right-0 mt-2 bg-white rounded-2xl shadow-2xl border-2 border-gray-100 p-4 min-w-[250px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <p className="text-sm font-bold text-gray-600 mb-3 px-2">Bagikan ke:</p>
            
            <div className="space-y-2">
              {/* Facebook */}
              <button
                onClick={() => handleShare('facebook')}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 rounded-xl transition-colors group"
              >
                <span className="text-2xl">📘</span>
                <span className="font-semibold text-gray-700 group-hover:text-blue-600">Facebook</span>
              </button>

              {/* Twitter */}
              <button
                onClick={() => handleShare('twitter')}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-sky-50 rounded-xl transition-colors group"
              >
                <span className="text-2xl">🐦</span>
                <span className="font-semibold text-gray-700 group-hover:text-sky-600">Twitter</span>
              </button>

              {/* WhatsApp */}
              <button
                onClick={() => handleShare('whatsapp')}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-green-50 rounded-xl transition-colors group"
              >
                <span className="text-2xl">💬</span>
                <span className="font-semibold text-gray-700 group-hover:text-green-600">WhatsApp</span>
              </button>

              {/* Telegram */}
              <button
                onClick={() => handleShare('telegram')}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 rounded-xl transition-colors group"
              >
                <span className="text-2xl">✈️</span>
                <span className="font-semibold text-gray-700 group-hover:text-blue-600">Telegram</span>
              </button>

              {/* Copy Link */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <button
                  onClick={copyToClipboard}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors group"
                >
                  <span className="text-2xl">{copied ? "✅" : "🔗"}</span>
                  <span className="font-semibold text-gray-700 group-hover:text-emerald-600">
                    {copied ? "Link Disalin!" : "Salin Link"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
