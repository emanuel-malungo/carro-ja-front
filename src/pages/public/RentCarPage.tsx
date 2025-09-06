import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import RentalListing from '../../components/rent-car/RentalListing'
import RentalFilters from '../../components/rent-car/RentalFilters'
import PopularRentals from '../../components/rent-car/PopularRentals'
import RentalCalculator from '../../components/rent-car/RentalCalculator'

export default function RentCarPage() {
  return (
    <div className='bg-gray-50 w-full min-h-screen'>
      <Header />
      <main className="pt-8">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-green-600 to-teal-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Alugar Carro
              </h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8">
                Liberdade para explorar. Carros para todos os momentos, desde €25/dia.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">200+</div>
                  <div className="text-green-100 text-sm md:text-base">Carros para Aluguel</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">15+</div>
                  <div className="text-green-100 text-sm md:text-base">Localizações</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                  <div className="text-green-100 text-sm md:text-base">Suporte</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <RentalFilters />
              <RentalCalculator />
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <PopularRentals />
              <RentalListing />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
