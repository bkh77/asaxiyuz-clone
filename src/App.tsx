import { Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Index'
import Navbar from './components/navbar/Navbar'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
import OrderPay from './pages/OrderPay'
import OrderStatus from './pages/OrderStatus'
import { MainContextProvider } from './context/MainContext'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import MenuSections from './components/menu-sections/MenuSections'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <MainContextProvider>
      <Navbar />
      <main className="relative mx-auto max-w-[1336px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order-pay" element={<OrderPay />} />
          <Route path="/order-status" element={<OrderStatus />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <MenuSections />
      </main>
      <Footer />
    </MainContextProvider>
  )
}

export default App
