export default function Sections() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4 text-center sm:grid-cols-3 lg:hidden">
      {[
        {
          title: 'Televizorlar, video va audio',
          link: 'https://asaxiy.uz/custom-assets/images/icons/c_tv.svg',
        },
        {
          title: 'Kompyuterlar va orgtexnika',
          link: 'https://asaxiy.uz/custom-assets/images/icons/c_pc.svg',
        },
        {
          title: 'Kitoblar',
          link: 'https://asaxiy.uz/custom-assets/images/icons/c_book.svg',
        },
        {
          title: 'Maishiy texnika',
          link: 'https://asaxiy.uz/custom-assets/images/icons/c_mach.svg',
        },
        {
          title: 'Telefonlar va gadjetlar',
          link: 'https://asaxiy.uz/custom-assets/images/icons/c_ph.svg',
        },
        {
          title: 'Idish-tovoqlar',
          link: 'https://asaxiy.uz/custom-assets/images/icons/c_kitch.svg',
        },
      ].map(({ link, title }) => (
        <div key={title} className="cursor-pointer">
          <div className="flex items-center justify-center rounded-3xl bg-white p-6">
            <img src={link} alt={title} />
          </div>
          <p className="my-2 hover:text-blue">{title}</p>
        </div>
      ))}
    </div>
  )
}
