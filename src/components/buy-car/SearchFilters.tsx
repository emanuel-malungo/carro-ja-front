import { useState } from 'react'
import { Search, Filter, X, ChevronDown } from 'react-feather'

interface FilterState {
  marca: string
  modelo: string
  precoMin: string
  precoMax: string
  anoMin: string
  anoMax: string
  combustivel: string
  transmissao: string
  quilometragem: string
  cor: string
  cidade: string
}

export default function SearchFilters() {
  const [filters, setFilters] = useState<FilterState>({
    marca: '',
    modelo: '',
    precoMin: '',
    precoMax: '',
    anoMin: '',
    anoMax: '',
    combustivel: '',
    transmissao: '',
    quilometragem: '',
    cor: '',
    cidade: ''
  })

  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const marcas = [
    'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Toyota', 'Honda', 
    'Ford', 'Opel', 'Peugeot', 'Renault', 'Fiat', 'Tesla'
  ]

  const combustiveis = ['Gasolina', 'Diesel', 'Híbrido', 'Elétrico', 'GPL']
  const transmissoes = ['Manual', 'Automático', 'Semi-automático']
  const quilometragens = ['0-50.000', '50.000-100.000', '100.000-150.000', '150.000+']
  const cores = ['Branco', 'Preto', 'Prata', 'Azul', 'Vermelho', 'Cinzento', 'Verde', 'Amarelo']
  const cidades = ['Lisboa', 'Porto', 'Coimbra', 'Braga', 'Faro', 'Aveiro', 'Setúbal', 'Leiria']

  const handleInputChange = (field: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }))
  }

  const clearFilters = () => {
    setFilters({
      marca: '',
      modelo: '',
      precoMin: '',
      precoMax: '',
      anoMin: '',
      anoMax: '',
      combustivel: '',
      transmissao: '',
      quilometragem: '',
      cor: '',
      cidade: ''
    })
  }

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Pesquisar marca, modelo..."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Marca */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Marca</label>
        <select
          value={filters.marca}
          onChange={(e) => handleInputChange('marca', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          title="Selecionar marca"
          aria-label="Marca do carro"
        >
          <option value="">Todas as marcas</option>
          {marcas.map(marca => (
            <option key={marca} value={marca}>{marca}</option>
          ))}
        </select>
      </div>

      {/* Preço */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Preço (€)</label>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="number"
            placeholder="Mín"
            value={filters.precoMin}
            onChange={(e) => handleInputChange('precoMin', e.target.value)}
            className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="number"
            placeholder="Máx"
            value={filters.precoMax}
            onChange={(e) => handleInputChange('precoMax', e.target.value)}
            className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Ano */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Ano</label>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="number"
            placeholder="De"
            value={filters.anoMin}
            onChange={(e) => handleInputChange('anoMin', e.target.value)}
            className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="number"
            placeholder="Até"
            value={filters.anoMax}
            onChange={(e) => handleInputChange('anoMax', e.target.value)}
            className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Combustível */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Combustível</label>
        <select
          value={filters.combustivel}
          onChange={(e) => handleInputChange('combustivel', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          title="Selecionar combustível"
          aria-label="Tipo de combustível"
        >
          <option value="">Todos</option>
          {combustiveis.map(combustivel => (
            <option key={combustivel} value={combustivel}>{combustivel}</option>
          ))}
        </select>
      </div>

      {/* Transmissão */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Transmissão</label>
        <select
          value={filters.transmissao}
          onChange={(e) => handleInputChange('transmissao', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          title="Selecionar transmissão"
          aria-label="Tipo de transmissão"
        >
          <option value="">Todas</option>
          {transmissoes.map(transmissao => (
            <option key={transmissao} value={transmissao}>{transmissao}</option>
          ))}
        </select>
      </div>

      {/* Quilometragem */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Quilometragem (km)</label>
        <select
          value={filters.quilometragem}
          onChange={(e) => handleInputChange('quilometragem', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          title="Selecionar quilometragem"
          aria-label="Faixa de quilometragem"
        >
          <option value="">Todas</option>
          {quilometragens.map(km => (
            <option key={km} value={km}>{km}</option>
          ))}
        </select>
      </div>

      {/* Cor */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Cor</label>
        <select
          value={filters.cor}
          onChange={(e) => handleInputChange('cor', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          title="Selecionar cor"
          aria-label="Cor do carro"
        >
          <option value="">Todas</option>
          {cores.map(cor => (
            <option key={cor} value={cor}>{cor}</option>
          ))}
        </select>
      </div>

      {/* Cidade */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Localização</label>
        <select
          value={filters.cidade}
          onChange={(e) => handleInputChange('cidade', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          title="Selecionar cidade"
          aria-label="Cidade"
        >
          <option value="">Todas as cidades</option>
          {cidades.map(cidade => (
            <option key={cidade} value={cidade}>{cidade}</option>
          ))}
        </select>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors duration-300">
          Aplicar Filtros
        </button>
        <button 
          onClick={clearFilters}
          className="w-full border-2 border-gray-300 hover:border-gray-400 text-gray-700 py-3 rounded-xl font-semibold transition-colors duration-300"
        >
          Limpar Filtros
        </button>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="w-full bg-white border border-gray-300 rounded-xl p-4 flex items-center justify-between shadow-sm"
        >
          <div className="flex items-center">
            <Filter className="w-5 h-5 text-gray-600 mr-2" />
            <span className="font-semibold">Filtros</span>
          </div>
          <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${showMobileFilters ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Desktop Filters */}
      <div className="hidden lg:block bg-white rounded-2xl p-6 shadow-lg sticky top-24">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Filtros</h3>
          <Filter className="w-5 h-5 text-gray-600" />
        </div>
        <FilterContent />
      </div>

      {/* Mobile Filters Modal */}
      {showMobileFilters && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-3xl p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Filtros</h3>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </>
  )
}
