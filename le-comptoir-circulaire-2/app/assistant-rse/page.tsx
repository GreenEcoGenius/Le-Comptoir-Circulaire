"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import {
  Send,
  Bot,
  User,
  TrendingUp,
  Leaf,
  Target,
  BarChart3,
  PieChart,
  Activity,
  Sparkles,
  Zap,
  Award,
} from "lucide-react"

export default function AssistantRSEPage() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content:
        "Bonjour ! Je suis votre assistant RSE intelligent propulsé par GreenEcoGenius. Comment puis-je vous aider à optimiser votre stratégie de développement durable aujourd'hui ?",
      timestamp: new Date(),
    },
  ])

  const handleSendMessage = () => {
    if (!message.trim()) return

    const newMessage = {
      id: messages.length + 1,
      type: "user",
      content: message,
      timestamp: new Date(),
    }

    setMessages([...messages, newMessage])
    setMessage("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: "bot",
        content:
          "Excellente question ! Basé sur vos données actuelles et notre analyse IA, je recommande de vous concentrer sur l'optimisation de votre chaîne d'approvisionnement circulaire. Nos algorithmes détectent des opportunités d'amélioration de 23% dans vos flux de matériaux. Voulez-vous que j'analyse en détail vos performances ?",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1500)
  }

  const widgets = [
    {
      title: "Réduction CO2",
      value: "156.2",
      unit: "tonnes CO2",
      change: "+12%",
      icon: Leaf,
      color: "emerald",
      chart: "line",
      description: "Impact environnemental positif",
    },
    {
      title: "Taux de Circularité",
      value: "78.5",
      unit: "%",
      change: "+5%",
      icon: Target,
      color: "blue",
      chart: "donut",
      description: "Efficacité des processus",
    },
    {
      title: "Économies Réalisées",
      value: "€245K",
      unit: "ce mois",
      change: "+18%",
      icon: TrendingUp,
      color: "green",
      chart: "bar",
      description: "Bénéfices financiers",
    },
    {
      title: "Score RSE Global",
      value: "8.7",
      unit: "/10",
      change: "+0.3",
      icon: BarChart3,
      color: "purple",
      chart: "gauge",
      description: "Performance globale RSE",
    },
    {
      title: "Matériaux Recyclés",
      value: "1,247",
      unit: "tonnes",
      change: "+22%",
      icon: PieChart,
      color: "orange",
      chart: "area",
      description: "Volume de recyclage",
    },
    {
      title: "Partenaires Actifs",
      value: "34",
      unit: "entreprises",
      change: "+6",
      icon: Activity,
      color: "pink",
      chart: "line",
      description: "Réseau collaboratif",
    },
  ]

  const quickActions = [
    {
      title: "Audit Carbone",
      description: "Analyser l'empreinte",
      icon: Leaf,
      color: "emerald",
    },
    {
      title: "Objectifs RSE",
      description: "Définir les cibles",
      icon: Target,
      color: "blue",
    },
    {
      title: "Rapport RSE",
      description: "Générer le rapport",
      icon: BarChart3,
      color: "purple",
    },
    {
      title: "Optimisation IA",
      description: "Améliorer les flux",
      icon: Zap,
      color: "orange",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <h1 className="text-4xl font-bold text-anthracite-800">Assistant RSE Intelligent</h1>
            <Sparkles className="w-8 h-8 text-emerald-600 ml-3" />
          </div>
          <p className="text-xl text-anthracite-600 max-w-4xl">
            Optimisez votre stratégie de développement durable avec l'aide de notre IA avancée. Analysez vos
            performances, identifiez les opportunités et accélérez votre transition vers l'économie circulaire.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="card mb-10 bg-gradient-to-br from-white to-emerald-50/30 border-emerald-200">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mr-4">
              <Bot className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-anthracite-800">Conversation avec l'Assistant IA</h2>
              <p className="text-sm text-anthracite-600">Propulsé par GreenEcoGenius Intelligence</p>
            </div>
          </div>

          {/* Messages */}
          <div className="bg-white rounded-xl p-6 h-96 overflow-y-auto mb-6 border border-emerald-100 shadow-inner">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex mb-6 ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`flex max-w-xs lg:max-w-2xl ${msg.type === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                      msg.type === "user"
                        ? "bg-emerald-600 text-white ml-3"
                        : "bg-gradient-to-br from-anthracite-600 to-anthracite-700 text-white mr-3"
                    }`}
                  >
                    {msg.type === "user" ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                  </div>
                  <div
                    className={`px-6 py-4 rounded-2xl shadow-lg ${
                      msg.type === "user"
                        ? "bg-emerald-600 text-white"
                        : "bg-white border border-gray-200 text-anthracite-800"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                    <p className={`text-xs mt-2 ${msg.type === "user" ? "text-emerald-100" : "text-anthracite-500"}`}>
                      {msg.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="flex space-x-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Posez votre question sur la RSE, l'économie circulaire, ou vos objectifs durables..."
              className="flex-1 px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-lg"
            />
            <button onClick={handleSendMessage} className="btn-primary flex items-center px-8 py-4 text-lg">
              <Send className="w-5 h-5 mr-2" />
              Envoyer
            </button>
          </div>
        </div>

        {/* Analytics Dashboard */}
        <div className="mb-10">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-anthracite-800">Tableau de Bord Analytique</h2>
            <Award className="w-8 h-8 text-emerald-600 ml-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {widgets.map((widget, index) => {
              const Icon = widget.icon
              return (
                <div
                  key={index}
                  className="card hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`p-4 rounded-xl bg-${widget.color}-100 group-hover:bg-${widget.color}-200 transition-colors duration-300`}
                    >
                      <Icon className={`w-8 h-8 text-${widget.color}-600`} />
                    </div>
                    <span
                      className={`text-${widget.color}-600 font-bold text-sm bg-${widget.color}-50 px-3 py-2 rounded-full border border-${widget.color}-200`}
                    >
                      {widget.change}
                    </span>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-bold text-anthracite-800">{widget.value}</span>
                      <span className="text-lg text-anthracite-600 ml-2">{widget.unit}</span>
                    </div>
                    <p className="text-lg font-bold text-anthracite-800 mb-1">{widget.title}</p>
                    <p className="text-sm text-anthracite-600">{widget.description}</p>
                  </div>

                  {/* Placeholder Chart */}
                  <div
                    className={`h-24 bg-gradient-to-r from-${widget.color}-50 to-${widget.color}-100 rounded-xl flex items-center justify-center border border-${widget.color}-200`}
                  >
                    <span className="text-sm text-anthracite-500 font-medium">Graphique {widget.chart}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card bg-gradient-to-br from-white to-emerald-50/30 border-emerald-200">
          <h3 className="text-2xl font-bold text-anthracite-800 mb-8 flex items-center">
            Actions Rapides
            <Zap className="w-6 h-6 text-emerald-600 ml-3" />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <button
                  key={index}
                  className="p-6 border-2 border-gray-200 rounded-xl hover:bg-white hover:border-emerald-300 hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="text-center">
                    <div
                      className={`w-16 h-16 bg-${action.color}-100 group-hover:bg-${action.color}-200 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-200`}
                    >
                      <Icon className={`w-8 h-8 text-${action.color}-600`} />
                    </div>
                    <p className="font-bold text-anthracite-800 text-lg mb-2">{action.title}</p>
                    <p className="text-sm text-anthracite-600">{action.description}</p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
