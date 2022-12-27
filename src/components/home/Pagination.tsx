import { useState } from 'react'
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx'

export default function Pagination() {
  const [isActive, setIsActive] = useState(1)
  return (
    <div className="mt-6 flex flex-row justify-end space-x-2 text-sm font-medium text-blue">
      {[<RxDoubleArrowLeft />, 1, 2, 3, 4, 5, <RxDoubleArrowRight />].map(
        (item, index) => (
          <div
            key={index}
            onClick={() => setIsActive(index)}
            className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-[10px] transition hover:bg-blue/70 hover:text-white ${
              isActive === index ? 'bg-blue text-white' : 'bg-white'
            }`}
          >
            {item}
          </div>
        )
      )}
    </div>
  )
}
