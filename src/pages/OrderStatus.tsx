import tracking from '../assets/illustration/tracking.svg'
import Input from '../components/form/Input'
import Button from '../components/form/Button'

export default function OrderStatus() {
  return (
    <div className="m-6 flex justify-center space-x-6 rounded-xl bg-white p-6 text-gray-dark">
      <div className="w-[432px]">
        <h1 className="text-center md:text-left">Buyurtma holati</h1>

        <p>
          Buyurtmani ko'rish uchun kerakli maydonlarni to'ldiring. Buyurtma
          raqami sizning raqamingizga SMS-xabar shaklida yuborilgan
        </p>

        <form onSubmit={(e) => e.preventDefault()}>
          <Input
            label="Buyurtma raqami"
            name="order-number"
            type="number"
            required
          />

          <Input
            label="Buyurtma berilgandagi telefon raqami"
            name="order-phone"
            type="tel"
            required
          />

          <div className='mt-6' >
            <Button color="primary" className='px-4' >Ko'rinish</Button>
          </div>
        </form>
      </div>

      <div className="hidden flex-grow  md:block">
        <div className="flex h-full items-center justify-center">
          <img
            className="w-[500px] "
            src={tracking}
            alt="tracking illustration"
          />
        </div>
      </div>
    </div>
  )
}
