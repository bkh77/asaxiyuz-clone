import AppBanner from './AppBanner'
import BrendSwipe from './BrendSwipe'
import Faetures from './Faetures'
import { FiPhone, FiMail } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import {
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
  FaRss,
} from 'react-icons/fa'
import click from '../../assets/payment-logos/click-logo.svg'
import humo from '../../assets/payment-logos/humo.svg'
import mastercard from '../../assets/payment-logos/mastercard.svg'
import payme from '../../assets/payment-logos/payme.svg'
import uzcard from '../../assets/payment-logos/uzcard.svg'
import visa from '../../assets/payment-logos/visa.svg'

export default function Footer() {
  return (
    <div>
      <BrendSwipe />
      <AppBanner />
      <footer className="bg-blue p-6">
        <Faetures />

        <div className="mt-4 grid grid-cols-1  md:grid-cols-3 md:space-x-6 text-white">
          <div className="space-y-2">
            <h5 className="mb-3 text-lg font-semibold">Ma'lumotlar</h5>
            <p className="footer-title-list">
              Ommaviy oferta (Foydalanuvchi bitimi)
            </p>
            <p className="footer-title-list">
              Muddatli toʻlov asosida sotib olishning umumiy qoidalari
            </p>
            <p className="footer-title-list">Muddatli toʻlov shartlari</p>
            <p className="footer-title-list">
              Tovarlarni yetkazib berish va toʻlov turlari
            </p>
            <p className="footer-title-list">
              Buyurtmani bekor qilish va tovarni qaytarish
            </p>
            <p className="footer-title-list">Biz haqimizda</p>
          </div>

          <div className="space-y-2">
            <h5 className="mb-3 text-lg font-semibold">Biz bilan aloqa</h5>
            <p className="footer-title-list">
              <FiPhone className="mr-2 inline h-5 w-5" /> +998 71 200 01 05
            </p>
            <p className="footer-title-list">
              <FiMail className="mr-2 inline h-5 w-5" /> info@asaxiy.uz
            </p>
            <p className="footer-title-list">
              <HiOutlineLocationMarker className="mr-2 inline h-5 w-5" />{' '}
              Chilonzor 3, Toshkent
            </p>
          </div>

          <div>
            <h5 className="mb-4 text-lg font-semibold">
              Biz ijtimoiy tarmoqlarda :
            </h5>

            <div className="flex space-x-5">
              <a href="https://www.facebook.com/asaxiy/" target="_blank">
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="https://t.me/asaxiyuz" target="_blank">
                <FaTelegramPlane className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/asaxiyshop/" target="_blank">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC0UaPm4AlSkAU7U88H8jhhQ"
                target="_blank"
              >
                <FaYoutube className="h-7 w-7" />
              </a>
              <a href="https://asaxiy.uz/uz/rss" target="_blank">
                <FaRss className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center space-x-6 border-t border-b border-white p-3 text-white flex-wrap">
          <p className='hidden md:block' >To'lov turlari: </p>
          <img className="w-20 cursor-pointer" src={click} alt="click logo" />
          <img className="w-20 cursor-pointer" src={payme} alt="payme logo" />
          <img className="w-16 cursor-pointer" src={visa} alt="visa logo" />
          <img
            className="w-12 cursor-pointer"
            src={mastercard}
            alt="mastercard logo"
          />
          <img className="w-12 cursor-pointer" src={humo} alt="humo logo" />
          <img className="w-8 cursor-pointer" src={uzcard} alt="uzcard logo" />
        </div>

        <div className="pt-4 text-center text-sm text-white">
          <p>
            2015-2022 Internet-do’kon asaxiy.uz: Maishiy texnikalar va
            boshqalar. Mahsulotni yetkazib berish barcha viloyatlarda amalga
            oshiriladi. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </footer>
    </div>
  )
}
