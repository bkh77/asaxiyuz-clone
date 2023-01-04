import Button from '../form/Button'
import data from '../../data/products.json'
import { Navigation, A11y } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { currencyFormat } from '../../utils/currencyFomat'
import { BiComment } from 'react-icons/bi'

import {
  FaCartPlus,
  FaFacebookF,
  FaRegHeart,
  FaStar,
  FaTelegramPlane,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa'

import 'swiper/css'
import 'swiper/css/navigation'
import { useMainContext } from '../../context/MainContext'

const socials = [
  { color: 'bg-[#385395]', icon: <FaFacebookF /> },
  { color: 'bg-[#269FDD]', icon: <FaTelegramPlane /> },
  { color: 'bg-[#04C4F2]', icon: <FaTwitter /> },
  { color: 'bg-[#43BD52]', icon: <FaWhatsapp /> },
]

export default function MainDetails({ id }: { id: string | undefined }) {
  const { addToCart, addToFav } = useMainContext()

  const product = data.find((item) => item.id === id)
  if (product == null) return null

  return (
    <div className="mt-6 flex flex-col max-md:space-y-8 md:flex-row md:space-x-8">
      <div className="hidden space-y-4 lg:block">
        {product.imgs.map((img) => (
          <div
            key={img}
            className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-3xl bg-white p-3"
          >
            <img src={img} alt="product img" />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-white p-4 shadow-3xl md:w-[470px]">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
        >
          {product.imgs.map((img) => (
            <SwiperSlide key={img} zoom>
              <img
                className="h-[350px] w-full object-contain"
                src={img}
                alt="product img"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute top-4 right-4 z-10">
          <Button
            onClick={() => addToFav(product.id)}
            color="primary"
            className="px-2 py-2 active:scale-90"
          >
            <FaRegHeart className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <div className="font-medium">
        <p className="text-xl ">{product.title}</p>

        <p
          className={`mt-6 text-sm text-red-dark line-through ${
            product.discount ? 'visible' : 'invisible'
          }`}
        >
          {currencyFormat(product.oldPrice)}
        </p>

        <p className="text-2xl  text-red-price">
          {currencyFormat(product.price)}
        </p>

        <p className="mt-3 text-sm ">
          {currencyFormat(product.installment)} / {product.installmentMonth} oy
        </p>
        <div className="flex items-center space-x-2">
          <span className="flex items-center space-x-1 text-blue">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
          <span className="text-xs text-gray-light">
            <BiComment className="inline" /> 0 ta sharh
          </span>
        </div>

        <p className="my-4 space-x-4 ">
          <span>Brend: {product.brend}</span>
          <span>Model: {product.model}</span>
        </p>

        <p>
          Holati: <span className="ml-2 text-[#34D374]">● Sotuvda bor</span>
        </p>

        <div className="my-4 flex items-center space-x-3">
          <span>Ulashish:</span>
          {socials.map((social) => (
            <div
              key={social.color}
              className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-full  text-white  ${social.color}`}
            >
              {social.icon}
            </div>
          ))}
        </div>

        <div className="flex max-w-xl font-normal  max-sm:flex-col max-sm:space-y-2 sm:space-x-2">
          <Button className="px-4 py-4 max-sm:w-full sm:w-1/4" color="primary">
            Muddatli to'lov
          </Button>
          <Button
            onClick={() => addToCart(product.id)}
            className="px-4 py-4 max-sm:w-full sm:w-2/4"
            color="orange"
          >
            <FaCartPlus className="inline h-5 w-5" /> Savatchaga qo'shish
          </Button>
          <Button
            className="bg-white px-4 py-4 max-sm:w-full sm:w-1/4"
            color="orange-outline"
          >
            Bir klikda olish
          </Button>
        </div>
      </div>
    </div>
  )
}
