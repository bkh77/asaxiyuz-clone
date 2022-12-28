import Banner from '../components/home/Banner'
import Books from '../components/home/Books'
import Card from '../components/home/Card'
import Sections from '../components/home/Sections'
import data from '../data/products.json'

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

      <div className="mt-6 flex flex-col space-x-5 lg:flex-row">
        <div className="lg:w-1/4">
          <Books />

          <div className="hidden lg:block">
            <p className="mb-2 mt-4 font-bold text-gray-light">Hafta tovari</p>
            <Card id={2} />

            <p className="mb-2 mt-4 font-bold text-gray-light">
              Eng yaxshi mahsulot
            </p>
            <Card id={4} />
          </div>
        </div>
        <div className="lg:w-3/4">
          <p className="py-3 font-bold text-gray-dark">Yangi chegirmalar</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 xl:grid-cols-4">
            {data
              .filter((item) => item.discount)
              .map((product) => (
                <Card key={product.id} id={product.id} />
              ))}
          </div>

          <p className="py-3 font-bold text-gray-dark">Yangi kelganlar</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 xl:grid-cols-4">
            {data
              .filter((item) => item.new)
              .map((product) => (
                <Card key={product.id} id={product.id} />
              ))}
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-3xl bg-white p-6">
        <h1 className="text-black ">Asaxiy kompaniyasi haqida</h1>

        <p>
          Butun O‘zbekiston bo‘ylab maishiy texnika va elektronika tovarlarini
          yetkazib beruvchi kompaniyamizning asosiy afzalligi – ko‘p yillik ish
          tajribasi va yaxshi nom qozonib ulgurganidir. Asos solinganidan buyon
          Asaxiy internet-do‘koni va uning jamoasi iste’mol bozorining talablari
          tendensiyalarini tinimsiz kuzatib kelmoqda; bu esa bizga eng so‘nggi
          texnologiyalar va innovatsion yechimlardan hamisha boxabar bo‘lib
          turish imkonini beradi.
        </p>

        <p className='mt-8' >
          "Asaxiy Books" MCHJ <br /> Ro'yxatdan o'tish raqami: 646439 <br />{' '}
          INN: 305829008 <br />
          MCHJ rahbari: Allayev Firuz Abdunasimovich
        </p>
      </div>
    </div>
  )
}
