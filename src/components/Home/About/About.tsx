import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import About1 from '~/assets/images/ambcrypto.png'
import About2 from '~/assets/images/beincrypto.png'
import About3 from '~/assets/images/coinpedia.png'
import About4 from '~/assets/images/coinspeaker.png'
import About5 from '~/assets/images/cryptonews.png'
import About6 from '~/assets/images/cryptopotato.png'
import About7 from '~/assets/images/newsbitcoin.png'
import About8 from '~/assets/images/newsbtc.png'
import About9 from '~/assets/images/utoday.png'
import { Link } from 'react-router-dom'
import { settingsAbout } from '~/configs/configs'
const slider = [
  {
    image: About1,
    link: '/'
  },
  {
    image: About2,
    link: '/'
  },
  {
    image: About3,
    link: '/'
  },
  {
    image: About4,
    link: '/'
  },
  {
    image: About5,
    link: '/'
  },
  {
    image: About6,
    link: '/'
  },
  {
    image: About7,
    link: '/'
  },
  {
    image: About8,
    link: '/'
  },
  {
    image: About9,
    link: '/'
  }
]
const About = () => {
  return (
    <div className='px-[10px] max-w-[1150px] mx-auto'>
      <h2 className='uppercase text-2xl text-[#c1c1c1] text-center mb-6'>ABOUT US IN THE PRESS</h2>
      <div className='pb-10'>
        <Slider {...settingsAbout}>
          {slider.map((item, index) => (
            <Link className='  h-full' key={index} to={`${item.link}`}>
              <div className='rounded-lg overflow-hidden mr-4 md:mr-10'>
                <div className=' rounded-lg overflow-hidden h-[33px] '>
                  <img className='w-full h-full object-contain ' src={item.image} alt={''} />
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default About
