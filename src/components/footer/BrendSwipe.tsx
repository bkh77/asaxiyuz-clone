import Carousel from 'react-multi-carousel'
import apple from '../../assets/brends/apple.webp'
import artel from '../../assets/brends/artel.webp'
import aser from '../../assets/brends/aser.webp'
import bosch from '../../assets/brends/bosch.webp'
import eblaze from '../../assets/brends/eblaze.jpg'
import hotpoint from '../../assets/brends/hotpoint.webp'
import hp from '../../assets/brends/hp.webp'
import huawei from '../../assets/brends/huawei.webp'
import midea from '../../assets/brends/midea.webp'
import rezer from '../../assets/brends/rezer.webp'
import samsung from '../../assets/brends/samsung.webp'
import tplink from '../../assets/brends/tplink.webp'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
}

const brends = [
  {
    src: apple,
    name: 'apple',
  },
  {
    src: artel,
    name: 'artel',
  },
  {
    src: aser,
    name: 'aser',
  },
  {
    src: bosch,
    name: 'bosch',
  },
  {
    src: eblaze,
    name: 'eblaze',
  },
  {
    src: hotpoint,
    name: 'hotpoint',
  },
  {
    src: hp,
    name: 'hp',
  },
  {
    src: huawei,
    name: 'huawei',
  },
  {
    src: midea,
    name: 'midea',
  },
  {
    src: rezer,
    name: 'rezer',
  },
  {
    src: samsung,
    name: 'samsung',
  },
  {
    src: tplink,
    name: 'tplink',
  },
]

export default function BrendSwipe() {
  return (
    <div className="mx-auto max-w-[1336px]">
      <div className="m-6 rounded-3xl bg-white p-6 shadow-3xl">
        <Carousel
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          customTransition="all .5s"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
        >
          {brends.map(({ name, src }) => (
            <div key={name}>
              <img src={src} className="h-14 w-44 object-contain" alt="brend" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
