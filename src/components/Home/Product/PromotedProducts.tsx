/* eslint-disable @typescript-eslint/no-explicit-any */
import Hero from '~/assets/icons/hero.svg'
import Gif from '~/assets/images/bonus-orange.png'
import More from '~/assets/images/more_opt_w.png'
import Delay from '~/assets/images/delay.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Goldbelly from '~/assets/mini_img/goldbelly.webp'
import AmazonDe from '~/assets/mini_img/amazonde.webp'
import XboxEa from '~/assets/mini_img/xboxEa.webp'
import PSNPlus from '~/assets/mini_img/PSNPlus.webp'
import XboxUlti from '~/assets/mini_img/XboxUltimate5.webp'
import Pubg8100 from '~/assets/mini_img/Pubg8100.webp'
import OhamaSteaks from '~/assets/mini_img/OhamaSteaks.webp'
import XboxUltimate5 from '~/assets/mini_img/XboxUltimate5.webp'
import PNSPlus from '~/assets/mini_img/PNSPlus.webp'
import PSNPlus12 from '~/assets/mini_img/PSNPlus12.webp'
import Skype from '~/assets/mini_img/Skype.webp'
import PlayStation from '~/assets/mini_img/PlayStation.webp'
import Pubg60 from '~/assets/mini_img/Pubg60.webp'
import iTurn from '~/assets/mini_img/iTunes.png'
const PromotedProducts = () => {
  return (
    <div className='px-[10px]'>
      {' '}
      <h2 className='uppercase mt-12 text-2xl text-[#c1c1c1] text-center mb-4'>PROMOTED PRODUCTS</h2>
      <ListProduct />
    </div>
  )
}
export const ListProduct = () => {
  const [page, setPage] = useState(1)
  const datax = [
    {
      id: '1',
      imageMin: Goldbelly,
      productName: 'Goldbelly Gift Card $100',
      nameSeller: 'ChinoD',
      price: '40',
      percent: '60',
      cost: '100',
      sold: '0',
      delay: false,
      costnotifi: '',
      gift: false
    },
    {
      id: '2',
      imageMin: AmazonDe,
      productName: 'Amazon Gift Card DE €50',
      nameSeller: 'slyvlark',
      price: '46',
      percent: '23.33',
      cost: '60',
      sold: '2681',
      delay: false,
      costnotifi: '0.02',
      gift: true
    },
    {
      id: '3',
      imageMin: XboxEa,
      productName: 'Buy ⚜️Xbox Game Pass Ultimate + EA [5 years]',
      nameSeller: 'goga.shop440',
      price: '41.33',
      percent: '31,09',
      cost: '60.02',
      sold: '0',
      delay: false,

      costnotifi: '2.48',
      gift: true
    },
    {
      id: '4',
      imageMin: PSNPlus,
      productName: 'PSN Plus Essential Membership 12 Month Turkey',
      nameSeller: 'AVATARGAMES',
      price: '45.00',
      percent: '90.43',
      cost: '470',
      sold: '34',
      delay: true,

      costnotifi: '0.25',
      gift: true
    },
    {
      id: '5',
      imageMin: XboxUlti,
      productName: 'XBOX GAME PASS ULTIMATE 12 + 1 MONTHS',
      nameSeller: 'AVATARGAMES',
      price: '37.75',
      percent: '7.93',
      cost: '41',
      sold: '297',
      delay: true,

      costnotifi: '0.25',
      gift: true
    },
    {
      id: '6',
      imageMin: Pubg8100,
      productName: 'Pubg Mobile 8100 UC',
      nameSeller: 'fgyg710',
      price: '82',
      percent: '18',
      cost: '100',
      sold: '2559',
      delay: false,

      costnotifi: '0.01',
      gift: false
    },
    {
      id: '7',
      imageMin: OhamaSteaks,
      productName: 'Omaha Steaks eGift Card 50 USD',
      nameSeller: 'hoang2807',
      price: '27',
      percent: '46',
      cost: '50',
      sold: '0',
      delay: false,
      costnotifi: '0.41',
      gift: true
    },
    {
      id: '8',
      imageMin: XboxUltimate5,
      productName: 'Xbox Game Pass Ultimate 5 Month',
      nameSeller: 'AVATARGAMES',
      price: '17.50',
      percent: '30',
      cost: '25',
      sold: '26',
      delay: true,

      costnotifi: '0.25',
      gift: true
    },
    {
      id: '9',
      imageMin: PNSPlus,
      productName: 'PSN Plus EXTRA 12 +EA 12 Month for Turkey',
      nameSeller: 'AVATARGAMES',
      price: '79.50',
      percent: '38.85',
      cost: '130',
      sold: '0',
      delay: true,

      costnotifi: '0.20',
      gift: true
    },
    {
      id: '10',
      imageMin: XboxUlti,
      productName: 'XBOX GAME PASS ULTIMATE 12 + 1 MONTHS',
      nameSeller: 'GAMESBUYSELL',
      price: '36',
      percent: '20',
      cost: '45',
      sold: '59',
      delay: true,

      costnotifi: '0.25',
      gift: true
    },
    {
      id: '11',
      imageMin: PSNPlus12,
      productName: 'PSN Plus Essential 12 Month Membership-Turkey',
      nameSeller: 'StarCard',
      price: '54.99',
      percent: '8.35',
      cost: '60',
      sold: '10',
      delay: true,
      costnotifi: '',
      gift: false
    },
    {
      id: '12',
      imageMin: XboxUlti,
      productName: 'Xbox Game Pass Ultimate 5 Month',
      nameSeller: 'GAMESBUYSELL',
      price: '17.50',
      percent: '41.67',
      cost: '30',
      sold: '20',
      delay: true,

      costnotifi: '0.18',
      gift: true
    },
    {
      id: '13',
      imageMin: Skype,
      productName: 'Skype Voucher 10$',
      nameSeller: 'StarCard',
      price: '8.69',
      percent: '13.1',
      cost: '10',
      sold: '90',
      delay: false,

      costnotifi: '',
      gift: false
    },
    {
      id: '14',
      imageMin: PlayStation,
      productName: 'Playstation Loaded Account Brasil 2000BRL',
      nameSeller: 'ymshabaan',
      price: '232.39',
      percent: '42.5',
      cost: '232.39',
      sold: '11',
      delay: false,

      costnotifi: '',
      gift: false
    },
    {
      id: '15',
      imageMin: Pubg60,
      productName: 'Pubg Mobile 60 UC Global Pin Code',
      nameSeller: 'Raeed',
      price: '0.82',
      percent: '18',
      cost: '1',
      sold: '6545',
      delay: false,

      costnotifi: '',
      gift: false
    },
    {
      id: '16',
      imageMin: iTurn,
      productName: 'ITunes Gift Card 100$ USA',
      nameSeller: 'omarsherf97',
      price: '91',
      percent: '9',
      cost: '100',
      sold: '0',
      delay: false,

      costnotifi: '0.01',
      gift: true
    },
    {
      id: '17',
      imageMin: Pubg60,
      productName: 'Pubg Mobile 300+Free 25 UC-Global Pin Code',
      nameSeller: 'Raeed',
      price: '4.15',
      percent: '17',
      cost: '5',
      sold: '13',
      delay: false,

      costnotifi: '',
      gift: false
    },
    {
      id: '18',
      imageMin: iTurn,
      productName: 'ITunes Gift Card 100$ USA',
      nameSeller: 'Omar.rooney94',
      price: '91',
      percent: '9',
      cost: '100',
      sold: '700',
      delay: false,

      costnotifi: '0.01',
      gift: true
    },
    {
      id: '19',
      imageMin: iTurn,
      productName: 'ITunes gift card 200$',
      nameSeller: 'Omar.rooney94',
      price: '178',
      percent: '11',
      cost: '200',
      sold: '120',
      delay: false,

      costnotifi: '0.02',
      gift: true
    },
    {
      id: '20',
      imageMin: iTurn,
      productName: 'ITunes Gift Card 300$ USA',
      nameSeller: 'Omar.rooney94',
      price: '267',
      percent: '11',
      cost: '300',
      sold: '20',
      delay: false,

      costnotifi: '0.03',
      gift: true
    },
    {
      id: '21',
      imageMin: Skype,
      productName: 'Skype Voucher 10$',
      nameSeller: 'StarCard',
      price: '8.69',
      percent: '13.1',
      cost: '10',
      sold: '90',
      delay: false,

      costnotifi: '',
      gift: false
    },
    {
      id: '22',
      imageMin: PlayStation,
      productName: 'Playstation Loaded Account Brasil 2000BRL',
      nameSeller: 'ymshabaan',
      price: '232.39',
      percent: '42.5',
      cost: '232.39',
      sold: '11',
      delay: false,

      costnotifi: '',
      gift: false
    },
    {
      id: '23',
      imageMin: Pubg60,
      productName: 'Pubg Mobile 60 UC Global Pin Code',
      nameSeller: 'Raeed',
      price: '0.82',
      percent: '18',
      cost: '1',
      sold: '6545',
      delay: false,

      costnotifi: '',
      gift: false
    },
    {
      id: '24',
      imageMin: iTurn,
      productName: 'ITunes Gift Card 100$ USA',
      nameSeller: 'omarsherf97',
      price: '91',
      percent: '9',
      cost: '100',
      sold: '0',
      delay: false,

      costnotifi: '0.01',
      gift: true
    },
    {
      id: '25',
      imageMin: Pubg60,
      productName: 'Pubg Mobile 300+Free 25 UC-Global Pin Code',
      nameSeller: 'Raeed',
      price: '4.15',
      percent: '17',
      cost: '5',
      sold: '13',
      delay: false,

      costnotifi: '',
      gift: false
    },
    {
      id: '26',
      imageMin: iTurn,
      productName: 'ITunes Gift Card 100$ USA',
      nameSeller: 'Omar.rooney94',
      price: '91',
      percent: '9',
      cost: '100',
      sold: '700',
      delay: false,

      costnotifi: '0.01',
      gift: true
    },
    {
      id: '27',
      imageMin: iTurn,
      productName: 'ITunes gift card 200$',
      nameSeller: 'Omar.rooney94',
      price: '178',
      percent: '11',
      cost: '200',
      sold: '120',
      delay: false,

      costnotifi: '0.02',
      gift: true
    }
  ]
  return (
    <>
      <div className='md:bg-white mb-12 md:shadow-lg md:rounded-lg pb-2 md:pb-6'>
        <div
          className='p-[14px] xl:ml-14 md:ml-14 pt-10 xl:pb-0 md:shadow-none px-5 sm:grid-cols-4 md:flex bg-white rounded-lg shadow-lg grid  gap-4'
          style={{ gridTemplateColumns: '60% 1fr' }}
        >
          <div className='cursor-pointer hover:text-white  hover:bg-[#238dff] hover:border-[#238dff] rounded-full border-gray-300 border-[2px] pb-1 py-0.5 pl-2 md:!px-2 md:pl-0 md:w-max md:flex md:justify-center font-bold text-[13px] text-gray68 order-1 xl:order-1 md:order-1 ml-5'>
            Product name
          </div>
          <div className='cursor-pointer hover:text-white md:mx-[100px] hover:bg-[#238dff] hover:border-[#238dff] rounded-full border-gray-300 border-[2px] pb-1 py-0.5 pl-2 md:!px-2 md:pl-0 md:w-max md:flex md:justify-center font-bold text-[13px] text-gray68 order-4 xl:order-2 md:order-2 mr-5'>
            Price
          </div>
          <div className='cursor-pointer hover:text-white md:ml-[80px] hover:bg-[#238dff] hover:border-[#238dff] rounded-full border-gray-300 border-[2px] pb-1 py-0.5 pl-2 md:!px-2 md:pl-0 md:w-max md:flex md:justify-center font-bold text-[13px] text-gray68 order-2 xl:order-3 md:order-3 mr-5'>
            Sold
          </div>
          <div className='cursor-pointer hover:text-white md:ml-10 hover:bg-[#238dff] hover:border-[#238dff] rounded-full border-gray-300 border-[2px] pb-1 py-0.5 pl-2 md:!px-2 md:pl-0 md:w-max md:flex md:justify-center font-bold text-[13px] text-gray68 order-3 xl:order-4 md:order-4 ml-5'>
            Seller rating
          </div>
        </div>
        <div className='flex flex-col mt-5 gap-y-5'>
          {datax.slice(0, page * 10).map((item, index) => (
            <ItemCategory item={item} key={index} />
          ))}
        </div>
      </div>
      {datax.length !== datax.slice(0, page * 10).length && (
        <div onClick={() => setPage(page + 1)} className='mt-2 md:mt-6 mx-auto w-max group cursor-pointer'>
          <p className='text-[#838383] group-hover:text-[#238dff]'>
            See more (Total {datax.length - datax.slice(0, page * 10).length})
          </p>
          <div className='rotate-90 text-[#838383] w-max mx-auto group-hover:text-[#238dff]'>❯</div>
        </div>
      )}
    </>
  )
}

