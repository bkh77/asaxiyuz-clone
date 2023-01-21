type HumburgerMenuProps = {
  isOpen: boolean
  toggle: () => void
}

export default function HumburgerMenu({ isOpen, toggle }: HumburgerMenuProps) {
  const humburgerLine = 'w-5 h-[2px] bg-blue transition-all duration-300'
  return (
    <div onClick={toggle} className={`space-y-[3px] cursor-pointer`}>
      <div
        className={` ${humburgerLine} ${
          isOpen ? 'translate-y-[5px] rotate-45' : 'rotate-0'
        }`}
      ></div>
      <div
        className={` ${humburgerLine} ${isOpen ? 'opacity-0 ' : 'opacity-100'}`}
      ></div>
      <div
        className={` ${humburgerLine} ${
          isOpen ? '-translate-y-[5px] -rotate-45' : 'rotate-0'
        }`}
      ></div>
    </div>
  )
}
