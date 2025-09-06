import { Star, ArrowRight, Users, Zap, Settings } from 'react-feather'

interface PopularRental {
  id: number
  name: string
  category: string
  image: string
  dailyPrice: string
  weeklyPrice: string
  rating: number
  reviews: number
  features: string[]
  savings: string
  isPopular: boolean
}

export default function PopularRentals() {
  const rentals: PopularRental[] = [
    {
      id: 1,
      name: 'Volkswagen Golf',
      category: 'Compacto',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      dailyPrice: '€35',
      weeklyPrice: '€210',
      rating: 4.8,
      reviews: 156,
      features: ['Manual', '5 Lugares', 'AC', 'Bluetooth'],
      savings: '€35/semana',
      isPopular: true
    },
    {
      id: 2,
      name: 'BMW Serie 1',
      category: 'Premium',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      dailyPrice: '€65',
      weeklyPrice: '€390',
      rating: 4.9,
      reviews: 203,
      features: ['Automático', '5 Lugares', 'GPS', 'Couro'],
      savings: '€65/semana',
      isPopular: true
    },
    {
      id: 3,
      name: 'Toyota Corolla',
      category: 'Económico',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      dailyPrice: '€28',
      weeklyPrice: '€168',
      rating: 4.7,
      reviews: 128,
      features: ['Automático', '5 Lugares', 'AC', 'USB'],
      savings: '€28/semana',
      isPopular: false
    },
    {
      id: 4,
      name: 'Tesla Model 3',
      category: 'Elétrico',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      dailyPrice: '€95',
      weeklyPrice: '€570',
      rating: 4.9,
      reviews: 187,
      features: ['Elétrico', 'Autopilot', 'Premium', 'Supercharging'],
      savings: '€95/semana',
      isPopular: true
    }
  ]

  return (
    <section className="mb-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Aluguéis <span className="text-green-600">Populares</span>
          </h2>
          <p className="text-gray-600">
            Os carros mais procurados pelos nossos clientes
          </p>
        </div>
        <button className="hidden md:flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors">
          Ver todos
          <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>

      {/* Rentals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {rentals.map((rental) => (
          <div key={rental.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group relative">
            {/* Popular Badge */}
            {rental.isPopular && (
              <div className="absolute top-4 left-4 z-10 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                Popular
              </div>
            )}

            {/* Car Image */}
            <div className="relative overflow-hidden h-48">
              <img 
                src={rental.image} 
                alt={rental.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Category */}
              <div className="text-xs text-green-600 font-semibold mb-2 uppercase tracking-wide">
                {rental.category}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{rental.name}</h3>

              {/* Rating */}
              <div className="flex items-center mb-3">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm font-semibold text-gray-700">{rental.rating}</span>
                <span className="ml-1 text-sm text-gray-500">({rental.reviews})</span>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-1 mb-4 text-xs">
                {rental.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="mb-4">
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-green-600">{rental.dailyPrice}</span>
                  <span className="text-sm text-gray-500 ml-1">/dia</span>
                </div>
                <div className="text-sm text-gray-600">
                  {rental.weeklyPrice}/semana 
                  <span className="text-green-600 font-semibold ml-1">
                    (Poupa {rental.savings})
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group text-sm shadow-lg">
                Alugar Agora
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View All Button */}
      <div className="md:hidden text-center mt-6">
        <button className="text-green-600 hover:text-green-700 font-semibold transition-colors flex items-center mx-auto">
          Ver todos os carros
          <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 mt-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Porque Escolher o Nosso Aluguel?
          </h3>
          <p className="text-gray-600">
            Oferecemos a melhor experiência de aluguel de carros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Reserva Rápida</h4>
            <p className="text-sm text-gray-600">
              Reserve em menos de 5 minutos online ou por telefone
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Sem Complicações</h4>
            <p className="text-sm text-gray-600">
              Processo simples, sem taxas ocultas ou surpresas
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Suporte 24/7</h4>
            <p className="text-sm text-gray-600">
              Assistência completa durante todo o período de aluguel
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
