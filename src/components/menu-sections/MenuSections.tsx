import { IoIosPhonePortrait } from 'react-icons/io'
import { TbBooks, TbDeviceGamepad2, TbSofa } from 'react-icons/tb'
import {
  MdComputer,
  MdOutlineSportsBasketball,
  MdHomeMax,
  MdOutlineSmartToy,
} from 'react-icons/md'
import { FiMonitor } from 'react-icons/fi'
import { BiDish } from 'react-icons/bi'
import { CgSmartHomeWashMachine } from 'react-icons/cg'
import { GiOfficeChair } from 'react-icons/gi'
import { AiOutlineCar } from 'react-icons/ai'
import { TbBabyCarriage } from 'react-icons/tb'
import { RiHeartsLine } from 'react-icons/ri'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMainContext } from '../../context/MainContext'

export default function MenuSections() {
  const [show, setShow] = useState(false)
  const { isOpenMenu, setIsOpenMenu } = useMainContext()
  return (
    <div
      className={`absolute left-0 top-2 z-10 flex h-[460px]  w-full bg-gray  transition-all duration-300 ${
        isOpenMenu
          ? 'visible scale-100 opacity-100'
          : 'invisible scale-0 opacity-0'
      }`}
    >
      <div className="menu w-[350px]  overflow-y-scroll  py-1">
        <div>
          <TbBooks /> <span>Kitoblar</span>
        </div>
        <div>
          <IoIosPhonePortrait /> <span>Telefon va gadjetlar</span>
        </div>
        <div>
          <MdHomeMax /> <span>Konditsionerlar</span>
        </div>
        <div onMouseEnter={() => setShow(true)}>
          <MdComputer /> <span>Kompyuter va orgtexnika</span>{' '}
          <div className="dot"></div>
        </div>
        <div>
          <TbDeviceGamepad2 /> <span>Gamerlar uchun</span>
        </div>
        <div>
          <CgSmartHomeWashMachine /> <span>Maishiy texnika</span>
        </div>
        <div>
          <FiMonitor /> <span>Televizorlar, video va audio</span>
        </div>
        <div>
          <BiDish /> <span>Idish tovoqlar</span>
        </div>
        <div>
          <TbSofa /> <span>Mebel</span>
        </div>
        <div>
          <MdOutlineSportsBasketball /> <span>Sport va dam olish</span>
        </div>
        <div>
          <GiOfficeChair /> <span>Uy va ofis uchun texnika va jihozlar</span>
        </div>
        <div>
          <AiOutlineCar /> <span>Avto</span>
        </div>
        <div>
          <MdOutlineSmartToy />{' '}
          <span>O'yinchoqlar, sovg'alar va akksessuarlar</span>
        </div>
        <div>
          <TbBabyCarriage /> <span>Bolalar uchun tovarlar</span>
        </div>
        <div>
          <RiHeartsLine /> <span>Go'zallik va salomatlik</span>
        </div>
      </div>

      <div className="p-6">
        {show && (
          <div className="space-y-2 only:cursor-pointer only:font-medium only:text-gray-dark">
            <h3 className="text-xl font-medium text-black">
              Noutbuk va aksesuarlar
            </h3>

            <p className="hover:text-blue">Barcha maxsulotlar</p>
            <p onClick={() => setIsOpenMenu(false)} className="hover:text-blue">
              <Link to={'/product'}>
                Noutbuklar <div className="dot"></div>{' '}
              </Link>
            </p>
            <p className="hover:text-blue">Noutbuk uchun sumkalar</p>
            <p className="hover:text-blue">Noutbuk uchun Powerbank</p>
            <p className="hover:text-blue">
              Noutbuk uchun zaryadlovchi qurilmalar
            </p>
            <p className="hover:text-blue">Noutbuk uchun tagliklar</p>
          </div>
        )}
      </div>
    </div>
  )
}
