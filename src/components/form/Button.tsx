import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  color: 'primary' | 'orange' | 'green'
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
          : color === 'orange'
          ? 'bg-orange before:bg-orange-dark/50'
          : 'bg-green before:bg-green-dark/50'
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
