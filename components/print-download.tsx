"use client"
import { useState } from "react"

interface PrintDownloadProps {
  title: string
  contentId?: string
}

export default function PrintDownload({ title, contentId }: PrintDownloadProps) {
  const [showMenu, setShowMenu] = useState(false)

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print()
    }
    setShowMenu(false)
  }

  const handleDownloadPDF = () => {
    // Implementasi sederhana untuk download sebagai HTML
    if (typeof window !== 'undefined') {
      const content = contentId 
        ? document.getElementById(contentId)?.innerHTML 
        : document.body.innerHTML

      const blob = new Blob([`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>${title}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
            h1 { color: #059669; }
            h2 { color: #0d9488; }
            p { margin-bottom: 1em; }
          </style>
        </head>
        <body>
          <h1>${title}</h1>
          ${content || ''}
        </body>
        </html>
      `], { type: 'text/html' })

      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${title.replace(/\s+/g, '_')}.html`
      a.click()
      URL.revokeObjectURL(url)
    }
    setShowMenu(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
      >
        <span className="text-xl">📄</span>
        <span>Download</span>
      </button>

      {showMenu && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setShowMenu(false)}
          />

          {/* Menu */}
          <div className="absolute top-full right-0 mt-2 bg-white rounded-2xl shadow-2xl border-2 border-gray-100 p-4 min-w-[200px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-2">
              {/* Print */}
              <button
                onClick={handlePrint}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-purple-50 rounded-xl transition-colors group"
              >
                <span className="text-2xl">🖨️</span>
                <span className="font-semibold text-gray-700 group-hover:text-purple-600">Print</span>
              </button>

              {/* Download PDF */}
              <button
                onClick={handleDownloadPDF}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-pink-50 rounded-xl transition-colors group"
              >
                <span className="text-2xl">💾</span>
                <span className="font-semibold text-gray-700 group-hover:text-pink-600">Download HTML</span>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          header, nav, footer, button, .no-print {
            display: none !important;
          }
          body {
            background: white !important;
            color: black !important;
          }
          * {
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  )
}
