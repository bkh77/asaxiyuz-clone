import { SelectHTMLAttributes } from 'react'
import { FaAngleDown } from 'react-icons/fa'

type SelectProps = {
  type: 'page' | 'rating'
} & SelectHTMLAttributes<HTMLSelectElement>

export default function Select({ type, className, ...rest }: SelectProps) {
  return (
    <div className="relative inline-block">
      <select
        className={`cursor-pointer rounded-lg border-2 border-blue px-4 py-[2px] text-xs text-gray-dark  outline-none ${className}`}
        {...rest}
      >
        {type === 'page' ? (
          <>
            <option>12</option>
            <option>24</option>
            <option>48</option>
            <option>60</option>
          </>
        ) : (
          <>
            <option>Reyting (yuqoridan boshlab)</option>
            <option>Reyting (quyisidan boshlab)</option>
            <option>Saralash</option>
            <option>Yangi kelganlar</option>
            <option>Avval arzonlari</option>
            <option>Avval qimmatlari</option>
          </>
        )}
      </select>
      <span className="absolute top-0 right-0 flex h-6 w-6 items-center justify-center rounded-lg bg-blue text-white">
        <FaAngleDown className="h-4 w-4" />
      </span>
    </div>
  )
}
