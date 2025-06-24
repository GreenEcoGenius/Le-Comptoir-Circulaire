"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { Search, Filter, MapPin, Package, Euro, User, Star, Sparkles, Shield, Truck } from "lucide-react"

export default function MarchePage() {
  const [filters, setFilters] = useState({
    material: "",
    country: "",
    minQuantity: "",
    maxPrice: "",
  })

  const materials = ["Plastique", "Métal", "Bois", "Carton", "Verre", "Textile", "Électronique", "Composite"]
  const countries = ["France", "Allemagne", "Italie", "Espagne", "Pays-Bas", "Belgique", "Autriche", "Portugal"]

  const products = [
    {
      id: 1,
      title: "Granulés PET Recyclés Premium",
      price: 850,
      originalPrice: 950,
      quantity: 25,
      unit: "tonnes",
      seller: "EcoPlast Industries",
      rating: 4.8,
      reviews: 127,
      location: "Lyon, France",
      image: "/placeholder.svg?height=200&width=300",
      material: "Plastique",
      certified: true,
      featured: true,
    },
    {
      id: 2,
      title: "Copeaux d'Aluminium Haute Pureté",
      price: 1200,
      quantity: 15,
      unit: "tonnes",
      seller: "MetalRecycle Pro",
      rating: 4.9,
      reviews: 89,
      location: "Munich, Allemagne",
      image: "/placeholder.svg?height=200&width=300",
      material: "Métal",
      certified: true,
      featured: false,
    },
    {
      id: 3,
      title: "Palettes Bois Réutilisables",
      price: 45,
      quantity: 500,
      unit: "unités",
      seller: "WoodCycle Solutions",
      rating: 4.6,
      reviews: 203,
      location: "Amsterdam, Pays-Bas",
      image: "/placeholder.svg?height=200&width=300",
      material: "Bois",
      certified: true,
      featured: false,
    },
    {
      id: 4,
      title: "Carton Ondulé Trié Premium",
      price: 120,
      quantity: 80,
      unit: "tonnes",
      seller: "PaperFlow Europe",
      rating: 4.7,
      reviews: 156,
      location: "Milan, Italie",
      image: "/placeholder.svg?height=200&width=300",
      material: "Carton",
      certified: true,
      featured: true,
    },
    {
      id: 5,
      title: "Verre Coloré Broyé",
      price: 95,
      quantity: 30,
      unit: "tonnes",
      seller: "GlassReborn",
      rating: 4.5,
      reviews: 78,
      location: "Barcelone, Espagne",
      image: "/placeholder.svg?height=200&width=300",
      material: "Verre",
      certified: false,
      featured: false,
    },
    {
      id: 6,
      title: "Fibres Textiles Recyclées",
      price: 320,
      quantity: 12,
      unit: "tonnes",
      seller: "TextileLoop",
      rating: 4.8,
      reviews: 94,
      location: "Bruxelles, Belgique",
      image: "/placeholder.svg?height=200&width=300",
      material: "Textile",
      certified: true,
      featured: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <h1 className="text-4xl font-bold text-anthracite-800">Marché des Ressources Circulaires</h1>
            <Sparkles className="w-8 h-8 text-emerald-600 ml-3" />
          </div>
          <p className="text-xl text-anthracite-600 max-w-3xl">
            Découvrez et achetez des matériaux recyclés de qualité auprès de fournisseurs vérifiés à travers l'Europe.
            Chaque transaction contribue à l'économie circulaire.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="card sticky top-28 bg-gradient-to-br from-white to-emerald-50/30 border-emerald-200">
              <div className="flex items-center mb-8">
                <Filter className="w-6 h-6 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-semibold text-anthracite-800">Filtres Avancés</h2>
              </div>

              {/* Search */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-anthracite-700 mb-3">Recherche</label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-anthracite-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Rechercher un matériau..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Material Type */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-anthracite-700 mb-3">Type de Matériau</label>
                <select
                  value={filters.material}
                  onChange={(e) => setFilters({ ...filters, material: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                >
                  <option value="">Tous les matériaux</option>
                  {materials.map((material) => (
                    <option key={material} value={material}>
                      {material}
                    </option>
                  ))}
                </select>
              </div>

              {/* Country */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-anthracite-700 mb-3">Pays</label>
                <select
                  value={filters.country}
                  onChange={(e) => setFilters({ ...filters, country: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                >
                  <option value="">Tous les pays</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-anthracite-700 mb-3">Quantité Minimale</label>
                <input
                  type="number"
                  placeholder="Ex: 10"
                  value={filters.minQuantity}
                  onChange={(e) => setFilters({ ...filters, minQuantity: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                />
              </div>

              {/* Price */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-anthracite-700 mb-3">Prix Maximum (€)</label>
                <input
                  type="number"
                  placeholder="Ex: 1000"
                  value={filters.maxPrice}
                  onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                />
              </div>

              <button className="w-full btn-primary text-lg py-4">Appliquer les Filtres</button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-anthracite-600 text-lg">
                  <span className="font-semibold text-emerald-600">{products.length}</span> produits trouvés
                </p>
                <p className="text-sm text-anthracite-500">Matériaux certifiés et traçables</p>
              </div>
              <select className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200">
                <option>Trier par pertinence</option>
                <option>Prix croissant</option>
                <option>Prix décroissant</option>
                <option>Quantité disponible</option>
                <option>Note du vendeur</option>
                <option>Nouveautés</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="card hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:-translate-y-2 relative overflow-hidden"
                >
                  {product.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Vedette
                      </span>
                    </div>
                  )}

                  <div className="relative mb-6">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-52 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-anthracite-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {product.material}
                    </div>
                    {product.originalPrice && (
                      <div className="absolute bottom-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-anthracite-800 mb-3 group-hover:text-emerald-600 transition-colors duration-200">
                    {product.title}
                  </h3>

                  <div className="flex items-center mb-4">
                    <MapPin className="w-4 h-4 text-anthracite-500 mr-2" />
                    <span className="text-sm text-anthracite-600">{product.location}</span>
                    {product.certified && <Shield className="w-4 h-4 text-emerald-600 ml-2" title="Certifié" />}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Euro className="w-5 h-5 text-emerald-600 mr-1" />
                      <div>
                        <span className="text-2xl font-bold text-emerald-600">{product.price}€</span>
                        {product.originalPrice && (
                          <span className="text-sm text-anthracite-500 line-through ml-2">
                            {product.originalPrice}€
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Package className="w-4 h-4 text-anthracite-500 mr-1" />
                      <span className="text-sm text-anthracite-600 font-medium">
                        {product.quantity} {product.unit}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-anthracite-500 mr-2" />
                      <span className="text-sm text-anthracite-600 font-medium">{product.seller}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
                      <span className="text-sm font-bold text-anthracite-700">{product.rating}</span>
                      <span className="text-xs text-anthracite-500 ml-1">({product.reviews})</span>
                    </div>
                  </div>

                  <div className="flex items-center text-xs text-anthracite-500 mb-4">
                    <Truck className="w-4 h-4 mr-1" />
                    <span>Livraison disponible</span>
                  </div>

                  <button className="w-full btn-primary group-hover:shadow-xl">Voir les Détails</button>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-16">
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-anthracite-600 hover:bg-emerald-50 hover:border-emerald-300 transition-colors duration-200">
                  Précédent
                </button>
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg shadow-lg">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-anthracite-600 hover:bg-emerald-50 hover:border-emerald-300 transition-colors duration-200">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-anthracite-600 hover:bg-emerald-50 hover:border-emerald-300 transition-colors duration-200">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-anthracite-600 hover:bg-emerald-50 hover:border-emerald-300 transition-colors duration-200">
                  Suivant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
