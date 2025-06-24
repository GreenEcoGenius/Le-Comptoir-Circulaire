"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import {
  ArrowLeft,
  Star,
  MapPin,
  Package,
  Shield,
  Truck,
  Award,
  MessageCircle,
  Share2,
  Sparkles,
  CheckCircle,
  Clock,
  Euro,
} from "lucide-react"

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const product = {
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
    description:
      "Granulés PET recyclés de haute qualité, parfaits pour la production de nouvelles bouteilles et emballages. Traçabilité complète garantie par blockchain. Ces granulés proviennent exclusivement de bouteilles PET post-consommation triées et purifiées selon les standards européens les plus stricts.",
    specifications: {
      Pureté: "99.2%",
      "Taille des granulés": "2-4mm",
      Couleur: "Transparent",
      Certification: "ISO 14001, REACH, FDA",
      Origine: "Bouteilles PET post-consommation",
      "Température de fusion": "245-265°C",
      Densité: "1.38 g/cm³",
      Humidité: "< 0.02%",
    },
    images: [
      "/placeholder.svg?height=500&width=700",
      "/placeholder.svg?height=500&width=700",
      "/placeholder.svg?height=500&width=700",
      "/placeholder.svg?height=500&width=700",
    ],
    features: [
      "Traçabilité blockchain complète",
      "Certification ISO 14001",
      "Livraison gratuite +10 tonnes",
      "Garantie qualité 30 jours",
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8">
          <button className="flex items-center text-emerald-600 hover:text-emerald-700 mr-4 px-3 py-2 rounded-lg hover:bg-emerald-50 transition-colors duration-200">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour au marché
          </button>
          <span className="text-anthracite-400">/</span>
          <span className="text-anthracite-600 ml-2">Plastique</span>
          <span className="text-anthracite-400 mx-2">/</span>
          <span className="text-anthracite-800 font-medium">{product.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Images and Description */}
          <div>
            {/* Image Gallery */}
            <div className="mb-10">
              <div className="mb-6 relative">
                <img
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute top-6 left-6 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Premium
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-xl overflow-hidden transition-all duration-200 ${
                      selectedImage === index ? "ring-4 ring-emerald-500 shadow-lg" : "hover:shadow-md"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-24 object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="card bg-gradient-to-br from-white to-emerald-50/30 border-emerald-200">
              <h2 className="text-3xl font-bold text-anthracite-800 mb-6 flex items-center">
                Description Détaillée
                <Shield className="w-6 h-6 text-emerald-600 ml-3" />
              </h2>
              <p className="text-anthracite-600 mb-8 leading-relaxed text-lg">{product.description}</p>

              <h3 className="text-2xl font-semibold text-anthracite-800 mb-6">Spécifications Techniques</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center py-3 px-4 bg-white rounded-lg border border-emerald-100"
                  >
                    <span className="text-anthracite-600 font-medium">{key}:</span>
                    <span className="font-bold text-anthracite-800">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-emerald-50 rounded-xl border border-emerald-200">
                <h4 className="font-semibold text-anthracite-800 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                  Avantages Premium
                </h4>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-anthracite-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Purchase Block */}
          <div>
            <div className="card sticky top-28 bg-gradient-to-br from-white to-emerald-50/30 border-emerald-200">
              {/* Product Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-anthracite-800 mb-4">{product.title}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-6">
                    <Star className="w-5 h-5 text-yellow-400 mr-2 fill-current" />
                    <span className="font-bold text-anthracite-700 text-lg">{product.rating}</span>
                    <span className="text-anthracite-500 ml-2">({product.reviews} avis)</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-anthracite-500 mr-2" />
                    <span className="text-anthracite-600 font-medium">{product.location}</span>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mb-8 p-6 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200">
                <div className="flex items-baseline mb-3">
                  <Euro className="w-6 h-6 text-emerald-600 mr-2" />
                  <span className="text-4xl font-bold text-emerald-600">{product.price}€</span>
                  <span className="text-xl text-anthracite-500 line-through ml-3">{product.originalPrice}€</span>
                  <span className="text-sm text-white bg-red-500 px-3 py-1 rounded-full ml-3 font-bold">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </div>
                <p className="text-anthracite-600 font-medium">
                  par tonne • <span className="text-emerald-600 font-bold">{product.quantity} tonnes</span> disponibles
                </p>
                <div className="flex items-center mt-2 text-sm text-anthracite-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Offre limitée - Stock épuisé rapidement</span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-anthracite-700 mb-4">Quantité (tonnes)</label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 border-2 border-gray-300 rounded-xl flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-300 transition-colors duration-200 font-bold text-lg"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                    className="w-24 px-4 py-3 border-2 border-gray-300 rounded-xl text-center text-lg font-bold focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  />
                  <button
                    onClick={() => setQuantity(Math.min(product.quantity, quantity + 1))}
                    className="w-12 h-12 border-2 border-gray-300 rounded-xl flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-300 transition-colors duration-200 font-bold text-lg"
                  >
                    +
                  </button>
                </div>
                <div className="mt-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <p className="text-lg font-bold text-anthracite-800">
                    Total: <span className="text-emerald-600">{(product.price * quantity).toLocaleString()}€</span>
                  </p>
                  <p className="text-sm text-anthracite-600">
                    Économie: {((product.originalPrice - product.price) * quantity).toLocaleString()}€
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 mb-8">
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center">
                  <Package className="w-6 h-6 mr-3" />
                  Acheter Maintenant
                </button>
                <button className="w-full bg-anthracite-700 hover:bg-anthracite-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 mr-3" />
                  Voir la Traçabilité Blockchain
                </button>
              </div>

              {/* Seller Info */}
              <div className="border-t border-gray-200 pt-8 mb-8">
                <h3 className="font-bold text-anthracite-800 mb-4 text-lg">Vendeur Certifié</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-anthracite-800 text-lg">{product.seller}</p>
                    <div className="flex items-center mt-2">
                      <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
                      <span className="text-sm text-anthracite-600 font-medium">Vendeur vérifié depuis 2019</span>
                    </div>
                  </div>
                  <button className="text-emerald-600 hover:text-emerald-700 font-bold px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors duration-200">
                    Voir le profil
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-anthracite-600">
                  <Truck className="w-5 h-5 mr-3 text-emerald-600" />
                  <span className="font-medium">Livraison gratuite pour commandes +10 tonnes</span>
                </div>
                <div className="flex items-center text-anthracite-600">
                  <Award className="w-5 h-5 mr-3 text-emerald-600" />
                  <span className="font-medium">Certification qualité ISO 14001</span>
                </div>
                <div className="flex items-center text-anthracite-600">
                  <Shield className="w-5 h-5 mr-3 text-emerald-600" />
                  <span className="font-medium">Traçabilité blockchain garantie</span>
                </div>
                <div className="flex items-center text-anthracite-600">
                  <CheckCircle className="w-5 h-5 mr-3 text-emerald-600" />
                  <span className="font-medium">Garantie qualité 30 jours</span>
                </div>
              </div>

              {/* Additional Actions */}
              <div className="flex space-x-4">
                <button className="flex-1 border-2 border-gray-300 hover:bg-emerald-50 hover:border-emerald-300 px-4 py-3 rounded-xl font-semibold text-anthracite-700 flex items-center justify-center transition-all duration-200">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contacter
                </button>
                <button className="flex-1 border-2 border-gray-300 hover:bg-emerald-50 hover:border-emerald-300 px-4 py-3 rounded-xl font-semibold text-anthracite-700 flex items-center justify-center transition-all duration-200">
                  <Share2 className="w-5 h-5 mr-2" />
                  Partager
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
