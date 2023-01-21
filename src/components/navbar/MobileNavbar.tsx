import { useMainContext } from '../../context/MainContext'
import HumburgerMenu from './HumburgerMenu'
import SearchInput from './SearchInput'
import logo from '../../assets/logos/asaxiy-logo.svg'

export default function MobileNavbar() {
  const { isOpenSidebar, setIsOpenSidebar } = useMainContext()
  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between bg-white px-4 py-2 ">
        <HumburgerMenu
          isOpen={isOpenSidebar}
          toggle={() => setIsOpenSidebar((prev) => !prev)}
        />

        <img className="w-28" src={logo} alt="asaxiy logo" />
      </div>
      <div className="px-5 py-3">
        <SearchInput />
      </div>
    </div>
  )
}
