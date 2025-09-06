import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Hero from '../../components/home/Hero'
import CarHighlights from '../../components/home/CarHighlights'
import Benefits from '../../components/home/Benefits'
import Testimonials from '../../components/home/Testimonials'

export default function HomePage() {
  return (
    <div className='bg-white w-full min-h-screen'>
      <Header />
      <main>
        <Hero />
        <CarHighlights />
        <Benefits />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
