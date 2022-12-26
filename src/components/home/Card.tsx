import Button from '../form/Button'
import { currencyFormat } from '../../utils/currencyFomat'
import { Link } from 'react-router-dom'
import { FaRegHeart, FaShoppingCart, FaStar } from 'react-icons/fa'
import { BiComment } from 'react-icons/bi'

export default function Card() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white p-4 shadow-3xl">
      <Link to={'#'}>
        <div className="h-40">
          <img
            className="h-full w-full object-contain"
            src="https://assets.asaxiy.uz/product/main_image/desktop//6325bc285a4d1.png.webp"
            alt=""
          />
        </div>

        <p className="my-2 text-sm font-medium">
          Samsung VC21K5150HP (Vyetnam) changyutgichi
        </p>

        <div className="flex items-center space-x-2 py-2">
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

        <div className="my-2">
          <p className="text-sm text-red-dark line-through">
            {currencyFormat(5600)}
          </p>
          <p className="font-medium">{currencyFormat(105000)}</p>
          <p className="text-sm">{currencyFormat(12300)} / 12 oy</p>
        </div>
      </Link>

      <div className="flex items-center justify-between space-x-2">
        <Button color="green" className="w-1/3 truncate px-1 text-[8px]">
          Rasrochka
        </Button>
        <Button color="primary" className="w-2/3 truncate px-1 text-[8px]">
          Bir klikda olish
        </Button>
      </div>

      <div className="absolute top-4 left-4 space-x-2">
        <span className="cursor-pointer rounded-md bg-orange py-1 px-2 text-xs uppercase text-white">
          chegirma
        </span>
        <span className="cursor-pointer rounded-md bg-red py-1 px-2 text-xs uppercase text-white">
          yangi
        </span>
      </div>
      <span className="absolute top-4 right-4 cursor-pointer rounded-lg bg-blue p-2 text-xs  text-white">
        <FaShoppingCart className="h-4 w-4" />
      </span>
      <span className="bg-transparent absolute top-14 right-3 cursor-pointer p-1 text-xs  text-gray-light">
        <FaRegHeart className="h-7 w-7" />
      </span>
    </div>
  )
}
