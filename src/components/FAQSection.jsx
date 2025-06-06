import React, { useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react'

// Componente FAQ
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      question: "Qual o investimento mínimo para começar?",
      answer: "O investimento mínimo para começar depende do seu objetivo e mercado. Para pequenas empresas, recomendamos um investimento mínimo de R$ 500/mês em anúncios além do valor do plano escolhido. Para empresas médias, o ideal é partir de R$ 1.500/mês para obter resultados consistentes. Lembre-se que além do valor investido em anúncios, aplicamos uma taxa de gestão de 8% sobre esse valor."
    },
    {
      question: "O que é uma plataforma de anúncio?",
      answer: "Uma plataforma de anúncio é um sistema online que permite criar, gerenciar e veicular campanhas publicitárias digitais. Exemplos incluem Facebook Ads (que abrange Instagram e WhatsApp), Google Ads (que inclui busca, display e YouTube), TikTok Ads, LinkedIn Ads, entre outras. Cada plataforma possui públicos, formatos e objetivos específicos, e nossa equipe seleciona as mais adequadas para o seu negócio com base nos seus objetivos e público-alvo."
    },
    {
      question: "O que é taxa de gestão?",
      answer: "A taxa de gestão é um valor de 8% calculado sobre o investimento mensal em anúncios. Esta taxa cobre os custos operacionais da plataforma, ferramentas de automação, análise de dados e o trabalho especializado da nossa equipe para otimizar suas campanhas. Por exemplo, se você investir R$ 1.000/mês em anúncios, a taxa de gestão será de R$ 80/mês, totalizando R$ 1.080 + o valor do plano escolhido. Esta taxa garante que suas campanhas sejam constantemente monitoradas e otimizadas para máximo desempenho."
    },
    {
      question: "O que é taxa de serviço?",
      answer: "A taxa de serviço de 8% é aplicada sobre o valor investido em anúncios para cobrir os custos operacionais da plataforma e garantir a qualidade do serviço. Exemplo prático: Investimento em anúncios: R$ 1.000/mês, Taxa de serviço (8%): R$ 80/mês, Total cobrado: Plano escolhido + R$ 80."
    },
    {
      question: "O que é estratégia omnichannel?",
      answer: "Estratégia omnichannel é uma abordagem integrada que conecta todos os pontos de contato com o cliente, criando uma experiência unificada e consistente entre redes sociais, site, email e WhatsApp."
    },
    {
      question: "O que é ROAS?",
      answer: "ROAS (Return on Ad Spend) é a métrica que mostra quanto você ganha para cada real investido em anúncios. Por exemplo, ROAS 4:1 significa que para cada R$ 1 investido, você ganha R$ 4 de volta."
    },
    {
      question: "Quais plataformas de anúncios vocês trabalham?",
      answer: "Trabalhamos principalmente com Facebook Ads, Instagram Ads e Google Ads. No plano Crescimento Exponencial, também incluímos TikTok Ads, LinkedIn Ads e YouTube Ads."
    },
    {
      question: "Quanto tempo para ver os primeiros resultados?",
      answer: "Os primeiros resultados aparecem entre 7-14 dias. Resultados consistentes e otimizados geralmente são alcançados em 30 dias. Oferecemos garantia de 30 dias ou seu dinheiro de volta."
    },
    {
      question: "Vocês trabalham com que tipos de negócio?",
      answer: "Atendemos desde pequenos restaurantes até grandes empresas. Nossos especialistas adaptam as estratégias para e-commerce, serviços locais, clínicas, academias, escolas e muito mais."
    },
    {
      question: "Como funciona o suporte?",
      answer: "Oferecemos suporte via WhatsApp direto com nossa equipe. No plano Starter e Aceleração é suporte padrão, no Crescimento Exponencial é suporte prioritário com resposta em até 2 horas."
    },
    {
      question: "O que é um consultor dedicado?",
      answer: "No plano Crescimento Exponencial, você tem acesso a um consultor especializado exclusivo para sua conta. Ele conhece profundamente seu negócio, acompanha seus resultados semanalmente e desenvolve estratégias personalizadas para acelerar seu crescimento."
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim, você pode cancelar a qualquer momento sem multas ou taxas adicionais. Recomendamos pelo menos 60 dias para ver os resultados completos da estratégia."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <Button 
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            className="bg-green-600 hover:bg-green-700"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FAQSection

