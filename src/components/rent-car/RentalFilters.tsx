import { useState } from 'react'
import { Search, Filter, X, ChevronDown } from 'react-feather'

interface RentalFilterState {
  localRetirada: string
  localDevolucao: string
  dataRetirada: string
  horaRetirada: string
  dataDevolucao: string
  horaDevolucao: string
  categoria: string
  marca: string
  transmissao: string
  combustivel: string
  lugares: string
  precoMaxDia: string
}

export default function RentalFilters() {
  const [filters, setFilters] = useState<RentalFilterState>({
    localRetirada: '',
    localDevolucao: '',
    dataRetirada: '',
    horaRetirada: '',
    dataDevolucao: '',
    horaDevolucao: '',
    categoria: '',
    marca: '',
    transmissao: '',
    combustivel: '',
    lugares: '',
    precoMaxDia: ''
  })

  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const locais = [
    'Aeroporto de Lisboa', 'Centro de Lisboa', 'Aeroporto do Porto', 'Centro do Porto',
    'Aeroporto de Faro', 'Centro de Coimbra', 'Estação de Braga', 'Centro de Aveiro'
  ]

  const categorias = ['Económico', 'Compacto', 'Médio', 'Premium', 'SUV', 'Luxo', 'Desportivo']
  const marcas = ['BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Toyota', 'Honda', 'Ford', 'Opel']
  const transmissoes = ['Manual', 'Automático']
  const combustiveis = ['Gasolina', 'Diesel', 'Híbrido', 'Elétrico']
  const lugares = ['2', '4', '5', '7', '9+']

  const horas = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, '0')
    return `${hour}:00`
  })

  const handleInputChange = (field: keyof RentalFilterState, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }))
  }

  const clearFilters = () => {
    setFilters({
      localRetirada: '',
      localDevolucao: '',
      dataRetirada: '',
      horaRetirada: '',
      dataDevolucao: '',
      horaDevolucao: '',
      categoria: '',
      marca: '',
      transmissao: '',
      combustivel: '',
      lugares: '',
      precoMaxDia: ''
    })
  }

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Quick Search */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl border border-green-200">
        <h3 className="font-semibold text-green-800 mb-3 flex items-center">
          <Search className="w-4 h-4 mr-2" />
          Pesquisa Rápida
        </h3>
        
        {/* Local de Retirada */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Local de Retirada</label>
          <select
            value={filters.localRetirada}
            onChange={(e) => handleInputChange('localRetirada', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
            title="Selecionar local de retirada"
            aria-label="Local de retirada"
          >
            <option value="">Selecionar local</option>
            {locais.map(local => (
              <option key={local} value={local}>{local}</option>
            ))}
          </select>
        </div>

        {/* Local de Devolução */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Local de Devolução</label>
          <select
            value={filters.localDevolucao}
            onChange={(e) => handleInputChange('localDevolucao', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
            title="Selecionar local de devolução"
            aria-label="Local de devolução"
          >
            <option value="">Mesmo local</option>
            {locais.map(local => (
              <option key={local} value={local}>{local}</option>
            ))}
          </select>
        </div>

        {/* Data e Hora de Retirada */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Data Retirada</label>
            <input
              type="date"
              value={filters.dataRetirada}
              onChange={(e) => handleInputChange('dataRetirada', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              min={new Date().toISOString().split('T')[0]}
              title="Data de retirada"
              aria-label="Data de retirada"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Hora</label>
            <select
              value={filters.horaRetirada}
              onChange={(e) => handleInputChange('horaRetirada', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              title="Selecionar hora de retirada"
              aria-label="Hora de retirada"
            >
              <option value="">10:00</option>
              {horas.map(hora => (
                <option key={hora} value={hora}>{hora}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Data e Hora de Devolução */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Data Devolução</label>
            <input
              type="date"
              value={filters.dataDevolucao}
              onChange={(e) => handleInputChange('dataDevolucao', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              min={filters.dataRetirada || new Date().toISOString().split('T')[0]}
              title="Data de devolução"
              aria-label="Data de devolução"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Hora</label>
            <select
              value={filters.horaDevolucao}
              onChange={(e) => handleInputChange('horaDevolucao', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              title="Selecionar hora de devolução"
              aria-label="Hora de devolução"
            >
              <option value="">10:00</option>
              {horas.map(hora => (
                <option key={hora} value={hora}>{hora}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Categoria */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Categoria</label>
        <select
          value={filters.categoria}
          onChange={(e) => handleInputChange('categoria', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
          title="Selecionar categoria"
          aria-label="Categoria do carro"
        >
          <option value="">Todas as categorias</option>
          {categorias.map(categoria => (
            <option key={categoria} value={categoria}>{categoria}</option>
          ))}
        </select>
      </div>

      {/* Marca */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Marca</label>
        <select
          value={filters.marca}
          onChange={(e) => handleInputChange('marca', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
          title="Selecionar marca"
          aria-label="Marca do carro"
        >
          <option value="">Todas as marcas</option>
          {marcas.map(marca => (
            <option key={marca} value={marca}>{marca}</option>
          ))}
        </select>
      </div>

      {/* Transmissão */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Transmissão</label>
        <select
          value={filters.transmissao}
          onChange={(e) => handleInputChange('transmissao', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
          title="Selecionar transmissão"
          aria-label="Tipo de transmissão"
        >
          <option value="">Todas</option>
          {transmissoes.map(transmissao => (
            <option key={transmissao} value={transmissao}>{transmissao}</option>
          ))}
        </select>
      </div>

      {/* Combustível */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Combustível</label>
        <select
          value={filters.combustivel}
          onChange={(e) => handleInputChange('combustivel', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
          title="Selecionar combustível"
          aria-label="Tipo de combustível"
        >
          <option value="">Todos</option>
          {combustiveis.map(combustivel => (
            <option key={combustivel} value={combustivel}>{combustivel}</option>
          ))}
        </select>
      </div>

      {/* Lugares */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Número de Lugares</label>
        <select
          value={filters.lugares}
          onChange={(e) => handleInputChange('lugares', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
          title="Selecionar número de lugares"
          aria-label="Número de lugares"
        >
          <option value="">Qualquer</option>
          {lugares.map(lugar => (
            <option key={lugar} value={lugar}>{lugar} lugares</option>
          ))}
        </select>
      </div>

      {/* Preço Máximo por Dia */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Preço Máximo por Dia (€)
        </label>
        <input
          type="range"
          min="25"
          max="500"
          step="25"
          value={filters.precoMaxDia || "500"}
          onChange={(e) => handleInputChange('precoMaxDia', e.target.value)}
          className="w-full mb-2"
          title="Preço máximo por dia"
          aria-label="Preço máximo por dia"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>€25</span>
          <span className="font-semibold">€{filters.precoMaxDia || "500"}</span>
          <span>€500+</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-colors duration-300">
          Pesquisar Carros
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
            <span className="font-semibold">Filtros de Aluguel</span>
          </div>
          <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${showMobileFilters ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Desktop Filters */}
      <div className="hidden lg:block bg-white rounded-2xl p-6 shadow-lg sticky top-24 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Filtros de Aluguel</h3>
          <Filter className="w-5 h-5 text-gray-600" />
        </div>
        <FilterContent />
      </div>

      {/* Mobile Filters Modal */}
      {showMobileFilters && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-3xl p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Filtros de Aluguel</h3>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
                title="Fechar filtros"
                aria-label="Fechar filtros"
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
