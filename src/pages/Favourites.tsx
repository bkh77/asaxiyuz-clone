import Select from '../components/form/Select'
import FavouritesCard from '../components/favourites/FavouritesCard'

export default function Favourites() {
  return (
    <div className="mx-auto p-6 lg:max-w-6xl">
      <div className="my-6 flex flex-wrap items-center justify-between">
        <h2 className="text-2xl font-semibold">Sevimlilar</h2>

        <div className="space-x-6">
          <Select type="page" />
          <Select type="rating" />
        </div>
      </div>

      <div className="space-y-8">
        <FavouritesCard />
        <FavouritesCard />
      </div>
    </div>
  )
}
