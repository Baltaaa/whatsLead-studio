import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Bento from '../sections/Bento'
import Portfolio from '../sections/Portfolio'
import Contact from '../sections/Contact'
import Testimonials from '../sections/Testimonials'
import Pricing from '../sections/Pricing'
import Footer from '../components/Footer'
import Loader from '../components/Loader'

function Home() {
  return (
    <main className="bg-gradient-to-b from-black via-zinc-80 to-black text-white min-h-screen overflow-hidden relative">

      <Loader />
      

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">

        <div className="absolute top-20 left-10 w-72 h-72 bg-white/0 blur-3xl rounded-full"></div>

        <div className="absolute top-96 right-0 w-80 h-80 bg-zinc-400/5 blur-3xl rounded-full"></div>

        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-white/0 blur-3xl rounded-full"></div>

      </div>

      <Navbar />
      <Hero />
      <Bento />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />

    </main>
  )
}

export default Home
