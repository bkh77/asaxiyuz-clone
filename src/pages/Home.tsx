import Banner from '../components/home/Banner'
import Books from '../components/home/Books'
import Card from '../components/home/Card'
import Sections from '../components/home/Sections'

export default function Home() {
  return (
    <div className="p-6">
      <div className="flex flex-col max-xl:space-y-6 xl:flex-row xl:space-x-6">
        <div className="w-full xl:w-3/4">
          <Banner />
        </div>

        <div className="overflow-hidden rounded-3xl">
          <img
            className="hidden h-full w-full object-cover xl:block"
            src="https://assets.asaxiy.uz/uploads/toptoday/mobile/63a2f393973fa.jpg"
            alt="toptoday"
          />
          <img
            className="h-full w-full object-cover xl:hidden"
            src="https://assets.asaxiy.uz/uploads/toptoday/desktop/63a2f387e560e.jpg"
            alt="toptoday"
          />
        </div>
      </div>

      <Sections />

      <div className="mt-6 flex space-x-4">
        <div className="">
          <Books />

          <p className="mb-2 mt-4 font-bold text-gray-light">Hafta tovari</p>
          <Card />

          <p className="mb-2 mt-4 font-bold text-gray-light">
            Eng yaxshi mahsulot
          </p>
          <Card />
        </div>
        <div>
          <p className="py-3 font-bold text-gray-light">Yangi chegirmalar</p>
          <div className="grid grid-cols-4 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}
