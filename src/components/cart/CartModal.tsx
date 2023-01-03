import { currencyFormat } from '../../utils/currencyFomat'
import { useMainContext } from '../../context/MainContext'
import Button from '../form/Button'
import CartModalItem from './CartModalItem'
import data from '../../data/products.json'
import { Link } from 'react-router-dom'

type CartModalProps = {
  isOpenCartModal: boolean
}

export default function CartModal({ isOpenCartModal }: CartModalProps) {
  const { cartItems } = useMainContext()
  return (
    <div
      className={`absolute top-12 right-0 z-10  overflow-hidden rounded-3xl bg-white shadow-3xl transition-all duration-300 ${
        isOpenCartModal
          ? 'visible w-96 opacity-100'
          : 'invisible h-0 w-0 opacity-0'
      }`}
    >
      <div className="bg-white px-2 py-4">
        {cartItems.map((item) => (
          <CartModalItem key={item.id} {...item} />
        ))}
      </div>
      <div className="bg-cart py-3 px-6">
        <div className="mb-4 flex justify-between text-sm">
          <span className="text-gray-dark">Jami:</span>
          <span className="font-medium">
            {currencyFormat(
              cartItems.reduce((total, cartItem) => {
                const item = data.find((item) => item.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </span>
        </div>

        <div>
          <Button className="mb-2 w-full py-4 uppercase" color="primary">
            sotib olish
          </Button>
          <Link to="/cart">
            <Button className="w-full py-4 uppercase" color="primary-outline">
              savatga o'tish
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
