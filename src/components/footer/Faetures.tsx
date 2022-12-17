import card from '../../assets/footer/card.svg'
import fastDelivery from '../../assets/footer/fast-delivery.svg'
import market from '../../assets/footer/market.svg'
import returnIcon from '../../assets/footer/return.svg'

export default function Faetures() {
  return (
    <div className="grid grid-cols-1 rounded-2xl  bg-white p-6 sm:grid-cols-2 xl:grid-cols-4 xl:space-x-4">
      <div className="flex items-center space-x-6">
        <img className="h-14 w-14" src={market} alt="market icon" />
        <div>
          <p>Endi bozorga borishga hojat yo'q</p>
          <p className="mt-1 text-sm text-gray-dark">
            Bizda qulay narxlar va yetkazib berish mavjud
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <img className="h-14 w-14" src={fastDelivery} alt="fast icon" />
        <div>
          <p>Tez yetkazib berish</p>
          <p className="mt-1 text-sm text-gray-dark">
            Bizning xizmatimiz sizni ajablantiradi
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <img className="h-14 w-14" src={returnIcon} alt="return icon" />
        <div>
          <p>Siz uchun qulayliklar</p>
          <p className="mt-1 text-sm text-gray-dark">
            Nosozlik yuzaga kelganda tez rasmiylashtirish va qaytarish kafolati
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <img className="h-14 w-14" src={card} alt="card icon" />
        <div>
          <p>Bo'lib to'lash</p>
          <p className="mt-1 text-sm text-gray-dark">
            3, 6, 9 va 12 oy davomida oldindan to'lovsiz
          </p>
        </div>
      </div>
    </div>
  )
}
