import Button from '../form/Button'
import data from '../../data/products.json'
import { currencyFormat } from '../../utils/currencyFomat'
import { Link } from 'react-router-dom'
import { FaRegHeart, FaShoppingCart, FaStar } from 'react-icons/fa'
import { BiComment } from 'react-icons/bi'
import { useMainContext } from '../../context/MainContext'

export default function Card({ id }: { id: string }) {
  const { addToCart, addToFav } = useMainContext()

  const product = data.find((item) => item.id === id)
  if (product == null) return null

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white p-4 shadow-3xl transition duration-200 hover:text-blue">
      <Link to={`/product/${id}`}>
        <div className="h-40">
          <img
            className="h-full w-full object-contain"
            src={product?.imgs[0]}
            alt={product?.brend}
          />
        </div>

        <p className="my-truncate my-2 text-sm font-medium">{product?.title}</p>

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

        <div className="my-2 text-black">
          <p
            className={`text-sm text-red-dark line-through ${
              product.discount ? 'visible' : 'invisible'
            }`}
          >
            {currencyFormat(product?.oldPrice)}
          </p>

          <p className="font-medium">{currencyFormat(product?.price)}</p>
          <p className="text-sm">
            {currencyFormat(product.installment)} / {product.installmentMonth}{' '}
            oy
          </p>
        </div>
      </Link>

      <div className="flex items-center justify-between space-x-2">
        <Button color="green" className="w-1/3 truncate px-1 py-2 text-[8px]">
          Rasrochka
        </Button>
        <Button color="primary" className="w-2/3 truncate px-1 py-2 text-[8px]">
          Bir klikda olish
        </Button>
      </div>

      <div className="absolute top-4 left-4 space-x-2">
        {product.discount && (
          <span className="cursor-pointer rounded-md bg-orange py-1 px-2 text-xs uppercase text-white">
            chegirma
          </span>
        )}
        {product.new && (
          <span className="cursor-pointer rounded-md bg-red py-1 px-2 text-xs uppercase text-white">
            yangi
          </span>
        )}
      </div>
      <div className="absolute top-4 right-4">
        <Button
          onClick={() => addToCart(id)}
          title="Savatchaga qo'shish"
          color="primary"
          className="p-2 active:scale-90"
        >
          <FaShoppingCart className="h-4 w-4" />
        </Button>
      </div>
      <span
        onClick={() => addToFav(product.id)}
        title="Sevimlilarga qo'shish"
        className="bg-transparent absolute top-14 right-3 cursor-pointer p-1 text-xs text-gray-light transition  hover:text-blue active:scale-90"
      >
        <FaRegHeart className="h-7 w-7" />
      </span>
    </div>
  )
}
