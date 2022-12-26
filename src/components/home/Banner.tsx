import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'

export default function Banner() {
  return (
    <div className="overflow-hidden rounded-3xl">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        {[
          'https://assets.asaxiy.uz/uploads/banner/desktop/63a35bae70765.jpeg.webp',
          'https://assets.asaxiy.uz/uploads/banner/desktop/6394802f7d8a9.jpeg.webp',
          'https://assets.asaxiy.uz/uploads/banner/desktop/639af9987ef04.jpg.webp',
          'https://assets.asaxiy.uz/uploads/banner/desktop/6399bcb7c7789.png.webp',
          'https://assets.asaxiy.uz/uploads/banner/desktop/63913f57e2ba9.jpeg.webp',
        ].map((link) => (
          <SwiperSlide key={link}>
            <img
              src={link}
              className="h-full w-full cursor-pointer rounded-3xl object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
