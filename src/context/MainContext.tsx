import {
  ReactNode,
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import Modal from '../components/kabinet/Modal'

type MainContextProviderProps = {
  children: ReactNode
}

type MainContext = {
  openModal: () => void
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
  cartItems: CartItems[]
  increaseCartQuantity: (id: string) => void
  decreaseCartQuantity: (id: string) => void
  favItems: FavItems[]
  addToFav: (id: string) => void
  removeFromFav: (id: string) => void
  isOpenMenu: boolean
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>
  isOpenSidebar: boolean
  setIsOpenSidebar: Dispatch<SetStateAction<boolean>>
}

export type CartItems = {
  id: string
  quantity: number
}

export type FavItems = {
  id: string
}

const MainContext = createContext({} as MainContext)

export function useMainContext() {
  return useContext(MainContext)
}

export function MainContextProvider({ children }: MainContextProviderProps) {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)
  const [cartItems, setCartItems] = useLocalStorage<CartItems[]>(
    'shopping-cart',
    []
  )
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const [favItems, setFavItems] = useLocalStorage<FavItems[]>('favourites', [])

  const openModal = () => setIsOpenModal(true)
  const closeModal = () => setIsOpenModal(false)

  function addToFav(id: string) {
    setFavItems((currItems) => {
      if (!currItems.some((item) => item.id === id)) {
        return [...currItems, { id }]
      } else {
        return currItems
      }
    })
  }

  function removeFromFav(id: string) {
    setFavItems((currItems) => {
      return currItems.filter((item) => item.id !== id)
    })
  }

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

  function increaseCartQuantity(id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseCartQuantity(id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  return (
    <MainContext.Provider
      value={{
        openModal,
        addToCart,
        removeFromCart,
        cartItems,
        increaseCartQuantity,
        decreaseCartQuantity,
        addToFav,
        favItems,
        removeFromFav,
        isOpenMenu,
        setIsOpenMenu,
        isOpenSidebar,
        setIsOpenSidebar,
      }}
    >
      {children}
      <Modal isOpenModal={isOpenModal} closeModal={closeModal} />
    </MainContext.Provider>
  )
}
