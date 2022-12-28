import { FiX } from 'react-icons/fi'
import Button from '../form/Button'
import Input from '../form/Input'
import Faetures from '../footer/Faetures'

type ModalProps = {
  isOpenModal: boolean
  closeModal: () => void
}

export default function Modal({ isOpenModal, closeModal }: ModalProps) {
  return (
    <div
      className={`fixed inset-0 z-20 flex items-center justify-center bg-[#000]/30 transition-all duration-300 ${
        isOpenModal ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <div className="relative flex overflow-hidden rounded-xl">
        <div className="w-[340px] bg-white md:w-[490px]">
          <div className="border-b border-gray-light p-6">
            <h2 className="text-center text-lg lg:text-2xl font-semibold">
              Kirish yoki shaxsiy kabinet yaratish
            </h2>
          </div>
          <div className="px-8 pb-16">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <Input label="Telefon" type={'tel'} name="user-phone" required />

              <Button className="w-full uppercase py-2" color="primary">
                Faollashtirish kodini olish
              </Button>
            </form>
          </div>
        </div>

        <div className="hidden bg-gray py-4 lg:block">
          <Faetures className="w-[390px] space-y-4" />
        </div>

        <FiX
          onClick={closeModal}
          className="absolute top-2 right-2 h-6 w-6 cursor-pointer text-gray-dark hover:text-red"
        />
      </div>
    </div>
  )
}
