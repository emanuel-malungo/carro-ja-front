import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import CarListing from '../../components/buy-car/CarListing'
import SearchFilters from '../../components/buy-car/SearchFilters'
import FeaturedDeals from '../../components/buy-car/FeaturedDeals'

export default function BuyCarPage() {
  return (
    <div className='bg-gray-50 w-full min-h-screen'>
      <Header />
      <main className="pt-8">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Comprar Carro
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Encontra o carro perfeito para ti. Mais de 500 carros disponíveis com os melhores preços.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">500+</div>
                  <div className="text-blue-100 text-sm md:text-base">Carros Disponíveis</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">50+</div>
                  <div className="text-blue-100 text-sm md:text-base">Marcas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">98%</div>
                  <div className="text-blue-100 text-sm md:text-base">Satisfação</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <SearchFilters />
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <FeaturedDeals />
              <CarListing />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
