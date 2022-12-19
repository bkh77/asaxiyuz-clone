import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button className={`btn ${className}`} {...rest}>
      {children}
    </button>
  )
}
