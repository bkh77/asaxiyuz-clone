import Input from '../components/form/Input'
import Button from '../components/form/Button'

export default function OrderPay() {
  return (
    <div className="my-12 mx-auto w-96  rounded-xl bg-white p-6 text-gray-dark shadow-lg">
      <h1>To'lov qilish</h1>

      <p className="mb-4">
        Buyurtma yoki shaxsiy ID raqamingizni bexato kiriting
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          placeholder="NAMUNA: A777 yoki B999 yoki M333"
          type="number"
          name="order-pay"
          required
        />

        <div className="mt-6">
          <Button color="primary" className="px-4">
            Tasdiqlash
          </Button>
        </div>

        <div className="mt-6 space-y-3 text-[10px]">
          <p>B - buyurtma uchun</p>
          <p>A - akkount uchun</p>
          <p>M - rassrochkani so'ndirish uchun</p>
        </div>
      </form>
    </div>
  )
}
