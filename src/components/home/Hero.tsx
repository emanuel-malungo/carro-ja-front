import React from 'react'
import { Search, ArrowRight } from 'react-feather'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 hero-bg" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-blue-900/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Encontra o teu
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              próximo carro
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Aluga de forma simples e rápida. Centenas de carros disponíveis para venda e aluguer.
          </p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-2xl p-2 shadow-2xl max-w-3xl mx-auto mb-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded-xl">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input 
                type="text" 
                placeholder="Marca, modelo ou localização..."
                className="flex-1 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
              />
            </div>
            
            <select 
              className="px-4 py-3 bg-gray-50 rounded-xl text-gray-700 focus:outline-none md:w-48"
              title="Selecionar tipo de serviço"
              aria-label="Tipo de serviço"
            >
              <option>Tipo</option>
              <option>Comprar</option>
              <option>Alugar</option>
            </select>
            
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group shadow-lg">
              Procurar
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              Ver Carros Disponíveis
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
              Como Funciona
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm md:text-base">Carros Disponíveis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">1000+</div>
              <div className="text-gray-300 text-sm md:text-base">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm md:text-base">Suporte</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

