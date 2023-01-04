import { useState } from 'react'
import { useMainContext } from '../context/MainContext'
import CartPageItem from '../components/cart/CartPageItem'
import Button from '../components/form/Button'
import data from '../data/products.json'
import { currencyFormat } from '../utils/currencyFomat'

export default function Cart() {
  const [isStandart, setIsStandart] = useState(true)
  const { cartItems } = useMainContext()
  return (
    <div className="p-6">
      <h2 className="my-4 text-2xl font-semibold">Savatcha</h2>

      <div>
        <button
          onClick={() => setIsStandart(true)}
          className={`relative mr-4  rounded-lg px-4 py-2 text-white transition-all ${
            isStandart ? 'bg-blue text-white' : 'text-black'
          }`}
        >
          Стандартный покупкий
          <div
            className={`absolute top-1 right-1 h-4 w-4 rounded-full text-xs ${
              isStandart ? 'bg-white text-blue' : 'bg-blue text-white'
            }`}
          >
            {cartItems.length}
          </div>
        </button>

        <button
          onClick={() => setIsStandart(false)}
          className={`relative mr-4  rounded-lg px-4 py-2 text-white transition-all ${
            !isStandart ? 'bg-blue text-white' : 'text-black'
          }`}
        >
          Товары на рассрочку
          <div
            className={`absolute top-1 right-1 h-4 w-4 rounded-full text-xs ${
              !isStandart ? 'bg-white text-blue' : 'bg-blue text-white'
            }`}
          >
            {cartItems.length}
          </div>
        </button>
      </div>

      <div className="mt-6 flex max-md:flex-col max-md:space-y-8 md:space-x-6">
        <div className="w-3/4 space-y-8 max-md:w-full">
          {cartItems.map((item) => (
            <CartPageItem key={item.id} isStandart={isStandart} {...item} />
          ))}
        </div>
        <div className="w-1/4 max-md:w-full">
          <div className="sticky top-0 rounded-3xl bg-white shadow-3xl">
            <div className="space-y-3 border-b border-gray-light p-6 text-center font-medium">
              <p className="text-blue ">
                Savatdagi mahsulotlar soni: <span>{cartItems.length}</span>
              </p>
              <p>Jami miqdor:</p>
              <p className="text-2xl">
                {currencyFormat(
                  cartItems.reduce((total, cartItem) => {
                    const item = data.find((item) => item.id === cartItem.id)
                    return (
                      total +
                      (item?.[isStandart ? 'price' : 'installment'] || 0) *
                        cartItem.quantity
                    )
                  }, 0)
                )}{' '}
                {!isStandart && <span>/ 12 oy </span>}
              </p>
            </div>
            <div className="p-6">
              <Button className="w-full py-4 px-4" color="orange">
                BUYURTMA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
