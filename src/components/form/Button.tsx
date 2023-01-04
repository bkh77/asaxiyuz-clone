import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  color: 'primary' | 'orange' | 'green' | 'orange-outline' | 'primary-outline'
} & ButtonHTMLAttributes<HTMLButtonElement>

const theme = {
  primary: 'bg-blue before:bg-blue-darker/50 text-white',
  orange: 'bg-orange before:bg-orange-dark/50 text-white',
  green: 'bg-green before:bg-green-dark/50 text-white',
  'orange-outline':
    'bg-white before:bg-orange-dark/50 border border-orange text-orange hover:bg-orange hover:text-white',
  'primary-outline':
    'before:bg-blue-dark/50 border border-blue text-blue hover:bg-blue hover:text-white',
}

export default function Button({
  children,
  className,
  color,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`btn ${theme[color]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
