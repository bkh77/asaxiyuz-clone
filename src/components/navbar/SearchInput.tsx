import { FiSearch } from 'react-icons/fi'

export default function SearchInput() {
  return (
    <div className="relative flex flex-auto ">
      <input
        className=" z-10 mr-24 h-10 w-full rounded-lg border-2 border-blue pl-2 text-sm text-blue outline-none"
        type="text"
        placeholder="Qidirish"
      />

      <button className="absolute right-0 flex h-10 w-28 items-center justify-end space-x-2  rounded-r-lg border-2 border-blue bg-blue  pr-2 text-white transition hover:bg-blue-darker">
        <FiSearch className="inline w-4" />
        <span>Qidirish</span>
      </button>
    </div>
  )
}
