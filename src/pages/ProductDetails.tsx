import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import MainDetails from '../components/product-detals/MainDetails'
import Features from '../components/product-detals/Features'
import data from '../data/products.json'

export default function ProductDetails() {
  const { id } = useParams()
  const product = data.find((item) => item.id === id)

  if (product == null) return null

  return (
    <div className="my-8 px-4">
      <div className="flex flex-wrap items-center  text-xs font-bold text-gray-dark">
        <Link to={'/'} className="text-blue">
          Bosh sahifa
        </Link>
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

      <div className="mt-12 rounded-3xl bg-white p-6">
        <h2 className="mb-6 text-2xl font-medium">Mahsulot ta'rifi</h2>

        <p>{product.description}</p>
      </div>

      <Features id={id} />

      <div className="mt-10 rounded-3xl bg-white p-6">
        <h2 className="mb-2 text-2xl font-medium">Sharhlar</h2>
        <div className="border-b-2 border-gray-light"></div>

        <p className="mt-6  cursor-pointer font-medium underline">
          Sharh qoldirish
        </p>
      </div>
    </div>
  )
}
