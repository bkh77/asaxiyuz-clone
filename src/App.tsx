import { Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Index'
import Navbar from './components/navbar/Navbar'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
import News from './pages/News'
import OrderPay from './pages/OrderPay'
import OrderStatus from './pages/OrderStatus'
import { MainContextProvider } from './context/MainContext'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <MainContextProvider>
      <Navbar />
      <main className="mx-auto max-w-[1336px] ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order-pay" element={<OrderPay />} />
          <Route path="/order-status" element={<OrderStatus />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>
      <Footer />
    </MainContextProvider>
  )
}

export default App
