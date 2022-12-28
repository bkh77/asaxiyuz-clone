import { useParams } from 'react-router-dom'
import data from '../data/products.json'
import { MdKeyboardArrowRight } from 'react-icons/md'
import MainDetails from '../components/product-detals/MainDetails'

export default function ProductDeatils() {
  const { id } = useParams()
  const product = data.find((item) => item.id === id)
  if (product == null) return null

  return (
    <div className="px-4 my-8">
      <div className="flex flex-wrap items-center  text-xs font-bold text-gray-dark">
        <span>Bosh sahifa </span>
        <MdKeyboardArrowRight className="h-4 w-4" />
        <span>Mahsulotlar</span>
        <MdKeyboardArrowRight className="h-4 w-4" />
        <span>Kompyuterlar va orgtexnika</span>
        <MdKeyboardArrowRight className="h-4 w-4" />
        <span>Noutbuklar va aksessuarlar</span>
        <MdKeyboardArrowRight className="h-4 w-4" />
        <span>Noutbuklar</span>
        <MdKeyboardArrowRight className="h-4 w-4" />
        <span className="text-black">{product.title}</span>
      </div>

      <MainDetails id={id} />
    </div>
  )
}
