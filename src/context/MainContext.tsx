import { ReactNode, createContext, useContext, useState } from 'react'
import Modal from '../components/kabinet/Modal'

type MainContextProviderProps = {
  children: ReactNode
}

type MainContext = {
  openModal: () => void
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
  cartItems: CartItems[]
}

export type CartItems = {
  id: string
  quantity: number
}

const MainContext = createContext({} as MainContext)

export function useMainContext() {
  return useContext(MainContext)
}

export function MainContextProvider({ children }: MainContextProviderProps) {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [cartItems, setCartItems] = useState<CartItems[]>([])

  const openModal = () => setIsOpenModal(true)
  const closeModal = () => setIsOpenModal(false)

  function addToCart(id: string) {
    setCartItems((currItems) => {
      if (!currItems?.some((item) => item.id === id)) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems
      }
    })
  }

  function removeFromCart(id: string) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id)
    })
  }

  return (
    <MainContext.Provider
      value={{ openModal, addToCart, removeFromCart, cartItems }}
    >
      {children}
      <Modal isOpenModal={isOpenModal} closeModal={closeModal} />
    </MainContext.Provider>
  )
}
