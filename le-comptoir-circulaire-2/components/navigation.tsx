"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, User, LogIn, Leaf, Sparkles } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/marche", label: "Marché" },
    { href: "/assistant-rse", label: "Assistant RSE" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="bg-white shadow-xl border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 premium-gradient rounded-xl flex items-center justify-center shadow-lg">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-2 h-2 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-anthracite-800">Le Comptoir Circulaire</h1>
              <p className="text-xs text-emerald-600 font-medium">par GreenEcoGenius</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-emerald-600 bg-emerald-50 shadow-md"
                    : "text-anthracite-700 hover:text-emerald-600 hover:bg-emerald-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-anthracite-700 hover:text-emerald-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-emerald-50">
              <LogIn className="w-4 h-4" />
              <span>Connexion</span>
            </button>
            <button className="btn-primary flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Inscription</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-anthracite-700 hover:text-emerald-600 p-2 rounded-lg hover:bg-emerald-50 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-emerald-600 bg-emerald-50 shadow-md"
                      : "text-anthracite-700 hover:text-emerald-600 hover:bg-emerald-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 pb-2 border-t border-gray-200 space-y-3">
                <button className="w-full text-left px-4 py-3 text-anthracite-700 hover:text-emerald-600 text-base font-medium rounded-lg hover:bg-emerald-50 transition-colors duration-200">
                  Connexion
                </button>
                <button className="w-full btn-primary text-left justify-center">Inscription</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
