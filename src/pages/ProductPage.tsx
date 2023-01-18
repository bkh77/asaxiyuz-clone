import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import FilterList from '../components/produts/FilterList'
import Select from '../components/form/Select'
import data from '../data/products.json'
import Card from '../components/home/Card'
import Pagination from '../components/produts/Pagination'
import LaptopTips from '../components/produts/LaptopTips'

export default function ProductPage() {
  return (
    <div className="my-8 px-4">
      <div className="flex flex-wrap items-center  text-xs font-bold text-gray-dark ">
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
        <span className="text-black">Noutbuklar</span>
      </div>

      <div className="mt-8 flex space-x-8">
        <div className="hidden w-1/4 lg:block">
          <FilterList
            title="Ishlab chiqaruvchi"
            items={[
              'ASUS',
              'Acer',
              'Apple',
              'DELL',
              'Hewlett-Packard',
              'Honor',
              'Huawei',
              'Lenovo',
            ]}
          />
          <FilterList
            title="Количество ядер процессора"
            items={['10', '12', '14', '8', '6', '4', '2']}
          />
          <FilterList
            title="Tezkor xotira"
            items={[
              'DDR4 4GB',
              'DDR4 8GB',
              'DDR4 12GB',
              'DDR4 24GB',
              'DDR5 4GB',
              'DDR5 8GB',
              'DDR5 12GB',
              'DDR5 24GB',
            ]}
          />
          <FilterList
            title="Ekran o‘lchami"
            items={['11"-11.9"', '13.3"', ' 14"', '15.6"', '16"', ' 17.3"']}
          />
          <FilterList
            title="Ekran o'lchamlari"
            items={[
              '1366х768',
              '1600х900',
              '1920х1080',
              '1920х1200',
              '2560х1600',
            ]}
          />
          <FilterList title="Sensorli ekran" items={['Есть', 'нет']} />
          <FilterList
            title="Тип видеокарты"
            items={['Встроенная', 'Дискретная', 'Дискретная и встроенная']}
          />
        </div>

        <div className="lg:w-3/4">
          <div className="mb-6 flex flex-wrap items-center justify-between">
            <h2 className="text-xl font-semibold">Noutbuklar</h2>

            <div className="space-x-6">
              <Select type="page" />
              <Select type="rating" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 xl:grid-cols-4">
            {data.map((item) => (
              <Card key={item.id} id={item.id} />
            ))}
          </div>

          <Pagination />

          <LaptopTips />
        </div>
      </div>
    </div>
  )
}
