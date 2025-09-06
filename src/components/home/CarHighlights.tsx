import { Star, ArrowRight } from 'react-feather'

interface Car {
  id: number
  name: string
  image: string
  price: string
  rating: number
  reviews: number
  features: string[]
  type: 'venda' | 'aluguel'
  originalPrice?: string
}

export default function CarHighlights() {
  const featuredCars: Car[] = [
    {
      id: 1,
      name: 'BMW Serie 3 2023',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: '€450/dia',
      rating: 4.9,
      reviews: 128,
      features: ['Automático', '5 Lugares', 'Diesel', 'GPS'],
      type: 'aluguel'
    },
    {
      id: 2,
      name: 'Mercedes-Benz C-Class',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: '€35.000',
      originalPrice: '€42.000',
      rating: 4.8,
      reviews: 95,
      features: ['Automático', '5 Lugares', 'Gasolina', 'Couro'],
      type: 'venda'
    },
    {
      id: 3,
      name: 'Audi A4 Premium',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: '€380/dia',
      rating: 4.7,
      reviews: 156,
      features: ['Automático', '5 Lugares', 'Híbrido', 'Premium'],
      type: 'aluguel'
    },
    {
      id: 4,
      name: 'Tesla Model 3',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: '€42.000',
      rating: 4.9,
      reviews: 203,
      features: ['Automático', '5 Lugares', 'Elétrico', 'Autopilot'],
      type: 'venda'
    },
    {
      id: 5,
      name: 'Volkswagen Golf GTI',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: '€280/dia',
      rating: 4.6,
      reviews: 87,
      features: ['Manual', '5 Lugares', 'Gasolina', 'Desportivo'],
      type: 'aluguel'
    },
    {
      id: 6,
      name: 'Range Rover Evoque',
      image: 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: '€48.000',
      originalPrice: '€55.000',
      rating: 4.8,
      reviews: 74,
      features: ['Automático', '5 Lugares', 'Diesel', '4x4'],
      type: 'venda'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Carros em <span className="text-blue-600">Destaque</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descobre a nossa seleção dos melhores carros para venda e aluguer
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold transition-all duration-300">
              Todos
            </button>
            <button className="px-8 py-3 text-gray-600 hover:text-blue-600 font-semibold transition-all duration-300">
              Para Venda
            </button>
            <button className="px-8 py-3 text-gray-600 hover:text-blue-600 font-semibold transition-all duration-300">
              Para Aluguer
            </button>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              {/* Car Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    car.type === 'venda' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {car.type === 'venda' ? 'Venda' : 'Aluguer'}
                  </span>
                </div>
                {car.originalPrice && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-bold">
                    Promoção
                  </div>
                )}
              </div>

              {/* Car Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-semibold text-gray-700">{car.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">({car.reviews} avaliações)</span>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <div>
                    {car.originalPrice && (
                      <span className="text-sm text-gray-400 line-through block">{car.originalPrice}</span>
                    )}
                    <span className="text-2xl font-bold text-blue-600">{car.price}</span>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300 flex items-center group">
                    Ver mais
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Ver Todos os Carros
          </button>
        </div>
      </div>
    </section>
  )
}