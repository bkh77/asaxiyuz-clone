import Input from '../components/form/Input'
import Button from '../components/form/Button'

export default function OrderPay() {
  return (
    <div className="my-12 mx-auto w-96  rounded-xl bg-white p-6 text-gray-dark shadow-lg">
      <h1>To'lov qilish</h1>

      <p className="mb-4">Buyurtma raqamini bexato kiriting</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          label="Buyurtma raqami"
          type="number"
          name="order-pay"
          required
        />

        <div className="mt-4">
          <Button color="primary">Tasdiqlash</Button>
        </div>
      </form>
    </div>
  )
}
