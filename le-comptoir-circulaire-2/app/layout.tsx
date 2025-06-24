import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Le Comptoir Circulaire par GreenEcoGenius - Marché Européen des Ressources Circulaires",
  description: "Plateforme B2B pour l'économie circulaire européenne - Transformez vos déchets en opportunités",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
