import React from 'react'
import { Button } from './ui/button'
import { Facebook, Instagram, Linkedin, Twitter, MessageCircle } from 'lucide-react'

// Componente Footer com Redes Sociais
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold">Scala Uai</span>
            </div>
            <p className="text-gray-400 mb-4">
              Gestão e análise de tráfego pago para PMEs
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com/scalauai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com/scalauai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://linkedin.com/company/scalauai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://twitter.com/scalauai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center hover:bg-sky-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Facebook Ads</li>
              <li>Google Ads</li>
              <li>Instagram Ads</li>
              <li>TikTok Ads</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Sobre Nós</li>
              <li>Casos de Sucesso</li>
              <li>Blog</li>
              <li>Carreira</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-400">
              <div>
                <span className="block">Suporte:</span>
                <a 
                  href="mailto:suporte.tech@scalauai.com"
                  className="text-green-400 hover:text-green-300"
                >
                  suporte.tech@scalauai.com
                </a>
              </div>
              <div>
                <span className="block">WhatsApp:</span>
                <a 
                  href="https://wa.me/5511999999999"
                  className="text-green-400 hover:text-green-300"
                >
                  (11) 99999-9999
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Scala Uai. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

