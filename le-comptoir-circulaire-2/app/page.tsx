import Navigation from "@/components/navigation"
import { BarChart3, TrendingUp, Globe, Recycle, ArrowRight, Shield, Zap, Target, Sparkles, Leaf } from "lucide-react"

export default function HomePage() {
  const stats = [
    {
      title: "Matériaux Disponibles",
      value: "2.4M",
      unit: "tonnes",
      icon: Recycle,
      trend: "+12%",
      color: "emerald",
      description: "Ressources circulaires actives",
    },
    {
      title: "Transactions Mensuelles",
      value: "1,847",
      unit: "échanges",
      icon: TrendingUp,
      trend: "+8%",
      color: "blue",
      description: "Échanges B2B réalisés",
    },
    {
      title: "Pays Actifs",
      value: "27",
      unit: "pays EU",
      icon: Globe,
      trend: "+3",
      color: "purple",
      description: "Couverture européenne",
    },
    {
      title: "Économies CO2",
      value: "156K",
      unit: "tonnes CO2",
      icon: BarChart3,
      trend: "+15%",
      color: "green",
      description: "Impact environnemental",
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "Traçabilité Blockchain",
      description: "Transparence totale de la chaîne d'approvisionnement avec technologie blockchain inviolable",
    },
    {
      icon: Zap,
      title: "IA & Optimisation",
      description: "Assistant RSE intelligent pour optimiser vos processus et réduire votre empreinte carbone",
    },
    {
      icon: Target,
      title: "Label Éco-Responsable",
      description: "Certification et valorisation de votre engagement pour renforcer votre image de marque",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="premium-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center animate-fade-in">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-500/20 text-emerald-100 border border-emerald-400/30">
                <Sparkles className="w-4 h-4 mr-2" />
                Révolutionnez votre économie circulaire
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
              Le Marché Européen des
              <span className="block text-emerald-300 animate-pulse-slow">Ressources Circulaires</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-emerald-100 max-w-4xl mx-auto leading-relaxed">
              Transformez vos déchets industriels en opportunités économiques grâce à notre plateforme B2B de confiance,
              propulsée par l'intelligence artificielle et la blockchain
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
              <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-1 flex items-center justify-center">
                Explorer le Marché
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-emerald-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-200 backdrop-blur-sm">
                Découvrir la Plateforme
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-anthracite-800 mb-6">L'Impact en Temps Réel</h2>
            <p className="text-xl text-anthracite-600 max-w-3xl mx-auto">
              Découvrez les chiffres clés de notre écosystème circulaire européen et l'impact positif de notre
              communauté d'entreprises engagées
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="card stat-card group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`p-4 rounded-xl bg-${stat.color}-100 group-hover:bg-${stat.color}-200 transition-colors duration-300`}
                    >
                      <Icon className={`w-8 h-8 text-${stat.color}-600`} />
                    </div>
                    <span className="text-emerald-600 font-bold text-sm bg-emerald-100 px-3 py-1 rounded-full">
                      {stat.trend}
                    </span>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-bold text-anthracite-800">{stat.value}</span>
                      <span className="text-lg text-anthracite-600 ml-2">{stat.unit}</span>
                    </div>
                    <p className="text-lg font-semibold text-anthracite-800 mb-1">{stat.title}</p>
                    <p className="text-sm text-anthracite-600">{stat.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Europe Map Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-anthracite-800 mb-6">Réseau Européen Actif</h2>
            <p className="text-xl text-anthracite-600 max-w-3xl mx-auto">
              Visualisez les flux de matériaux circulaires à travers l'Europe et découvrez les opportunités d'échange en
              temps réel
            </p>
          </div>

          <div className="card bg-gradient-to-br from-white to-emerald-50/50 border-emerald-200">
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-12 min-h-[600px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/20 to-blue-100/20 rounded-xl"></div>
              <div className="text-center relative z-10">
                <div className="mb-8">
                  <Globe className="w-32 h-32 text-emerald-600 mx-auto mb-6 animate-pulse-slow" />
                </div>
                <h3 className="text-3xl font-bold text-anthracite-800 mb-6">Carte Interactive de l'Europe</h3>
                <p className="text-anthracite-600 mb-8 max-w-2xl text-lg leading-relaxed">
                  Explorez les flux de matériaux, les hubs de distribution et les opportunités d'échange en temps réel à
                  travers notre réseau européen de partenaires certifiés
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary flex items-center justify-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Lancer la Carte Interactive
                  </button>
                  <button className="btn-outline">Voir les Statistiques</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-anthracite-800 mb-6">Technologies de Pointe</h2>
            <p className="text-xl text-anthracite-600 max-w-3xl mx-auto">
              Notre plateforme intègre les dernières innovations pour garantir transparence, efficacité et impact
              environnemental positif
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="card group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 premium-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-anthracite-800 mb-4">{feature.title}</h3>
                    <p className="text-anthracite-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 premium-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Rejoindre l'Économie Circulaire ?</h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transformez vos déchets en revenus, contribuez à un avenir plus durable et rejoignez notre communauté
            d'entreprises innovantes
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-1">
              Commencer Maintenant
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-emerald-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-200 backdrop-blur-sm">
              Planifier une Démo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-anthracite-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-10 h-10 premium-gradient rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Le Comptoir Circulaire</h3>
                <p className="text-sm text-emerald-400">par GreenEcoGenius</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Révolutionnons ensemble l'industrie vers une économie plus intelligente et plus propre
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <span>contact@greenecogenius.fr</span>
              <span>+33 7 83 32 42 74</span>
              <span>www.greenecogenius.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
