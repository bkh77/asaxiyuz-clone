import React from 'react'
import { Link } from 'react-router-dom'

const books = [
  {
    img: 'https://assets.asaxiy.uz/product/main_image/mobile//6358cb160c7db.jpg.webp',
    title: "Piter Hopkirk: Katta o'yin. Ikki imperiya to'qnashuvi",
    section: 'Asaxiy books kitoblari',
  },
  {
    img: 'https://assets.asaxiy.uz/product/main_image/mobile//63a3418b79531.jpg',
    title: '"Asaxiy Books yil bestsellerlari 2022" toplami',
    section: "Bestseller to'plamlar",
  },
  {
    img: 'https://assets.asaxiy.uz/product/main_image/mobile//63230a5982893.jpg.webp',
    title: "Klaus Shvab: To'rtinchi sanoat inqilobi",
    section: 'Asaxiy books kitoblari',
  },
  {
    img: 'https://assets.asaxiy.uz/product/main_image/mobile//629999705fc48.png.webp',
    title: "Super chegirma. Ellikta mashhur kitob - 999 000 So'm",
    section: "Bestseller to'plamlar",
  },
  {
    img: 'https://assets.asaxiy.uz/product/main_image/mobile//6384393a611c2.jpg.webp',
    title: 'Beshtasi birda va yetkazib berish bepul!',
    section: 'Asaxiy books kitoblari',
  },
]

export default function Books() {
  return (
    <div className="rounded-3xl  bg-white text-sm shadow-3xl">
      <div className="flex items-center justify-between px-5 pt-5">
        <p className="font-bold text-gray-light">Kitoblar</p>
        <img
          src="https://assets.asaxiy.uz/uploads//5f46535c8c1c3.png"
          alt="asaxiy books logo"
        />
      </div>

      <div className="">
        {books.map((book) => (
          <Link
            to={'#'}
            key={book.title}
            className="flex items-center space-x-2 border-b border-gray p-5"
          >
            <img className="h-20 w-20" src={book.img} alt={book.title} />
            <div>
              <p className="font-bold ">{book.title}</p>
              <p className="text-gray-light">{book.section}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
