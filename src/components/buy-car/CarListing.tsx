import { useState } from 'react'
import { Star, Heart, Share2, Eye, Calendar, Settings, Users, ArrowRight, Grid, List, Zap } from 'react-feather'

interface Car {
  id: number
  name: string
  brand: string
  model: string
  year: number
  price: string
  image: string
  images: string[]
  rating: number
  reviews: number
  mileage: string
  fuel: string
  transmission: string
  seats: number
  color: string
  location: string
  dealer: string
  features: string[]
  isLiked: boolean
  views: number
}

export default function CarListing() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('relevance')
  const [likedCars, setLikedCars] = useState<Set<number>>(new Set())

  const cars: Car[] = [
    {
      id: 1,
      name: 'BMW Serie 3 320d',
      brand: 'BMW',
      model: 'Serie 3',
      year: 2022,
      price: '€35.000',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      images: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'],
      rating: 4.8,
      reviews: 124,
      mileage: '25.000 km',
      fuel: 'Diesel',
      transmission: 'Automático',
      seats: 5,
      color: 'Azul Metálico',
      location: 'Lisboa',
      dealer: 'BMW Lisboa',
      features: ['GPS', 'Couro', 'Teto Solar', 'Sensores Estacionamento'],
      isLiked: false,
      views: 1250
    },
    {
      id: 2,
      name: 'Mercedes-Benz C220d',
      brand: 'Mercedes-Benz',
      model: 'Classe C',
      year: 2021,
      price: '€39.900',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      images: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'],
      rating: 4.9,
      reviews: 98,
      mileage: '18.000 km',
      fuel: 'Diesel',
      transmission: 'Automático',
      seats: 5,
      color: 'Preto',
      location: 'Porto',
      dealer: 'Mercedes Porto',
      features: ['Premium Plus', 'Câmara 360°', 'Assentos Aquecidos', 'Carregamento Wireless'],
      isLiked: false,
      views: 980
    },
    {
      id: 3,
      name: 'Audi A4 2.0 TDI',
      brand: 'Audi',
      model: 'A4',
      year: 2023,
      price: '€42.500',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      images: ['https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'],
      rating: 4.7,
      reviews: 156,
      mileage: '12.000 km',
      fuel: 'Diesel',
      transmission: 'Automático',
      seats: 5,
      color: 'Branco',
      location: 'Coimbra',
      dealer: 'Audi Center',
      features: ['Quattro', 'Virtual Cockpit', 'Matrix LED', 'Assistente Voz'],
      isLiked: false,
      views: 1450
    },
    {
      id: 4,
      name: 'Tesla Model 3 Long Range',
      brand: 'Tesla',
      model: 'Model 3',
      year: 2023,
      price: '€45.000',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      images: ['https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'],
      rating: 4.9,
      reviews: 203,
      mileage: '8.000 km',
      fuel: 'Elétrico',
      transmission: 'Automático',
      seats: 5,
      color: 'Vermelho',
      location: 'Lisboa',
      dealer: 'Tesla Store',
      features: ['Autopilot', 'Supercharging', 'Premium Audio', 'App Mobile'],
      isLiked: false,
      views: 2100
    },
    {
      id: 5,
      name: 'Volkswagen Golf GTI',
      brand: 'Volkswagen',
      model: 'Golf',
      year: 2022,
      price: '€28.900',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      images: ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'],
      rating: 4.6,
      reviews: 87,
      mileage: '32.000 km',
      fuel: 'Gasolina',
      transmission: 'Manual',
      seats: 5,
      color: 'Cinzento',
      location: 'Braga',
      dealer: 'VW Braga',
      features: ['Modo Sport', 'Jantes 18"', 'Sistema Som', 'Controlo Cruzeiro'],
      isLiked: false,
      views: 750
    },
    {
      id: 6,
      name: 'Range Rover Evoque',
      brand: 'Land Rover',
      model: 'Evoque',
      year: 2021,
      price: '€48.000',
      image: 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      images: ['https://images.unsplash.com/photo-1581540222194-0def2dda95b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'],
      rating: 4.8,
      reviews: 74,
      mileage: '28.000 km',
      fuel: 'Diesel',
      transmission: 'Automático',
      seats: 5,
      color: 'Preto',
      location: 'Faro',
      dealer: 'Land Rover Algarve',
      features: ['4x4', 'Terrain Response', 'Pano Roof', 'Meridian Audio'],
      isLiked: false,
      views: 890
    }
  ]

  const toggleLike = (carId: number) => {
    setLikedCars(prev => {
      const newSet = new Set(prev)
      if (newSet.has(carId)) {
        newSet.delete(carId)
      } else {
        newSet.add(carId)
      }
      return newSet
    })
  }

  const sortOptions = [
    { value: 'relevance', label: 'Relevância' },
    { value: 'price-low', label: 'Preço: Menor para Maior' },
    { value: 'price-high', label: 'Preço: Maior para Menor' },
    { value: 'year-new', label: 'Ano: Mais Recente' },
    { value: 'mileage-low', label: 'Menor Quilometragem' },
    { value: 'rating', label: 'Melhor Avaliação' }
  ]

  const GridCard = ({ car }: { car: Car }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 space-y-2">
          <button
            onClick={() => toggleLike(car.id)}
            className={`p-2 rounded-full transition-colors ${
              likedCars.has(car.id) 
                ? 'bg-red-500 text-white' 
                : 'bg-white text-gray-600 hover:text-red-500'
            }`}
          >
            <Heart className={`w-4 h-4 ${likedCars.has(car.id) ? 'fill-current' : ''}`} />
          </button>
          <button 
            className="p-2 bg-white text-gray-600 hover:text-blue-500 rounded-full transition-colors"
            aria-label="Partilhar"
            title="Partilhar carro"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Views */}
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded-lg text-xs flex items-center">
          <Eye className="w-3 h-3 mr-1" />
          {car.views}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{car.name}</h3>
            <p className="text-sm text-gray-500">{car.dealer} • {car.location}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">{car.price}</div>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm font-semibold text-gray-700">{car.rating}</span>
          <span className="ml-1 text-sm text-gray-500">({car.reviews})</span>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            {car.year}
          </div>
          <div className="flex items-center text-gray-600">
            <Settings className="w-4 h-4 mr-2" />
            {car.mileage}
          </div>
          <div className="flex items-center text-gray-600">
            <Zap className="w-4 h-4 mr-2" />
            {car.fuel}
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            {car.seats} lugares
          </div>
        </div>

        {/* Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {car.features.slice(0, 3).map((feature, index) => (
              <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-lg text-xs">
                {feature}
              </span>
            ))}
            {car.features.length > 3 && (
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs">
                +{car.features.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group">
          Ver Detalhes
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  )

  const ListCard = ({ car }: { car: Car }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="relative md:w-80 h-48 md:h-auto overflow-hidden">
          <img 
            src={car.image} 
            alt={car.name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
          
          {/* Action Buttons */}
          <div className="absolute top-4 right-4 space-y-2">
            <button
              onClick={() => toggleLike(car.id)}
              className={`p-2 rounded-full transition-colors ${
                likedCars.has(car.id) 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white text-gray-600 hover:text-red-500'
              }`}
            >
              <Heart className={`w-4 h-4 ${likedCars.has(car.id) ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{car.name}</h3>
              <p className="text-gray-600 mb-2">{car.dealer} • {car.location}</p>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm font-semibold text-gray-700">{car.rating}</span>
                <span className="ml-1 text-sm text-gray-500">({car.reviews} avaliações)</span>
                <span className="ml-4 text-sm text-gray-500 flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  {car.views} visualizações
                </span>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600 mb-2">{car.price}</div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-semibold transition-colors">
                Ver Detalhes
              </button>
            </div>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{car.year}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Settings className="w-4 h-4 mr-2" />
              <span>{car.mileage}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Zap className="w-4 h-4 mr-2" />
              <span>{car.fuel}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="w-4 h-4 mr-2" />
              <span>{car.seats} lugares</span>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {car.features.map((feature, index) => (
              <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm">
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Carros Disponíveis
          </h2>
          <p className="text-gray-600">
            {cars.length} carros encontrados
          </p>
        </div>

        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            title="Ordenar por"
            aria-label="Ordenar resultados por"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>

          {/* View Mode */}
          <div className="flex border border-gray-300 rounded-xl overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 transition-colors ${
                viewMode === 'list' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Cars Grid/List */}
      <div className={
        viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 gap-6' 
          : 'space-y-6'
      }>
        {cars.map((car) => 
          viewMode === 'grid' 
            ? <GridCard key={car.id} car={car} />
            : <ListCard key={car.id} car={car} />
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center mt-12">
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Anterior
          </button>
          
          {[1, 2, 3, 4, 5].map(page => (
            <button 
              key={page}
              className={`px-4 py-2 rounded-lg transition-colors ${
                page === 1 
                  ? 'bg-blue-600 text-white' 
                  : 'border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
          
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Próximo
          </button>
        </div>
      </div>
    </section>
  )
}
