import { FaTrashAlt } from 'react-icons/fa'
import { CartItems, useMainContext } from '../../context/MainContext'
import { currencyFormat } from '../../utils/currencyFomat'
import { Link } from 'react-router-dom'
import data from '../../data/products.json'

type CartPageItemProps = {
  isStandart: boolean
} & CartItems

export default function CartPageItem({
  isStandart,
  id,
  quantity,
}: CartPageItemProps) {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useMainContext()

  const product = data.find((item) => item.id === id)
  if (product == null) return null

  return (
    <div className="flex items-center justify-between space-x-6 rounded-3xl bg-white p-5 shadow-3xl">
      <img
        className="h-32 w-32  rounded-3xl object-contain shadow-3xl"
        src={product.imgs[0]}
        alt={product.brend}
      />

      <div className="flex flex-col items-center max-sm:space-y-4 sm:space-x-4 lg:flex-row">
        <div className="space-y-4">
          <Link
            to={`/product/${product.id}`}
            className="my-truncate font-medium transition hover:text-blue max-lg:text-sm"
          >
            {product.title}
          </Link>
          <p className="inline-block cursor-pointer rounded-lg bg-blue px-2 py-1 text-sm text-white transition hover:bg-blue-darker">
            {product.brend}
          </p>
        </div>

        <div className="flex max-sm:flex-col max-sm:space-y-4  sm:items-center sm:space-x-12 ">
          <div className="flex h-6 w-32 items-center justify-between overflow-hidden rounded-md bg-white ">
            <button
              onClick={() => decreaseCartQuantity(product.id)}
              className="h-full w-8 bg-blue  text-white transition hover:bg-blue-darker"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => increaseCartQuantity(product.id)}
              className="h-full w-8 bg-blue text-white  transition hover:bg-blue-darker"
            >
              +
            </button>
          </div>

          <div className="w-40">
            <p
              className={`text-sm text-red-dark line-through ${
                product.discount ? 'visible' : 'invisible'
              }`}
            >
              {currencyFormat(product?.oldPrice)}
            </p>

            <p className="font-medium">{currencyFormat(product?.price)}</p>
            {!isStandart && (
              <p className="my-1 font-bold text-blue">
                {currencyFormat(product.installment)} /{' '}
                {product.installmentMonth} oy
              </p>
            )}

            <span
              onClick={() => removeFromCart(product.id)}
              className="cursor-pointer  text-sm font-medium text-orange"
            >
              <FaTrashAlt className="mr-2 inline h-3 w-3" /> O'chirish
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
