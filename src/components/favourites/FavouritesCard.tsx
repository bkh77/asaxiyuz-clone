import { Link } from 'react-router-dom'
import { FavItems, useMainContext } from '../../context/MainContext'
import Button from '../form/Button'
import data from '../../data/products.json'
import { currencyFormat } from '../../utils/currencyFomat'
import Badge from './Badge'

export default function FavouritesCard({ id }: FavItems) {
  const { addToCart, removeFromFav } = useMainContext()

  const product = data.find((item) => item.id === id)
  if (product == null) return null

  return (
    <div className="flex flex-col space-x-6 rounded-2xl bg-white p-4 shadow-lg lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center">
        <Link to={`/product/${product.id}`}>
          <div className="mr-6 h-28 w-28 overflow-hidden rounded-md p-2 shadow-lg lg:h-32 lg:w-32">
            <img
              className="h-full w-full object-cover"
              src={product.imgs[0]}
              alt="product img"
            />
          </div>
        </Link>
        <div>
          <Link
            to={`/product/${product.id}`}
            style={{ height: '45px' }}
            className="my-truncate font-semibold transition hover:text-blue"
          >
            {product.title}
          </Link>
          <Badge>{product.brend}</Badge>
        </div>
      </div>

      <div className="my-4 text-right lg:w-40 lg:text-left">
        <p className="text-sm text-red-dark line-through">
          {currencyFormat(product.oldPrice)}
        </p>
        <p className="font-bold">{currencyFormat(product.price)}</p>
        <p className="text-sm">
          {currencyFormat(product.installment)} / {product.installmentMonth} oy
        </p>
      </div>

      <div className="flex  lg:flex-col lg:space-y-4 ">
        <Button
          onClick={() => addToCart(product.id)}
          className="py-2 px-4 lg:w-48"
          color="primary"
        >
          Savatga qo'shish
        </Button>

        <Button
          onClick={() => removeFromFav(product.id)}
          className="ml-auto py-2 px-4 lg:w-48"
          color="orange"
        >
          O'chirish
        </Button>
      </div>
    </div>
  )
}
