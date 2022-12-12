import logo from '../assets/asaxiy-logo.svg'
import { FiSearch } from 'react-icons/fi'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-blue p-6">
      <img src={logo} alt="logo" />

      <div className="relative flex">
        <input
          className="z-10 h-10 w-[500px]  rounded-lg border-2 border-blue pl-2 text-sm text-blue outline-none"
          type="text"
          placeholder="Qidirish"
        />
        <button className="absolute -right-24 flex h-10 w-28 items-center justify-end space-x-2  rounded-r-lg border-2 border-blue bg-blue  pr-2 text-white transition hover:bg-blue-dark">
          <FiSearch className="inline w-4" />
          <span>Qidirish</span>
        </button>
      </div>

      <div>
        <h1>sgfjhsgd gsjhdgj</h1>
      </div>
    </nav>
  )
}
