import { useEffect, useState } from 'react'
import PlayStation from '~/assets/images/ps.png'
import PlayStationMin from '~/assets/images/ps.webp'
import FreeFire from '~/assets/images/freefire.png'
import FreeFireMin from '~/assets/images/freefirenew.webp'
import RazerGold from '~/assets/images/razergold.png'
import RazerGoldMin from '~/assets/images/razergold.webp'
import Iturn from '~/assets/images/itunes.png'
import IturnMin from '~/assets/images/itunes.webp'
import PUBG from '~/assets/images/pubg.png'
import PUBGMin from '~/assets/images/pubg.webp'
import Steam from '~/assets/images/steam.png'
import SteamMin from '~/assets/images/steam.webp'
import GooglePlay from '~/assets/images/google-play.png'
import GooglePlayMin from '~/assets/images/google-play.webp'
import Xbox from '~/assets/images/xboxs.png'
import XboxMin from '~/assets/images/xboxs.webp'
import ROBLOX from '~/assets/images/robolox.png'
import ROBLOXMin from '~/assets/images/robolox.webp'
import NINTENDO from '~/assets/images/nintendo.png'
import NINTENDOMin from '~/assets/images/nintendo.webp'
import AMAZON from '~/assets/images/amazon.png'
import AMAZONMin from '~/assets/images/amazon.webp'
import SKYPE from '~/assets/images/skype.png'
import SKYPEMin from '~/assets/images/skype.webp'
import { Link } from 'react-router-dom'

type GameItem = {
  imageline: string
  imagemin: string
  nameGame: string
}
const data = [
  { imageline: FreeFire, imagemin: FreeFireMin, nameGame: 'PLAYSTATION' , link:'https://www.buysellvouchers.com/en/products/list/Games-Free_Fire/'},
  { imageline: RazerGold, imagemin: RazerGoldMin, nameGame: 'RAZER GOLD', link:'https://www.buysellvouchers.com/en/products/list/Gift_cards-Razer_Gold/' },
  { imageline: Iturn, imagemin: IturnMin, nameGame: 'ITUNES', link:'https://www.buysellvouchers.com/en/products/list/Gift_cards-iTunes_Gift_Cards/' },
  { imageline: PlayStation, imagemin: PlayStationMin, nameGame: 'PLAYSTATION', link:'https://www.buysellvouchers.com/en/products/list/Gift_cards-PlayStation_network_aka_psn/' },
  { imageline: PUBG, imagemin: PUBGMin, nameGame: 'PUBG', link:'https://www.buysellvouchers.com/en/products/list/Games-PLAYERUNKNOWNS_BATTLEGROUNDS_aka_PUBG/' },
  { imageline: Steam, imagemin: SteamMin, nameGame: 'STEAM', link:'https://www.buysellvouchers.com/en/products/list/Gift_cards-Steam_Gift_Cards/' },
  { imageline: GooglePlay, imagemin: GooglePlayMin, nameGame: 'GOOGLE PLAY  ', link:'https://www.buysellvouchers.com/en/products/list/Gift_cards-Google_Play_Gift_Cards/' },
  { imageline: Xbox, imagemin: XboxMin, nameGame: 'XBOX' , link:'https://www.buysellvouchers.com/en/products/list/Gift_cards-Xbox/'},
  { imageline: ROBLOX, imagemin: ROBLOXMin, nameGame: 'ROBLOX',link:'https://www.buysellvouchers.com/en/products/list/Gift_cards-Roblox/'},
  { imageline: NINTENDO, imagemin: NINTENDOMin, nameGame: 'NINTENDO',link:'https://www.buysellvouchers.com/en/products/list/Games-Nintendo/' },
  { imageline: AMAZON, imagemin: AMAZONMin, nameGame: 'AMAZON',link:'https://www.buysellvouchers.com/en/products/list/Gift_cards-Amazon_Gift_cards/' },
  { imageline: SKYPE, imagemin: SKYPEMin, nameGame: 'SKYPE  ',link:'https://www.buysellvouchers.com/en/products/list/VoIP-Buy_Skype_Credit/' }
]

const PopularCategories = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const getImageSource = (item: GameItem) => {
    // Choose the appropriate image source based on window width
    return windowWidth <= 1280 ? item.imagemin : item.imageline
  }

  return (
    <div className='w-11/12 h-auto flex flex-col justify-center items-center'>
      <h2 className='uppercase text-2xl text-[#c1c1c1] text-center mb-4'>Popular Categories</h2>

      <div className='grid  grid-cols-2 sm:grid-cols-2 gap-3 xl:gap-x-20 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6	'>
        {data.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className='mx-3 w-[155px] h-[125px] sm:h-[125px] md:h-[125px] xl:w-[122px] xl:h-[191px] flex-col text-center rounded-2xl shadow-xl pb-3 xl:pb-0'
          >
            <img
              src={getImageSource(item)}
              alt={item.nameGame}
              className='w-full h-auto rounded-tl-2xl rounded-tr-2xl mb-3'
            />
            <p className='text-xs text-gray68'>{item.nameGame}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PopularCategories