const ItemCategory = ({ item }: any) => {
  return (
    <div className='md:mx-5 cursor-pointer hover:shadow-lg'>
      <Link
        to={'/products/view'}
        className='bg-white relative md:hidden py-[14px] items-center flex gap-x-2  sm:gap-x-8 px-2 rounded-lg hover:shadow-xl shadow-md'
      >
        <div>
          <img className='w-10 h-10 md:w-[64px] md:h-[64px] rounded-lg' src={item.imageMin} alt='Meta' />
          <img
            className={`w-[33px] block sm:hidden mt-3 h-[27px] ${item.delay === true ? 'block' : 'invisible'}`}
            src={Delay}
            alt='Delay'
          />
        </div>
        <div className='flex-1 sm:pl-10 justify-between sm:pr-10 flex items-start'>
          <div className=''>
            <p className='hover:underline mb-4'>{item.productName}</p>
            <div className='flex gap-3'>
              <img className='w-[35px] h-[35px]' src={Hero} alt='Hero' />
              <div className='flex items-center gap-1'>
                <div className='bg-[#8ec31f] h-[14px] w-[14px] p-0.5 rounded-full '>
                  <svg
                    className='w-full h-full'
                    fill='white'
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    viewBox='0 0 30 30'
                  >
                    <path d='M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z'></path>
                  </svg>
                </div>
                <span>{item.nameSeller}</span>
              </div>
            </div>
          </div>

          <img
            className={`w-[33px] hidden sm:block  h-[27px] ${item.delay === true ? 'block' : 'invisible'}`}
            src={Delay}
            alt='Delay'
          />
        </div>
        <div>
          <div className='flex relative'>
            <img src={Gif} alt='Gif' className={`z-10 ${item.gift === true ? 'block' : 'invisible'}`} />
            <div className='w-7 h-7 flex items-center justify-center -translate-x-2 rounded-full bg-[#8ec31f]'>
              <img src={More} alt='More' className='z-10 w-4 h-5 ' />
            </div>
          </div>
          <p className='text-[#f07e13] text-[10px]'>
            {item.costnotifi === '' ? item.costnotifi : `$ ${item.costnotifi}`}
          </p>
          <p className='text-[#c4c4c4] text-[10px] line-through'>${item.cost}.00 </p>
          <p className='text-[#f07e13] text-[18px]'>${item.price}.00</p>
        </div>
        <div className='absolute top-0 left-0 px-1 bg-[#8ec31f] text-[10px] text-white'>SAVE {item.percent}%</div>
      </Link>

      <Link
        to={'/products/view'}
        className='hidden md:flex relative justify-between gap-x-10 pr-4 items-center rounded-lg bg-white shadow '
      >
        <div className='flex items-center'>
          <div className='flex items-center'>
            <img className='rounded-l-lg w-[56px] h-[56px]' src={item.imageMin} alt='Meta' />
            <div className='w-[157px] mx-4 hover:underline'>{item.productName}</div>
          </div>
          <div className='flex items-center gap-x-6 '>
            <div className='flex items-center gap-x-3 relative w-[125px]'>
              <p className='text-[#c4c4c4] text-[10px] line-through'>${item.cost}.00 </p>
              <p className='text-[#f07e13] text-[13px] px-2  rounded-full border hover:bg-[#f07e13] transition-all cursor-pointer hover:text-white group border-[#f07e13]'>
                <span className='group-hover:hidden block'>${item.price}.00</span>
                <span className='group-hover:block hidden'>Buy now</span>
              </p>
              <div className='absolute -top-2 left-2 rounded-sm px-1 bg-[#8ec31f] text-[10px] text-white'>
                SAVE {item.percent}%
              </div>
            </div>
            <div className='flex flex-col items-center w-[28px]'>
              <img src={Gif} alt='Gif' className={`z-10 ${item.gift === true ? 'block' : 'hidden'}`} />

              <p className='text-[#f07e13] text-[10px]'>
                {item.costnotifi === '' ? item.costnotifi : `$ ${item.costnotifi}`}
              </p>
            </div>
          </div>
        </div>
        <div className='flex items-center flex-1'>
          <img
            className={`w-[33px]  h-[27px] ${item.delay === true ? 'block' : 'invisible'}`}
            src={Delay}
            alt='Delay'
          />
          <div className='ml-12 mx-16'>1</div>
          <div className='flex  gap-3 '>
            <img className='w-[35px] h-[35px]' src={Hero} alt='Hero' />
            <div className='flex items-center gap-1'>
              <div className='bg-[#8ec31f] h-[14px] w-[14px] p-0.5 rounded-full '>
                <svg
                  className='w-full h-full'
                  fill='white'
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  viewBox='0 0 30 30'
                >
                  <path d='M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z'></path>
                </svg>
              </div>
              <span className='hover:underline hover:text-blue-600'>{item.nameSeller}</span>
            </div>
          </div>
        </div>
        <div className='w-5 h-5 absolute -right-4 -top-2 flex items-center justify-center -translate-x-2 rounded-full bg-[#8ec31f]'>
          <img src={More} alt='More' className='z-10 w-[11px] h-[14px] ' />
        </div>
      </Link>
    </div>
  )
}

export default PromotedProducts
