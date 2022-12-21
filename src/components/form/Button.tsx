import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  color: 'primary' | 'orange'
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  children,
  className,
  color,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`btn ${
        color === 'primary'
          ? 'bg-blue before:bg-blue-darker/50'
          : 'bg-orange before:bg-orange-dark/50'
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
