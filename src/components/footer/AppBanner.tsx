import asaxiyApp from '../../assets/banner/asaxiy-app.png'
import asaxiyLogoWhite from '../../assets/banner/asaxiy-logo-white.svg'
import appStore from '../../assets/banner/app-store.svg'
import googlePlay from '../../assets/banner/google-play.svg'

export default function AppBanner() {
  return (
    <div className="mx-auto max-w-[1336px]">
      <div className="m-6 flex h-60 overflow-hidden rounded-3xl bg-blue">
        <div className="hidden flex-1 items-start md:block">
          <img className="lg:ml-36" src={asaxiyApp} alt="asaxiy app" />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center space-y-4">
          <img src={asaxiyLogoWhite} alt="asaxiy logo white" />
          <p className="text-white">Sizning internet do'koningiz</p>
          <div className="flex flex-wrap space-x-4">
            <img className="h-12 w-[150px]" src={appStore} alt="app store" />
            <img
              className="h-12 w-[150px]"
              src={googlePlay}
              alt="google play"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
