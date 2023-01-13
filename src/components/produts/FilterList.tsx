type FilterListProps = {
  items: string[]
  title: string
}

export default function FilterList({ items, title }: FilterListProps) {
  return (
    <div className="mb-8 rounded-3xl bg-white py-3 font-medium text-gray-dark shadow-3xl">
      <p className="px-6">{title}</p>

      <ul>
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center space-x-2 border-b border-gray py-3 px-6 text-sm"
          >
            <input id={item} className="h-4 w-4" type="checkbox" />
            <label htmlFor={item}>{item}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}
