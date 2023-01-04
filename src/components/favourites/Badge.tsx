import { ReactNode } from 'react'

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <div className="mt-2 inline-block cursor-pointer rounded-lg bg-blue py-1 px-2 text-sm font-normal text-white transition hover:bg-blue-darker">
      {children}
    </div>
  )
}
