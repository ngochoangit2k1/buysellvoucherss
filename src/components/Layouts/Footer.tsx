import { Link } from 'react-router-dom'
import BitcoinIcon from '~/assets/icons/bitcoin.png'
import BusdIcon from '~/assets/icons/busdbep20.png'
import DaiIcon from '~/assets/icons/daibep20.png'
import EthIcon from '~/assets/icons/ethereum.png'
import LiteIcon from '~/assets/icons/litecoin.png'
import TrcIcon from '~/assets/icons/trc20.png'
import ErcIcon from '~/assets/icons/erc20.png'
const Footer = () => {
  return (
    <>
      <div className='shadow py-5 px-2.5'>
        <div className='max-w-[1150px] mx-auto grid grid-cols-2 gap-3 md:grid-cols-4 lg:flex justify-between'>
          <div className='flex gap-x-1 items-center'>
            <img className='w-5 h-5 rounded-full' src={BitcoinIcon} alt='BitcoinIcon' />
            <p className='text-base text-gray68'>Bitcoin</p>
          </div>
          <div className='flex gap-x-1 items-center'>
            <img className='w-5 h-5 rounded-full' src={BusdIcon} alt='BusdIcon' />
            <p className='text-base text-gray68'>BUSD</p>
          </div>
          <div className='flex gap-x-1 items-center'>
            <img className='w-5 h-5 rounded-full' src={DaiIcon} alt='DaiIcon' />
            <p className='text-base text-gray68'>DAI</p>
          </div>
          <div className='flex gap-x-1 items-center'>
            <img className='w-5 h-5 rounded-full' src={EthIcon} alt='EthIcon' />
            <p className='text-base text-gray68'>Ethererum</p>
          </div>
          <div className='flex gap-x-1 items-center'>
            <img className='w-5 h-5 rounded-full' src={LiteIcon} alt='LiteIcon' />
            <p className='text-base text-gray68'>Litecoin</p>
          </div>
          <div className='flex gap-x-1 items-center'>
            <img className='w-5 h-5 rounded-full' src={TrcIcon} alt='TrcIcon' />
            <p className='text-base text-gray68'>Tether TRC 20</p>
          </div>
          <div className='flex gap-x-1 items-center'>
            <img className='w-5 h-5 rounded-full' src={ErcIcon} alt='ErcIcon' />
            <p className='text-base text-gray68'>Tether ERC 20</p>
          </div>
        </div>
      </div>
      <div className='bg-orangef0 text-white pt-[50px] '>
        <div className=' max-w-[1150px] mx-auto px-[10px] gap-x-[10px] pb-[30px] gap-y-[30px] grid grid-cols-2 lg:flex lg:justify-between'>
          <div className='text-sm hidden lg:block '>
            <div className='lg:flex'>
              <p>
                See our <strong>274 </strong> reviews on
              </p>
              <div className='flex items-center justify-start mb-3'>
                <div className='flex items-center gapx-3 text-[#00B67A]'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                  <span className='text-white'>Trustpilot</span>
                </div>
              </div>
            </div>
            <div className='w-[30px] h-[30px] group hover:bg-orangef0 transition-colors duration-200 cursor-pointer mb-3 rounded bg-white border-white border flex justify-center items-center xl:mt-4'>
              <svg
                className='w-[19.31px] h-[15.17px] transition-colors duration-200 group-hover:fill-white'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                fill='#F07E13'
                x='0px'
                y='0px'
                viewBox='100 90 200 220'
              >
                <title>Twitter</title>
                <g>
                  <path
                    d='M153.6,301.6c94.3,0,145.9-78.2,145.9-145.9c0-2.2,0-4.4-0.1-6.6c10-7.2,18.7-16.3,25.6-26.6
		c-9.2,4.1-19.1,6.8-29.5,8.1c10.6-6.3,18.7-16.4,22.6-28.4c-9.9,5.9-20.9,10.1-32.6,12.4c-9.4-10-22.7-16.2-37.4-16.2
		c-28.3,0-51.3,23-51.3,51.3c0,4,0.5,7.9,1.3,11.7c-42.6-2.1-80.4-22.6-105.7-53.6c-4.4,7.6-6.9,16.4-6.9,25.8
		c0,17.8,9.1,33.5,22.8,42.7c-8.4-0.3-16.3-2.6-23.2-6.4c0,0.2,0,0.4,0,0.7c0,24.8,17.7,45.6,41.1,50.3c-4.3,1.2-8.8,1.8-13.5,1.8
		c-3.3,0-6.5-0.3-9.6-0.9c6.5,20.4,25.5,35.2,47.9,35.6c-17.6,13.8-39.7,22-63.7,22c-4.1,0-8.2-0.2-12.2-0.7
		C97.7,293.1,124.7,301.6,153.6,301.6'
                  ></path>
                </g>
              </svg>
            </div>
            <div className='w-[30px] h-[30px] group hover:bg-orangef0 transition-colors duration-200 cursor-pointer rounded bg-white border-white border flex items-center justify-center'>
              <svg
                version='1.1'
                x='0px'
                y='0px'
                fill='#F07E13'
                className='w-[10.5px] h-[21px] transition-colors duration-200 group-hover:fill-white'
                viewBox='100 20 136.893 266.895'
                enable-background='new 0 0 266.893 266.895'
              >
                <title>Facebook</title>
                <path
                  d='M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935
	l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585
	v99.803H182.409z'
                ></path>
              </svg>
            </div>
          </div>
          <div className='lg:ml-14'>
            <h4 className='text-3xl font-bold mb-6'>Support</h4>
            <ul className='flex flex-col gap-y-5 text-base md:text-xl'>
              <li className='hover:scale-x-[1.02] hover:-translate-y-[1px] transition-all '>
                <Link to={'https://www.buysellvouchers.com/en/site/howItWorks/'}>How it works</Link>
              </li>
              <li className='hover:scale-x-[1.02] hover:-translate-y-[1px] transition-all '>
                <Link to={'https://www.buysellvouchers.com/en/faq/index/'}>FAQ</Link>
              </li>
              <li className='hover:scale-x-[1.02] hover:-translate-y-[1px] transition-all '>
                <Link to={'https://www.buysellvouchers.com/en/support/index/'}>Help Center</Link>
              </li>
              <li className='hover:scale-x-[1.02] hover:-translate-y-[1px] transition-all '>
                <Link to={'https://www.youtube.com/playlist?list=PLr3eFXJlAJYMApaxkeX6nXlpCgzD7YBQy'}>Video Tutorial</Link>
              </li>
              <li className='hover:scale-x-[1.02] hover:-translate-y-[1px] transition-all '>
                <Link to={'https://www.buysellvouchers.com/en/site/map/'}>Sitemap</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='text-3xl font-bold mb-6'>Legal</h4>
            <ul className='flex flex-col gap-y-5 text-base md:text-xl'>
              <li className='hover:scale-x-[1.02] hover:-translate-y-[1px] transition-all '>
                <Link target="_blank" to={'https://www.buysellvouchers.com/en/privacy-and-cookies-policy/'}>Privacy & Cookies Policy</Link>
              </li>
              <li className='hover:scale-x-[1.02] hover:-translate-y-[1px] transition-all '>
                <Link target="_blank" to={'https://www.buysellvouchers.com/en/terms-and-conditions/'}>Terms & Conditions</Link>
              </li>
              <li className='hover:scale-x-[1.02] hover:-translate-y-[1px] transition-all '>
                <Link target="_blank" to={'https://www.buysellvouchers.com/en/site/AMLPolicy/'}>AML Policy</Link>
              </li>
              <li className='hover:scale-x-[1.02] hover:-translate-y-[1px] transition-all '>
                <Link target="_blank" to={'https://www.buysellvouchers.com/en/dispute/'}>Dispute Center</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='text-3xl font-bold mb-6'>About</h4>
            <ul className='flex flex-col gap-y-5 text-xl md:text-xl'>
              <li className='hover:scale-x-[1.02] hover:-translate-y-[1px] transition-all '>
                <Link to={'https://www.buysellvouchers.com/en/site/aboutUs/'}>About Us</Link>
              </li>
              <li className='hover:scale-x-[1.02] hover:-translate-y-[1px] transition-all '>
                <Link to={'https://www.buysellvouchers.com/en/site/aboutUs/'}>Work with us</Link>
              </li>
              <li className='hover:scale-x-[1.02] hover:-translate-y-[1px] transition-all '>
                <Link to={'https://www.buysellvouchers.com/en/sell-gift-cards/'}>Sell gift cards</Link>
              </li>
              <li className='hover:scale-x-[1.02] hover:-translate-y-[1px] transition-all '>
                <Link to={'https://www.buysellvouchers.com/en/buy-gift-cards/'}>Buy gift cards</Link>
              </li>
              <li className='hover:scale-x-[1.02] hover:-translate-y-[1px] transition-all '>
                <Link to={'https://www.buysellvouchers.com/en/news/'}>News</Link>
              </li>
            </ul>
          </div>
          <div className='text-sm lg:hidden'>
            <div className='lg:flex'>
              <p>
                See our <strong>274 </strong> reviews on
              </p>
              <div className='flex items-center justify-start mb-3'>
                <div className='flex items-center gapx-3 text-[#00B67A]'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                  <span className='text-white'>Trustpilot</span>
                </div>
              </div>
            </div>
            <div className='w-[30px] h-[30px] group hover:bg-orangef0 transition-colors duration-200 cursor-pointer mb-3 rounded bg-white border-white border flex justify-center items-center'>
              <svg
                className='w-[19.31px] h-[15.17px] transition-colors duration-200 group-hover:fill-white'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                fill='#F07E13'
                x='0px'
                y='0px'
                viewBox='100 90 200 220'
              >
                <title>Twitter</title>
                <g>
                  <path
                    d='M153.6,301.6c94.3,0,145.9-78.2,145.9-145.9c0-2.2,0-4.4-0.1-6.6c10-7.2,18.7-16.3,25.6-26.6
		c-9.2,4.1-19.1,6.8-29.5,8.1c10.6-6.3,18.7-16.4,22.6-28.4c-9.9,5.9-20.9,10.1-32.6,12.4c-9.4-10-22.7-16.2-37.4-16.2
		c-28.3,0-51.3,23-51.3,51.3c0,4,0.5,7.9,1.3,11.7c-42.6-2.1-80.4-22.6-105.7-53.6c-4.4,7.6-6.9,16.4-6.9,25.8
		c0,17.8,9.1,33.5,22.8,42.7c-8.4-0.3-16.3-2.6-23.2-6.4c0,0.2,0,0.4,0,0.7c0,24.8,17.7,45.6,41.1,50.3c-4.3,1.2-8.8,1.8-13.5,1.8
		c-3.3,0-6.5-0.3-9.6-0.9c6.5,20.4,25.5,35.2,47.9,35.6c-17.6,13.8-39.7,22-63.7,22c-4.1,0-8.2-0.2-12.2-0.7
		C97.7,293.1,124.7,301.6,153.6,301.6'
                  ></path>
                </g>
              </svg>
            </div>
            <div className='w-[30px] h-[30px] group hover:bg-orangef0 transition-colors duration-200 cursor-pointer rounded bg-white border-white border flex items-center justify-center'>
              <svg
                version='1.1'
                x='0px'
                y='0px'
                fill='#F07E13'
                className='w-[10.5px] h-[21px] transition-colors duration-200 group-hover:fill-white'
                viewBox='100 20 136.893 266.895'
                enable-background='new 0 0 266.893 266.895'
              >
                <title>Facebook</title>
                <path
                  d='M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935
	l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585
	v99.803H182.409z'
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className=' px-[10px] text-center py-10 border-t border-white md:max-w-[1150px] mx-auto'>
          <p className='text-base font-bold'>© 2023 Buysellvouchers.com All Rights Reserved</p>
          <p className='text-base'>All product names are trademark of their respective companies</p>
        </div>
      </div>
    </>
  )
}

export default Footer
