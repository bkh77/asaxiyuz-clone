import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Menu() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className="flex items-center justify-between bg-white p-4 text-sm shadow-lg">
      <div className="flex cursor-pointer items-center space-x-1 transition-all hover:text-blue">
        {openMenu ? (
          <FiX
            className="h-6 w-6 text-blue"
            onClick={() => setOpenMenu((prev) => !prev)}
          />
        ) : (
          <FiMenu
            className="h-6 w-6 text-blue"
            onClick={() => setOpenMenu((prev) => !prev)}
          />
        )}
        <span onClick={() => setOpenMenu((prev) => !prev)}>
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
  )
}
