import { Link } from 'react-router-dom'
import { useMainContext } from '../../context/MainContext'

export default function Menu() {
  const { isOpenMenu, setIsOpenMenu } = useMainContext()
  const humburgerLine = 'w-5 h-[2px] bg-blue transition-all duration-300'

  return (
    <div className="mx-auto max-w-[1336px] bg-white">
      <div className="flex items-center justify-between p-4 text-sm ">
        <div className="flex cursor-pointer items-center space-x-1 transition-all hover:text-blue">
          <div
            onClick={() => setIsOpenMenu((prev) => !prev)}
            className={`space-y-[3px]`}
          >
            <div
              className={` ${humburgerLine} ${
                isOpenMenu ? 'translate-y-[5px] rotate-45' : 'rotate-0'
              }`}
            ></div>
            <div
              className={` ${humburgerLine} ${
                isOpenMenu ? 'opacity-0 ' : 'opacity-100'
              }`}
            ></div>
            <div
              className={` ${humburgerLine} ${
                isOpenMenu ? '-translate-y-[5px] -rotate-45' : 'rotate-0'
              }`}
            ></div>
          </div>
          <span onClick={() => setIsOpenMenu((prev) => !prev)}>
            Boshqa bo'limlar
          </span>
        </div>
        <Link className="transition-all hover:text-blue" to={'/news'}>
          Yangiliklar
        </Link>
        <Link className="transition-all hover:text-blue" to={''}>
          Yangi kelganlar
        </Link>
        <Link className="transition-all hover:text-blue" to={''}>
          Chegirmalar
        </Link>
        <Link className="transition-all hover:text-blue" to={''}>
          Kitoblar
        </Link>
        <Link className="transition-all hover:text-blue" to={''}>
          Telefonlar va gadjetlar
        </Link>
        <Link className="transition-all hover:text-blue" to={''}>
          Televizorlar
        </Link>
        <Link className="transition-all hover:text-blue" to={''}>
          Sport buyumlari
        </Link>
      </div>
    </div>
  )
}
