"use client"

import { useState, useEffect } from "react"

const uniqueFeatures = [
  {
    icon: "🌿",
    title: "Makanan Alami & Organik",
    description:
      "Semua makanan khas Jayawijaya dibuat dari bahan-bahan alami tanpa pengawet, pestisida, atau bahan kimia berbahaya. Proses tradisional menjaga keaslian dan nutrisi setiap hidangan.",
  },
  {
    icon: "⭐",
    title: "Pakaian Adat Bermakna",
    description:
      "Setiap elemen pakaian adat Jayawijaya melambangkan kedekatan dengan alam, nilai keberanian, dan filosofi hidup masyarakat pegunungan yang mendalam dan autentik.",
  },
  {
    icon: "⚡",
    title: "Kesenian Penuh Semangat",
    description:
      "Kesenian daerah Jayawijaya menggambarkan semangat, keberanian, dan identitas unik masyarakat pegunungan. Setiap gerakan tari dan nada musik menceritakan kisah leluhur.",
  },
]

export default function Uniqueness() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="uniqueness" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Keunikan Budaya <span className="text-secondary">Jayawijaya</span>
          </h2>
          <p className="text-lg text-muted-foreground">Yang membedakan budaya Jayawijaya dari daerah lain di Papua</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {uniqueFeatures.map((feature, index) => (
            <div
              key={index}
              className={`group bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-200">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-xl p-8 border border-primary/20">
          <blockquote className="text-center">
            <p className="text-2xl font-semibold text-foreground mb-4">
              "Budaya bukan hanya warisan, tetapi identitas yang menuntun masa depan"
            </p>
            <p className="text-muted-foreground">
              Masyarakat Jayawijaya terus berupaya melestarikan nilai-nilai budaya untuk generasi mendatang
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
