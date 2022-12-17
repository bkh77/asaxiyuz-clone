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

export default function Navbar() {
  const [langSelect, setLangSelect] = useState(false)
  const [lang, setLang] = useState("O'zbekcha")
  return (
    <div className='hidden lg:block' >
      <nav className="flex items-center justify-between space-x-10 border-b border-gray bg-white p-6">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <SearchInput />

        <div className="flex space-x-8">
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
          <div className="relative">
            <Link
              onClick={() => setLangSelect((prev) => !prev)}
              to={''}
              className="flex cursor-pointer flex-col  items-center text-sm hover:text-blue"
            >
              <img
                className="mt-1 h-7 w-7"
                src={language}
                alt="language logo"
              />

              <span>
                {lang} <FaAngleDown className="inline h-4 w-4" />
              </span>
            </Link>
            {langSelect && (
              <div className="absolute -left-4  flex h-24 w-28 flex-col space-y-3 rounded-xl bg-white p-6 text-sm shadow-xl">
                <span
                  onClick={() => {
                    setLang("O'zbekcha")
                    setLangSelect((prev) => !prev)
                  }}
                  className="cursor-pointer hover:text-blue"
                >
                  O'zbekcha
                </span>
                <span
                  onClick={() => {
                    setLang('Русский')
                    setLangSelect((prev) => !prev)
                  }}
                  className="cursor-pointer hover:text-blue"
                >
                  Русский
                </span>
              </div>
            )}
          </div>
          <div className="relative flex cursor-pointer  flex-col items-center text-sm hover:text-blue">
            <img className="h-7 w-7" src={cart} alt="cart logo" />
            <span>Savatcha</span>
            <div className="absolute right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue  text-white">
              5
            </div>
          </div>
          <Link
            to="/favourites"
            className="relative flex cursor-pointer  flex-col items-center text-sm hover:text-blue "
          >
            <img className="h-7 w-7" src={heart} alt="heart logo" />
            <span>Sevimlilar</span>
            <div className="absolute right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue  text-white">
              3
            </div>
          </Link>
          <Link
            to={''}
            className="flex cursor-pointer flex-col items-center  text-sm hover:text-blue"
          >
            <img className="h-7 w-7" src={avatar} alt="avatar logo" />
            <span>Кабинет</span>
          </Link>
        </div>
      </nav>
      <Menu />
    </div>
  )
}
