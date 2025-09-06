import { useState } from 'react'
import { Star, Heart, Calendar, Users, Zap, Settings, ArrowRight, Grid, List, MapPin } from 'react-feather'

interface RentalCar {
  id: number
  name: string
  brand: string
  category: string
  image: string
  images: string[]
  dailyPrice: string
  weeklyPrice: string
  monthlyPrice: string
  rating: number
  reviews: number
  fuel: string
  transmission: string
  seats: number
  doors: number
  location: string
  features: string[]
  isLiked: boolean
  availability: string
  minAge: number
  deposit: string
}

export default function RentalListing() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('popular')
  const [likedCars, setLikedCars] = useState<Set<number>>(new Set())

  const cars: RentalCar[] = [
    {
      id: 1,
      name: 'Volkswagen Golf 1.6 TDI',
      brand: 'Volkswagen',
      category: 'Compacto',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      images: ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'],
      dailyPrice: '€35',
      weeklyPrice: '€210',
      monthlyPrice: '€750',
      rating: 4.8,
      reviews: 156,
      fuel: 'Diesel',
      transmission: 'Manual',
      seats: 5,
      doors: 5,
      location: 'Lisboa Centro',
      features: ['AC', 'Bluetooth', 'USB', 'Direção Assistida'],
      isLiked: false,
      availability: 'Disponível agora',
      minAge: 21,
      deposit: '€200'
    },
    {
      id: 2,
      name: 'BMW Serie 1 118i',
      brand: 'BMW',
      category: 'Premium',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      images: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'],
      dailyPrice: '€65',
      weeklyPrice: '€390',
      monthlyPrice: '€1400',
      rating: 4.9,
      reviews: 203,
      fuel: 'Gasolina',
      transmission: 'Automático',
      seats: 5,
      doors: 5,
      location: 'Aeroporto Lisboa',
      features: ['GPS', 'Couro', 'Bluetooth', 'Controlo Cruzeiro'],
      isLiked: false,
      availability: 'Disponível agora',
      minAge: 23,
      deposit: '€400'
    },
    {
      id: 3,
      name: 'Toyota Corolla Hybrid',
      brand: 'Toyota',
      category: 'Económico',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      images: ['https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'],
      dailyPrice: '€42',
      weeklyPrice: '€252',
      monthlyPrice: '€900',
      rating: 4.7,
      reviews: 128,
      fuel: 'Híbrido',
      transmission: 'Automático',
      seats: 5,
      doors: 4,
      location: 'Porto Centro',
      features: ['Híbrido', 'AC', 'Bluetooth', 'Câmara Traseira'],
      isLiked: false,
      availability: 'Disponível amanhã',
      minAge: 21,
      deposit: '€250'
    },
    {
      id: 4,
      name: 'Tesla Model 3 Standard',
      brand: 'Tesla',
      category: 'Elétrico',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      images: ['https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'],
      dailyPrice: '€95',
      weeklyPrice: '€570',
      monthlyPrice: '€2000',
      rating: 4.9,
      reviews: 187,
      fuel: 'Elétrico',
      transmission: 'Automático',
      seats: 5,
      doors: 4,
      location: 'Lisboa Tejo',
      features: ['Autopilot', 'Supercharging', 'Premium Audio', 'OTA Updates'],
      isLiked: false,
      availability: 'Disponível agora',
      minAge: 25,
      deposit: '€800'
    },
    {
      id: 5,
      name: 'Mercedes-Benz A180',
      brand: 'Mercedes-Benz',
      category: 'Premium',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      images: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'],
      dailyPrice: '€72',
      weeklyPrice: '€432',
      monthlyPrice: '€1550',
      rating: 4.8,
      reviews: 142,
      fuel: 'Gasolina',
      transmission: 'Automático',
      seats: 5,
      doors: 5,
      location: 'Coimbra',
      features: ['MBUX', 'LED Matrix', 'Couro', 'Wireless Charging'],
      isLiked: false,
      availability: 'Disponível agora',
      minAge: 23,
      deposit: '€450'
    },
    {
      id: 6,
      name: 'Ford Focus 1.0 EcoBoost',
      brand: 'Ford',
      category: 'Compacto',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      images: ['https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'],
      dailyPrice: '€38',
      weeklyPrice: '€228',
      monthlyPrice: '€820',
      rating: 4.6,
      reviews: 98,
      fuel: 'Gasolina',
      transmission: 'Manual',
      seats: 5,
      doors: 5,
      location: 'Braga',
      features: ['SYNC 3', 'AC', 'Sensores Estacionamento', 'Bluetooth'],
      isLiked: false,
      availability: 'Disponível agora',
      minAge: 21,
      deposit: '€220'
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
    { value: 'popular', label: 'Mais Popular' },
    { value: 'price-low', label: 'Preço: Menor para Maior' },
    { value: 'price-high', label: 'Preço: Maior para Menor' },
    { value: 'rating', label: 'Melhor Avaliação' },
    { value: 'category', label: 'Categoria' }
  ]

  const GridCard = ({ car }: { car: RentalCar }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => toggleLike(car.id)}
            className={`p-2 rounded-full transition-colors ${
              likedCars.has(car.id) 
                ? 'bg-red-500 text-white' 
                : 'bg-white text-gray-600 hover:text-red-500'
            }`}
            aria-label="Adicionar aos favoritos"
            title="Adicionar aos favoritos"
          >
            <Heart className={`w-4 h-4 ${likedCars.has(car.id) ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Availability */}
        <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-lg text-xs font-semibold">
          {car.availability}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <div className="text-xs text-green-600 font-semibold mb-2 uppercase tracking-wide">
          {car.category}
        </div>

        {/* Title and Location */}
        <h3 className="text-xl font-bold text-gray-900 mb-1">{car.name}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          {car.location}
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
            <Zap className="w-4 h-4 mr-2" />
            {car.fuel}
          </div>
          <div className="flex items-center text-gray-600">
            <Settings className="w-4 h-4 mr-2" />
            {car.transmission}
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            {car.seats} lugares
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            {car.minAge}+ anos
          </div>
        </div>

        {/* Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {car.features.slice(0, 3).map((feature, index) => (
              <span key={index} className="bg-green-50 text-green-700 px-2 py-1 rounded-lg text-xs">
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

        {/* Pricing */}
        <div className="mb-4">
          <div className="flex items-baseline mb-1">
            <span className="text-2xl font-bold text-green-600">{car.dailyPrice}</span>
            <span className="text-sm text-gray-500 ml-1">/dia</span>
          </div>
          <div className="text-sm text-gray-600">
            {car.weeklyPrice}/sem • {car.monthlyPrice}/mês
          </div>
          <div className="text-xs text-gray-500 mt-1">
            Depósito: {car.deposit}
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group">
          Alugar Agora
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  )

  const ListCard = ({ car }: { car: RentalCar }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="relative md:w-80 h-48 md:h-auto overflow-hidden">
          <img 
            src={car.image} 
            alt={car.name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
          
          {/* Availability */}
          <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-lg text-xs font-semibold">
            {car.availability}
          </div>

          {/* Action Button */}
          <div className="absolute top-4 right-4">
            <button
              onClick={() => toggleLike(car.id)}
              className={`p-2 rounded-full transition-colors ${
                likedCars.has(car.id) 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white text-gray-600 hover:text-red-500'
              }`}
              aria-label="Adicionar aos favoritos"
              title="Adicionar aos favoritos"
            >
              <Heart className={`w-4 h-4 ${likedCars.has(car.id) ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
            <div className="mb-4 md:mb-0">
              {/* Category */}
              <div className="text-xs text-green-600 font-semibold mb-2 uppercase tracking-wide">
                {car.category}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{car.name}</h3>
              
              {/* Location */}
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                {car.location}
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm font-semibold text-gray-700">{car.rating}</span>
                <span className="ml-1 text-sm text-gray-500">({car.reviews} avaliações)</span>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-3xl font-bold text-green-600 mb-1">{car.dailyPrice}</div>
              <div className="text-sm text-gray-600 mb-1">/dia</div>
              <div className="text-sm text-gray-500 mb-3">
                {car.weeklyPrice}/sem • {car.monthlyPrice}/mês
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl font-semibold transition-colors">
                Alugar Agora
              </button>
            </div>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="flex items-center text-gray-600">
              <Zap className="w-4 h-4 mr-2" />
              <span>{car.fuel}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Settings className="w-4 h-4 mr-2" />
              <span>{car.transmission}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="w-4 h-4 mr-2" />
              <span>{car.seats} lugares</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{car.minAge}+ anos</span>
            </div>
          </div>

          {/* Features and Deposit */}
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex flex-wrap gap-2 mb-2 md:mb-0">
              {car.features.map((feature, index) => (
                <span key={index} className="bg-green-50 text-green-700 px-3 py-1 rounded-lg text-sm">
                  {feature}
                </span>
              ))}
            </div>
            <div className="text-sm text-gray-500">
              Depósito: {car.deposit}
            </div>
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
            Carros para Aluguel
          </h2>
          <p className="text-gray-600">
            {cars.length} carros disponíveis
          </p>
        </div>

        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
              aria-label="Visualização em grade"
              title="Visualização em grade"
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 transition-colors ${
                viewMode === 'list' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
              aria-label="Visualização em lista"
              title="Visualização em lista"
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
                  ? 'bg-green-600 text-white' 
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
