import { Link } from 'react-router-dom'
import data from '../../data/products.json'
import { currencyFormat } from '../../utils/currencyFomat'
import { FiX } from 'react-icons/fi'
import { CartItems, useMainContext } from '../../context/MainContext'

export default function CartModalItem({ id, quantity }: CartItems) {
  const { removeFromCart } = useMainContext()

  const product = data.find((item) => item.id === id)
  if (product == null) return null

  return (
    <div className="font=medium flex items-center justify-between space-x-2 rounded-3xl p-2 text-sm shadow-md">
      <img className="h-16 w-16" src={product.imgs[0]} alt={product.model} />
      <Link
        to={`/product/${id}`}
        className="my-truncate text-blue hover:text-blue-darker"
      >
        {product.title}
      </Link>
      <div>
        <p>{currencyFormat(product.price)}</p>
        <p className="text-right text-gray-light">x{quantity}</p>
      </div>
      <div>
        <FiX
          onClick={() => removeFromCart(product.id)}
          className="h-5 w-5 hover:text-red"
        />
      </div>
    </div>
  )
}
