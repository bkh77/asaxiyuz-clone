import { Link } from 'react-router-dom'
import Button from '../form/Button'

export default function FavouritesCard() {
  return (
    <div className="flex flex-col rounded-2xl bg-white p-4 shadow-lg lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center">
        <Link to={'#'}>
          <div className="mr-6 h-28 w-28 overflow-hidden rounded-md p-3 shadow-lg lg:h-32 lg:w-32">
            <img
              className="h-full w-full object-cover"
              src="https://picsum.photos/200/200"
              alt="photo"
            />
          </div>
        </Link>
        <Link
          to={'#'}
          className="text-lg font-semibold hover:text-blue lg:text-xl"
        >
          Vikas Svarup: Xarobadan chiqqan millioner
        </Link>
      </div>

      <div className="my-4 text-right lg:text-left">
        <p className="text-sm text-red-dark line-through">45 000 so'm</p>
        <p className="font-bold">39 000 so'm</p>
        <p className="text-sm">4 300 so'm / 12 oy</p>
      </div>

      <div className="flex  lg:flex-col lg:space-y-4 ">
        <Button className="lg:w-48" color="primary">
          Savatga qo'shish
        </Button>

        <Button className="ml-auto lg:w-48" color="orange">
          O'chirish
        </Button>
      </div>
    </div>
  )
}
