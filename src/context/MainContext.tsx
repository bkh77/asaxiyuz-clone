import { ReactNode, createContext, useContext, useState } from 'react'
import Modal from '../components/kabinet/Modal'

type MainContextProviderProps = {
  children: ReactNode
}

type MainContext = {
  openModal: () => void
}

const MainContext = createContext({} as MainContext)

export function useMainContext() {
  return useContext(MainContext)
}

export function MainContextProvider({ children }: MainContextProviderProps) {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const openModal = () => setIsOpenModal(true)
  const closeModal = () => setIsOpenModal(false)

  return (
    <MainContext.Provider value={{ openModal }}>
      {children}
      <Modal isOpenModal={isOpenModal} closeModal={closeModal} />
    </MainContext.Provider>
  )
}
