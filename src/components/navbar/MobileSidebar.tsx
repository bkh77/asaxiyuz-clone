import HumburgerMenu from './HumburgerMenu'
import logo from '../../assets/logos/asaxiy-logo.svg'
import payLogo from '../../assets/logos/payment.svg'
import tracker from '../../assets/logos/tracker.svg'
import heart from '../../assets/logos/heart.svg'
import newProduct from '../../assets/logos/new-product.svg'
import { useMainContext } from '../../context/MainContext'
import { BiInfoCircle, BiNews } from 'react-icons/bi'
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function MobileSidebar() {
  const { isOpenSidebar, setIsOpenSidebar } = useMainContext()
  return (
    <div
      className={`fixed inset-0 z-40  transform bg-black/50 transition-all duration-300 ${
        isOpenSidebar ? 'visible opacity-100' : 'invisible opacity-0'
      } `}
    >
      <div
        className={`h-full w-80 bg-white p-4 transition-all duration-300 ${
          isOpenSidebar ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <HumburgerMenu
            isOpen={isOpenSidebar}
            toggle={() => setIsOpenSidebar((prev) => !prev)}
          />
          <img className="w-24" src={logo} alt="logo" />
        </div>

        <div className="space-y-4">
          <div>
            <Link onClick={() => setIsOpenSidebar(false)} to="/order-pay">
              <img className="mr-4 inline w-8" src={payLogo} alt="logo" />
              <span>To'lov</span>
            </Link>
          </div>
          <div>
            <Link onClick={() => setIsOpenSidebar(false)} to="/order-status">
              <img className="mr-4 inline w-8" src={tracker} alt="logo" />
              <span>Buyurtmani kuzatib borish</span>
            </Link>
          </div>
          <div>
            <Link onClick={() => setIsOpenSidebar(false)} to="/favourites">
              <img className="mr-4 inline w-8" src={heart} alt="logo" />
              <span>Sevimlilar</span>
            </Link>
          </div>
          <div>
            <Link onClick={() => setIsOpenSidebar(false)} to="/">
              <img className="mr-4 inline w-8" src={newProduct} alt="logo" />
              <span>Yangi kelganlar</span>
            </Link>
          </div>
          <div>
            <Link onClick={() => setIsOpenSidebar(false)} to="/">
              <BiNews className="mr-4 inline h-8 w-8" />
              <span>Yangiliklar</span>
            </Link>
          </div>
          <div>
            <Link onClick={() => setIsOpenSidebar(false)} to="/">
              <BiInfoCircle className="mr-4 inline h-8 w-8" />
              <span>Biz haqimizda</span>
            </Link>
          </div>
        </div>

        <div className="mt-4">
          <select className="w-full rounded-lg border border-gray-dark p-2">
            <option value="O'zbekcha">O'zbekcha</option>
            <option value="Русский">Русский</option>
          </select>
        </div>

        <div className="mt-12 flex justify-center space-x-6 text-blue">
          <FaInstagram className="h-6 w-6" />
          <FaTelegram className="h-6 w-6" />
          <FaFacebook className="h-6 w-6" />
        </div>
      </div>
    </div>
  )
}
