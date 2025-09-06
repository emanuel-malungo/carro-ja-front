import { Star, Clock, ArrowRight } from 'react-feather'

interface FeaturedDeal {
  id: number
  title: string
  description: string
  image: string
  originalPrice: string
  salePrice: string
  discount: string
  timeLeft: string
  rating: number
  features: string[]
}

export default function FeaturedDeals() {
  const deals: FeaturedDeal[] = [
    {
      id: 1,
      title: 'BMW Serie 3 2022',
      description: 'Sedã premium em excelente estado, apenas 25.000 km',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      originalPrice: '€42.000',
      salePrice: '€35.000',
      discount: '17%',
      timeLeft: '2 dias',
      rating: 4.9,
      features: ['Automático', 'Diesel', 'GPS', 'Couro']
    },
    {
      id: 2,
      title: 'Mercedes-Benz C-Class 2021',
      description: 'Elegância e performance em um só carro',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      originalPrice: '€48.000',
      salePrice: '€39.900',
      discount: '17%',
      timeLeft: '5 dias',
      rating: 4.8,
      features: ['Automático', 'Gasolina', 'Premium', 'Teto Solar']
    },
    {
      id: 3,
      title: 'Tesla Model 3 2023',
      description: 'Tecnologia de ponta e zero emissões',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      originalPrice: '€52.000',
      salePrice: '€45.000',
      discount: '13%',
      timeLeft: '1 dia',
      rating: 4.9,
      features: ['Elétrico', 'Autopilot', 'Premium', 'Super Carregamento']
    }
  ]

  return (
    <section className="mb-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Ofertas em <span className="text-red-600">Destaque</span>
          </h2>
          <p className="text-gray-600">
            Promoções limitadas com os melhores preços
          </p>
        </div>
        <button className="hidden md:flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors">
          Ver todas
          <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <div key={deal.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group relative">
            {/* Discount Badge */}
            <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              -{deal.discount} OFF
            </div>
            
            {/* Time Left Badge */}
            <div className="absolute top-4 right-4 z-10 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {deal.timeLeft}
            </div>

            {/* Car Image */}
            <div className="relative overflow-hidden h-48">
              <img 
                src={deal.image} 
                alt={deal.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Rating */}
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-semibold text-gray-700">{deal.rating}</span>
                </div>
                <span className="ml-2 text-sm text-gray-500">Avaliação</span>
              </div>

              {/* Title and Description */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{deal.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{deal.description}</p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {deal.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-lg text-gray-400 line-through block">{deal.originalPrice}</span>
                  <span className="text-2xl font-bold text-red-600">{deal.salePrice}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Economia</div>
                  <div className="text-lg font-bold text-green-600">
                    €{(parseInt(deal.originalPrice.replace('€', '').replace('.', '')) - 
                       parseInt(deal.salePrice.replace('€', '').replace('.', ''))).toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group shadow-lg">
                Aproveitar Oferta
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View All Button */}
      <div className="md:hidden text-center mt-6">
        <button className="text-blue-600 hover:text-blue-700 font-semibold transition-colors flex items-center mx-auto">
          Ver todas as ofertas
          <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </section>
  )
}
