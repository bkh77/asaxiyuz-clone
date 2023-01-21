import { Link } from 'react-router-dom'
import { useMainContext } from '../../context/MainContext'
import HumburgerMenu from './HumburgerMenu'

export default function Menu() {
  const { isOpenMenu, setIsOpenMenu } = useMainContext()

  return (
    <div className="mx-auto max-w-[1336px] bg-white">
      <div className="flex items-center justify-between p-4 text-sm ">
        <div className="flex cursor-pointer items-center space-x-1 transition-all hover:text-blue">
          <HumburgerMenu
            isOpen={isOpenMenu}
            toggle={() => setIsOpenMenu((prev) => !prev)}
          />
          <span onClick={() => setIsOpenMenu((prev) => !prev)}>
            Boshqa bo'limlar
          </span>
        </div>
        <Link className="transition-all hover:text-blue" to={'/'}>
          Yangiliklar
        </Link>
        <Link className="transition-all hover:text-blue" to={'/'}>
          Yangi kelganlar
        </Link>
        <Link className="transition-all hover:text-blue" to={'/'}>
          Chegirmalar
        </Link>
        <Link className="transition-all hover:text-blue" to={'/'}>
          Kitoblar
        </Link>
        <Link className="transition-all hover:text-blue" to={'/'}>
          Telefonlar va gadjetlar
        </Link>
        <Link className="transition-all hover:text-blue" to={'/'}>
          Televizorlar
        </Link>
        <Link className="transition-all hover:text-blue" to={'/'}>
          Sport buyumlari
        </Link>
      </div>
    </div>
  )
}
