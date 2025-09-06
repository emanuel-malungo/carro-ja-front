import { Shield, Clock, Headphones, DollarSign, Award, Truck } from 'react-feather'

interface Benefit {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

export default function Benefits() {
  const benefits: Benefit[] = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Segurança Garantida',
      description: 'Todos os nossos carros passam por rigorosas inspeções de segurança e manutenção.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Rapidez no Serviço',
      description: 'Processo de aluguer e compra simplificado. Reserve em menos de 5 minutos.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Suporte 24/7',
      description: 'Nossa equipa está sempre disponível para te ajudar, a qualquer hora do dia.',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Preços Justos',
      description: 'Os melhores preços do mercado, sem taxas ocultas ou surpresas.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Qualidade Premium',
      description: 'Carros de alta qualidade, sempre limpos e em perfeito estado.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Entrega Grátis',
      description: 'Entregamos o teu carro onde quiseres, sem custos adicionais.',
      color: 'from-teal-500 to-cyan-600'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Porque Escolher a <span className="text-blue-600">CarroJá</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos a melhor experiência em aluguer e venda de carros, com vantagens únicas que nos distinguem no mercado
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para começar?
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              Junta-te a milhares de clientes satisfeitos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Começar Agora
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Saber Mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}