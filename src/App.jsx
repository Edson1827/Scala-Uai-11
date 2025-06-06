import React, { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { 
  TrendingUp, 
  Target, 
  BarChart3, 
  Zap, 
  Shield, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  Menu,
  X,
  Calculator,
  DollarSign,
  Gauge,
  Award,
  Clock,
  Smartphone,
  Sun,
  Moon,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Building,
  Heart,
  Rocket,
  MessageCircle,
  Phone,
  LineChart,
  PieChart,
  Activity,
  Percent,
  Plus,
  Check,
  Mail,
  // Ícones de redes sociais
  Facebook,
  Instagram,
  Linkedin,
  Twitter
} from 'lucide-react'
import './App.css'

// Importar componentes separados
import FAQSection from './components/FAQSection'
import PricingSection from './components/PricingSection'
import Footer from './components/Footer'

// Componente Header
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Scala Uai</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => scrollToSection('precos')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Calculadora
            </button>
            <button 
              onClick={() => scrollToSection('precos')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Preços
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <Button 
              onClick={() => scrollToSection('precos')}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
            >
              Começar Agora
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Dark mode toggle for desktop */}
          <button
            onClick={toggleDarkMode}
            className="hidden md:block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('como-funciona')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Como Funciona
              </button>
              <button 
                onClick={() => scrollToSection('precos')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Calculadora
              </button>
              <button 
                onClick={() => scrollToSection('precos')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Preços
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection('precos')}
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 w-full"
              >
                Começar Agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

// Componente Hero Section
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Escale Seu Negócio com
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> Tráfego Pago Inteligente</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Automação de 95%, transparência total e resultados garantidos em 30 dias. 
            Especialistas em PMEs brasileiras.
          </p>
          
          {/* Métricas de destaque */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">300%</div>
              <div className="text-gray-600 dark:text-gray-300">Aumento médio em vendas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">127+</div>
              <div className="text-gray-600 dark:text-gray-300">Clientes satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">3.5x</div>
              <div className="text-gray-600 dark:text-gray-300">ROI médio</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => document.getElementById('precos').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-4"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Calcular Meu ROI
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('precos').scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-4"
            >
              Ver Planos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente Como Funciona
const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Análise Inicial",
      description: "Analisamos seu negócio, concorrência e identificamos as melhores oportunidades de crescimento.",
      icon: Target,
      duration: "1-2 dias"
    },
    {
      number: "02", 
      title: "Estratégia Personalizada",
      description: "Criamos uma estratégia única para seu negócio com campanhas otimizadas para máximo ROI.",
      icon: BarChart3,
      duration: "3-5 dias"
    },
    {
      number: "03",
      title: "Implementação",
      description: "Configuramos todas as campanhas, pixels de rastreamento e sistemas de automação.",
      icon: Zap,
      duration: "5-7 dias"
    },
    {
      number: "04",
      title: "Otimização Contínua",
      description: "Monitoramos e otimizamos suas campanhas 24/7 para garantir os melhores resultados.",
      icon: TrendingUp,
      duration: "Contínuo"
    }
  ]

  return (
    <section id="como-funciona" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nosso processo comprovado para transformar seu investimento em anúncios em resultados reais
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-green-600 rounded-full"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mr-4">
                          <step.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{step.duration}</div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline number */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-16 h-16 bg-white dark:bg-gray-800 border-4 border-blue-600 rounded-full flex items-center justify-center z-10">
                    <span className="text-xl font-bold text-blue-600">{step.number}</span>
                  </div>
                </div>
                
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente Depoimentos
const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "E-commerce Fashion",
      role: "CEO",
      content: "Em 3 meses, nosso faturamento aumentou 280%. A equipe da Scala Uai é excepcional e os resultados falam por si só.",
      rating: 5,
      results: "280% aumento em vendas"
    },
    {
      name: "Maria Santos",
      company: "Clínica Odontológica",
      role: "Proprietária",
      content: "Conseguimos 150 novos pacientes em 60 dias. O ROI foi incrível e o suporte é sempre muito atencioso.",
      rating: 5,
      results: "150 novos pacientes em 60 dias"
    },
    {
      name: "Roberto Almeida",
      company: "Academia Fitness",
      role: "Diretor",
      content: "Triplicamos o número de matrículas mensais. A estratégia omnichannel realmente fez a diferença para nosso negócio.",
      rating: 5,
      results: "3x mais matrículas mensais"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="depoimentos" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Histórias reais de empresas que transformaram seus resultados com a Scala Uai
          </p>
        </div>

        <div className="relative">
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-blue-100 to-green-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {testimonials[currentTestimonial].name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <h4 className="font-bold text-gray-900 dark:text-white">
                            {testimonials[currentTestimonial].name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex mb-4">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Badge className="bg-green-600">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {testimonials[currentTestimonial].results}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 flex flex-col justify-between">
                  <div>
                    <blockquote className="text-xl text-gray-700 dark:text-gray-300 italic mb-6">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      {currentTestimonial + 1} de {testimonials.length}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={prevTestimonial}
                      >
                        Anterior
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={nextTestimonial}
                      >
                        Próximo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => document.getElementById('precos').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
          >
            Quero Resultados Como Esses
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

// Componente Comparação
const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: "Tempo de implementação",
      traditional: "2-4 semanas",
      scalauai: "24-48 horas",
      advantage: "scalauai"
    },
    {
      feature: "Relatórios de desempenho",
      traditional: "Mensais",
      scalauai: "Tempo real",
      advantage: "scalauai"
    },
    {
      feature: "Otimização de campanhas",
      traditional: "Manual, semanal",
      scalauai: "Automática, diária",
      advantage: "scalauai"
    },
    {
      feature: "Transparência de dados",
      traditional: "Limitada",
      scalauai: "Total",
      advantage: "scalauai"
    },
    {
      feature: "Garantia de resultados",
      traditional: "Não oferece",
      scalauai: "30 dias",
      advantage: "scalauai"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Por Que Escolher a Scala Uai?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Compare nossa abordagem com agências tradicionais
          </p>
        </div>

        <Card className="shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="px-6 py-4 text-left text-gray-900 dark:text-white">Característica</th>
                  <th className="px-6 py-4 text-center text-gray-900 dark:text-white">Agências Tradicionais</th>
                  <th className="px-6 py-4 text-center text-gray-900 dark:text-white">Scala Uai</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr 
                    key={index}
                    className={`${
                      index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800/50'
                    }`}
                  >
                    <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">
                      {item.traditional}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <span className="text-green-600 font-semibold mr-2">
                          {item.scalauai}
                        </span>
                        {item.advantage === 'scalauai' && (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Enquanto agências tradicionais cobram a partir de R$ 1.500/mês para gestão, 
            nós cobramos a partir de R$ 197/mês com resultados superiores.
          </p>
          <Button 
            size="lg"
            onClick={() => document.getElementById('precos').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
          >
            Começar Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

// Componente Sobre/Missão
const MissionSection = () => {
  return (
    <section id="sobre" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Transformamos PMEs em Potências Digitais
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Nossa missão é clara: acelerar o crescimento de empresas que faturam a partir de R$ 20 mil/mês, transformando-as em referências digitais em seus mercados. Combinamos tecnologia de ponta, automação inteligente e estratégias comprovadas para entregar resultados que realmente importam: mais clientes, mais vendas, mais lucro.
        </p>
      </div>
    </section>
  )
}

// Botão WhatsApp Flutuante
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}

// Componente Principal App Atualizado
export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <ComparisonSection />
      <MissionSection />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

