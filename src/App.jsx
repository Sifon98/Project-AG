import Header from './components/header'
import AnimatedRoutes from './components/AnimatedRoutes'
import Footer from './components/Footer'
import './scss/main.scss'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <AnimatedRoutes />
      <Footer />
    </>
  )
}

export default App
