import data from '../../data/products.json'

export default function Features({ id }: { id: string | undefined }) {
  const product = data.find((item) => item.id === id)
  if (product == null) return null

  return (
    <div className="product-features mt-10 rounded-3xl bg-white p-6 font-semibold text-gray-light max-sm:text-sm">
      <h2 className="mb-4 text-2xl font-medium text-black">Xususiyatlar</h2>

      <div>
        Protsessor <span>{product.protsessor}</span>
      </div>
      <div>
        GPU video card turi <span>{product.typeVideoCard}</span>
      </div>
      <div>
        GPU video card <span>{product.videoCardName}</span>
      </div>
      <div>
        Tezkor xotira <span>{product.ram}</span>
      </div>
      <div>
        Og'irligi <span>{product.weight}</span>
      </div>
      <div>
        O'lchami <span>{product.size}</span>
      </div>
      <div>
        Количество ядер процессора <span>{product.cores}</span>
      </div>
      <div>
        Ekran o‘lchami <span>{product.screenSize}</span>
      </div>
      <div>
        Ekran turi <span>{product.screenOverlay}</span>
      </div>
      <div>
        Kafolat muddati <span>{product.warranty}</span>
      </div>
      <div>
        WiFi aloqa moduli <span>{product.wifi}</span>
      </div>
      <div>
        Protsessor chastotasi, gigagerts <span>{product.refreshRate}</span>
      </div>
      <div>
        Operatsion tizim (OS) <span>{product.os}</span>
      </div>
      <div>
        HDMI port<span>{product.hdmiPorts}</span>
      </div>
      <div>
        USB port<span>{product.usbPorts}</span>
      </div>
      <div>
        Ishlab chiqaruvchi mamlakat <span>{product.made}</span>
      </div>
    </div>
  )
}
