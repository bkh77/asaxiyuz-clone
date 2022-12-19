import { InputHTMLAttributes } from 'react'

type InputProps = {
  name: string
  label: string
} & InputHTMLAttributes<HTMLInputElement>

export default function Input({ name, label, ...rest }: InputProps) {
  return (
    <>
      <label className="text-sm" htmlFor={name}>
        {label}
        <span className="text-red">*</span>
      </label>
      <input
        id={name}
        className="mt-2 w-full rounded-md border-2 border-gray-light px-2 py-1 outline-none transition-all focus:border-blue"
        {...rest}
      />
    </>
  )
}
