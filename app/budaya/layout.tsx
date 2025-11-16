import type React from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"
import ThemeToggle from "@/components/theme-toggle"

export default function BudayaLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navigation />
      <ThemeToggle />
      {children}
      <Footer />
    </main>
  )
}
