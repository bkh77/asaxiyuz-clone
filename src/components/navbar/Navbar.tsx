import logo from '../../assets/logos/asaxiy-logo.svg'
import payment from '../../assets/logos/payment.svg'
import tracker from '../../assets/logos/tracker.svg'
import language from '../../assets/logos/language.svg'
import cart from '../../assets/logos/cart.svg'
import heart from '../../assets/logos/heart.svg'
import avatar from '../../assets/logos/avatar.svg'
import SearchInput from './SearchInput'
import Menu from './Menu'
import { Link } from 'react-router-dom'
import { FaAngleDown } from 'react-icons/fa'
import { useState } from 'react'
import { useMainContext } from '../../context/MainContext'
import CartModal from '../cart/CartModal'

export default function Navbar() {
  const [langSelect, setLangSelect] = useState(false)
  const [currLang, setCurrLang] = useState("O'zbekcha")
  const [isOpenCartModal, setIsOpenCartModal] = useState(false)

  const { openModal, cartItems, favItems } = useMainContext()

  return (
    <div className="hidden bg-white shadow-3xl lg:block">
      <nav className="mx-auto flex max-w-[1336px] items-center justify-between space-x-10 border-b border-gray  p-6">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <SearchInput />

        <div className="flex items-center space-x-8">
          <Link
            to="/order-pay"
            className="flex cursor-pointer flex-col  items-center text-sm hover:text-blue"
          >
            <img className="h-8 w-8" src={payment} alt="payment logo" />
            <span>To'lov</span>
          </Link>
          <Link
            to="/order-status"
            className="flex cursor-pointer flex-col  items-center text-sm hover:text-blue"
          >
            <img className="h-8 w-8" src={tracker} alt="tracker logo" />
            <span>Trek</span>
          </Link>
          <div
            onMouseEnter={() => setLangSelect(true)}
            onMouseLeave={() => setLangSelect(false)}
            className="relative"
          >
            <div className="flex cursor-pointer flex-col  items-center text-sm hover:text-blue">
              <img className="h-7 w-7" src={language} alt="language logo" />

              <span className="mt-1">
                {currLang} <FaAngleDown className="inline h-4 w-4" />
              </span>
            </div>

            <div
              className={`absolute -left-4  flex h-24 w-28 flex-col space-y-3 rounded-xl bg-white p-6 text-sm shadow-xl transition-all duration-300 ${
                langSelect
                  ? 'visible origin-top scale-y-100'
                  : 'invisible origin-top scale-0 '
              }`}
            >
              {["O'zbekcha", 'Русский'].map((lang) => (
                <span
                  key={lang}
                  onClick={() => {
                    setCurrLang(lang)
                    setLangSelect(false)
                  }}
                  className="cursor-pointer hover:text-blue"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div
            onMouseEnter={() => setIsOpenCartModal(true)}
            onMouseLeave={() => setIsOpenCartModal(false)}
            className="relative flex cursor-pointer  flex-col items-center text-sm"
          >
            <img className="h-7 w-7" src={cart} alt="cart logo" />
            <span className="hover:text-blue">Savatcha</span>
            <div className="absolute right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue  text-white">
              {cartItems.length}
            </div>
            <CartModal isOpenCartModal={isOpenCartModal} />
          </div>

          <Link
            to="/favourites"
            className="relative flex cursor-pointer  flex-col items-center text-sm hover:text-blue "
          >
            <img className="h-7 w-7" src={heart} alt="heart logo" />
            <span>Sevimlilar</span>
            <div className="absolute right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue  text-white">
              {favItems.length}
            </div>
          </Link>
          <div
            onClick={openModal}
            className="flex cursor-pointer flex-col items-center  text-sm hover:text-blue"
          >
            <img className="h-7 w-7" src={avatar} alt="avatar logo" />
            <span>Кабинет</span>
          </div>
        </div>
      </nav>
      <Menu />
    </div>
  )
}
