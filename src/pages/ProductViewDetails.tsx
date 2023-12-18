import AboutModule from '~/modules/AboutModule/AboutModule'
import DelayIcon from '~/assets/images/delay.png'
import Hero from '~/assets/icons/hero.svg'
import Like from '~/assets/images/feedback_pos.png'
import Dislike from '~/assets/images/feedback_neg.png'
import Message from '~/assets/images/messages.png'
import BitcoinIcon from '~/assets/icons/bitcoin.png'
import Usdc1 from '~/assets/images/usdc.png'
import Usdc2 from '~/assets/images/usdctrc20.png'
import DaiIcon from '~/assets/icons/daibep20.png'
import EthIcon from '~/assets/icons/ethereum.png'
import LiteIcon from '~/assets/icons/litecoin.png'
import TrcIcon from '~/assets/icons/trc20.png'
import PerfectmoneyIcon from '~/assets/images/perfectmoney.png'
import Usdtbep20Icon from '~/assets/images/usdtbep20.png'
import ErcIcon from '~/assets/icons/erc20.png'
import Xbox from '~/assets/images/xboxgamebar.webp'
import Gif from '~/assets/images/bonus-orange.png'
import Discount from '~/assets/images/discount-blue.png'
import { useState } from 'react'

const ProductViewDetails = () => {
  const [showMore, setShowmore] = useState(false)
  return (
    <div className='pt-0 px-[10px] bg-[#f7f7f7] md:pt-5 '>
      <div className='bg-[#f7f7f7] mb-[20px] sm:bg-white max-w-[1400px] mx-auto sm:shadow py-[15px] md:pb-10 md:pr-[20px] md:px-[50px] '>
        <div className='flex justify-center gap-x-4'>
          <div className='text-[#a3a3a3] hover:underline cursor-pointer '>Homepage</div>
          <span>/</span>
          <div className='text-[#a3a3a3] hover:underline cursor-pointer '>Gift cards</div>
          <span>/</span>
          <div className='text-[#a3a3a3] hover:underline cursor-pointer '>Xbox</div>
          <span>/</span>
          <div className='text-[#201b16] underline cursor-pointer'>Info</div>
        </div>
        <div className='mt-6 flex flex-col  gap-y-6  md:flex-row md:gap-x-5'>
          <div className='md:border-r md:pr-5 md:w-[412px] xl:w-[752px]'>
            <div className='p-4 rounded-lg relative shadow-md  bg-white'>
              <h2 className='text-2xl xl:text-3xl font-bold'>✅🌻XBOX GAME PASS ULTIMATE 12 + 1 MONTHS</h2>
              <div className='flex mt-2 justify-between gap-x-3'>
                <img
                  className='w-[72px]  sm:w-[140px] xl:w-[265px] xl:h-[265px] md:w-[192px] md:h-[192px] sm:h-[140px] h-[72px] rounded-lg'
                  src={Xbox}
                  alt='Xbox'
                />
                <div className='flex flex-col flex-1'>
                  <p className='text-gray68'>Description:</p>
                  <p className=' text-base'>
                    Delivery within 10-15 minutes AFTER you start order execution on your account.
                  </p>
                  {!showMore && (
                    <>
                      <p className='text-base my-2'>works globally.</p>
                      <p className='text-base'>Please set all guards off for complete...</p>

                      <div onClick={() => setShowmore(true)} className='cursor-pointer text-gray-400 underline'>
                        Show more
                      </div>
                    </>
                  )}
                  {showMore && (
                    <div className='md:block hidden'>
                      <p className='text-base my-2'>works globally.</p>
                      <p className='text-base my-2'>
                        Please set all guards off for complete order quickly(mail,2fa,sms) and change the region to
                        TURKEY
                      </p>
                      <p className='text-base'>If you don't have an account, we can create 1 for you.</p>
                      <div onClick={() => setShowmore(false)} className='cursor-pointer text-gray-400 underline'>
                        Show less
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className='flex absolute top-0 -right-2 md:right-0 md:top-[92%]'>
                <img src={Gif} alt='Gif' className='z-10 w-6 h-6' />
                <img className='w-6 h-6 -translate-x-1.5' src={Discount} alt='Discount' />

              </div>
              {showMore && (
                <div className='md:hidden'>
                  <p className='text-base my-2'>works globally.</p>
                  <p className='text-base my-2'>
                    Please set all guards off for complete order quickly(mail,2fa,sms) and change the region to TURKEY
                  </p>
                  <p className='text-base'>If you don't have an account, we can create 1 for you.</p>
                  <div onClick={() => setShowmore(false)} className='cursor-pointer text-gray-400 underline'>
                    Show less
                  </div>
                </div>      
              )}
            </div>
            <div className='md:block hidden'>
              <h3 className='text-center text-3xl mt-10 mb-4 md:text-left'>110 Feedbacks</h3>
              <div>
                <div className='py-2 px-4 rounded-lg bg-[#ecf1ff] mx-6 md:mx-0 mb-4'>
                  <div className='flex gap-x-2 items-center'>
                    <img className='w-[18px] h-[18px]' src={Like} alt='Like' />
                    <span className='text-gray68'>2023-12-13 08:26</span>
                  </div>
                  <p className='text-base mt-2'>
                    One of the best places to obtain ✅🌻XBOX GAME PASS ULTIMATE 12 + 1 MONTHS online. Thanks and have a
                    great day!
                  </p>
                </div>
                <div className='py-2 px-4 rounded-lg bg-[#ecf1ff] mx-6 md:mx-0 mb-4'>
                  <div className='flex gap-x-2 items-center'>
                    <img className='w-[18px] h-[18px]' src={Like} alt='Like' />
                    <span className='text-gray68'>2023-12-13 08:26</span>
                  </div>
                  <p className='text-base mt-2'>
                    One of the best places to obtain ✅🌻XBOX GAME PASS ULTIMATE 12 + 1 MONTHS online. Thanks and have a
                    great day!
                  </p>
                </div>
                <div className='py-2 px-4 rounded-lg bg-[#ecf1ff] mx-6 md:mx-0 mb-4'>
                  <div className='flex gap-x-2 items-center'>
                    <img className='w-[18px] h-[18px]' src={Like} alt='Like' />
                    <span className='text-gray68'>2023-12-13 08:26</span>
                  </div>
                  <p className='text-base mt-2'>
                    One of the best places to obtain ✅🌻XBOX GAME PASS ULTIMATE 12 + 1 MONTHS online. Thanks and have a
                    great day!
                  </p>
                </div>
              </div>
              <div className='bg-[#bcbcbc] md:mr-0 border border-[#bcbcbc] hover:text-[#bcbcbc] cursor-pointer mx-auto mb-6 hover:bg-white w-[106px] h-[35px] rounded-full items-center flex justify-center text-white pb-1'>
                Show more
              </div>
            </div>

          </div>
          <div className='md:flex-1'>
            <div className=''>
              <div className='bg-gradient-to-r from-[#446adc] to-[#f68a27] rounded-lg'>
                <p className='text-center text-white'>Product with manual delivery</p>
                <div className='bg-white rounded-lg shadow-md p-6 '>
                  <p className='text-gray68 text-center md:text-left'>Total price:</p>
                  <p className='text-3xl font-bold mb-5 text-center md:text-left'> 37.75 USD</p>
                  <p className='text-gray68 text-center md:text-left'>
                    Times sold : <span className='text-black'>289</span>
                  </p>
                  <p className='text-gray68 text-center md:text-left'>
                    Available : <span className='text-black'>12</span>
                  </p>
                  <div className='bg-[#446adc] my-3 rounded-full gap-x-2 py-1 px-1.5 pr-2 flex items-center'>
                    <div className='w-11 h-11 flex-shrink-0 p-1 flex items-center justify-center rounded-full bg-white'>
                      <img className='translate-x-1 -translate-y-0.5' src={DelayIcon} alt='DelayIcon' />
                    </div>
                    <div className='text-white text-xs '>
                      The seller will send this product manually during his working hours, after the goods have been
                      paid.
                    </div>
                  </div>
                  <button className='bg-gradient-to-r mt-[28px] mx-auto md:ml-0 block button-shadow h-[48px] rounded-full pb-0.5 text-white font-bold text-base w-[100px] from-[#db3f1e] to-[#f17d13]'>
                    By now
                  </button>
                </div>
              </div>
              <p className='mt-6 text-center mb-2 md:text-left'>Seller info:</p>
              <div className='sm:mx-6 md:mx-0 bg-white gap-4 rounded-lg shadow-md p-6 sm:grid-cols-3 grid grid-cols-2'>
                <div className='col-span-2 sm:border-b-0 sm:border-r md:pr-8 sm:col-span-1 flex flex-col items-center sm:pr-5 border-b py-2.5'>
                  <img className='w-[50px] h-[50px] rounded-full' src={Hero} alt='' />
                  <p className='font-semibold text-lg'>AVATARGAMES</p>
                </div>
                <div className='text-center col-span-2 sm:col-span-1'>
                  <div className='bg-[#8ec31f] md:mb-4 mx-auto rounded-full text-white w-max px-2 pb-0.5'>Verified user</div>
                  <p className='text-gray68'>
                    Seller rating : <span className='text-black'>1104</span>
                  </p>
                  <p className='text-gray68'>
                    Registered : <span className='text-black'>19.09.2022</span>
                  </p>
                </div>
                <div className='col-span-2 sm:col-span-1 grid grid-cols-2 gap-3 sm:flex-col sm:flex sm:gap-y-10'>
                  <div className='flex items-center gap-x-2 justify-center'>
                    <img src={Like} alt='Like' />
                    <span className='text-xs text-gray68'>Positive feedbacks: [271]</span>
                  </div>
                  <div className='flex items-center gap-x-2 justify-center'>
                    <img src={Dislike} alt='Dislike' />
                    <span className='text-xs text-gray68'>Negative feedbacks: [0]</span>
                  </div>
                </div>
              </div>
              <div className='bg-white md:ml-0 flex mt-5 gap-2 shadow-lg w-max mx-auto px-[14px] py-[25px] rounded-md'>
                <img className='w-6' src={Message} alt='Message' />
                <span className='font-bold'>Private Message</span>
              </div>
              <div>
                <div className='text-center md:text-left text-gray68 mt-[45px] mb-[10px]'>
                  Seller accepts this payments method(s):
                </div>
                <div className='flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start'>
                  <div className='flex gap-x-1 items-center'>
                    <img className='w-5 h-5 rounded-full' src={BitcoinIcon} alt='BitcoinIcon' />
                    <p className='text-base text-gray68'>Bitcoin</p>
                  </div>
                  <div className='flex gap-x-1 items-center'>
                    <img className='w-5 h-5 rounded-full' src={DaiIcon} alt='DaiIcon' />
                    <p className='text-base text-gray68'>DAI via BEP20</p>
                  </div>
                  <div className='flex gap-x-1 items-center'>
                    <img className='w-5 h-5 rounded-full' src={EthIcon} alt='EthIcon' />
                    <p className='text-base text-gray68'>Ethereum</p>
                  </div>
                  <div className='flex gap-x-1 items-center'>
                    <img className='w-5 h-5 rounded-full' src={LiteIcon} alt='BitcoinIcon' />
                    <p className='text-base text-gray68'>Litecoin</p>
                  </div>
                  <div className='flex gap-x-1 items-center'>
                    <img className='w-5 h-5 rounded-full' src={PerfectmoneyIcon} alt='PerfectmoneyIcon' />
                    <p className='text-base text-gray68'>Perfect Money USD</p>
                  </div>
                  <div className='flex gap-x-1 items-center'>
                    <img className='w-5 h-5 rounded-full' src={ErcIcon} alt='ErcIcon' />
                    <p className='text-base text-gray68'>Tether ERC20 (USDT/ETH)</p>
                  </div>
                  <div className='flex gap-x-1 items-center'>
                    <img className='w-5 h-5 rounded-full' src={TrcIcon} alt='TrcIcon' />
                    <p className='text-base text-gray68'>Tether TRC20 (USDT)</p>
                  </div>
                  <div className='flex gap-x-1 items-center'>
                    <img className='w-5 h-5 rounded-full' src={Usdc1} alt='Usdc1' />
                    <p className='text-base text-gray68'>USDC via (ERC20)</p>
                  </div>
                  <div className='flex gap-x-1 items-center'>
                    <img className='w-5 h-5 rounded-full' src={Usdc2} alt='Usdc2' />
                    <p className='text-base text-gray68'>USDC via TRC20</p>
                  </div>
                  <div className='flex gap-x-1 items-center'>
                    <img className='w-5 h-5 rounded-full' src={Usdtbep20Icon} alt='Usdtbep20Icon' />
                    <p className='text-base text-gray68'>USDT BEP20</p>
                  </div>
                </div>
              </div>
              <div className=''>
                <p className='mt-6 text-center md:text-left mb-2'>Seller work days:</p>
                <div className='bg-white shadow-lg md:ml-0 max-w-[366px] md:max-w-[400px] mx-auto py-[6px] px-4 rounded-lg grid grid-cols-2 gap-x-4'>
                  <div className='border-r pr-4 '>
                    <div className='flex gap-x-3 justify-between'>
                      <span className='text-[#446adc]'>Mon.</span>
                      <span>09:00 - 01:00</span>
                    </div>
                    <div className='flex gap-x-3 justify-between'>
                      <span className='text-[#446adc]'>Tues.</span>
                      <span>09:00 - 01:00</span>
                    </div>
                    <div className='flex gap-x-3 justify-between'>
                      <span className='text-[#446adc]'>Wed.</span>
                      <span>09:00 - 01:00</span>
                    </div>
                    <div className='flex gap-x-3 justify-between'>
                      <span className='text-[#446adc]'>Thurs.</span>
                      <span>09:00 - 01:00</span>
                    </div>
                  </div>
                  <div>
                    <div className='flex gap-x-3 justify-between'>
                      <span className='text-[#446adc]'>Fri.</span>
                      <span>09:00 - 01:00</span>
                    </div>
                    <div className='flex gap-x-3 justify-between'>
                      <span className='text-[#bf2525]'>Sat.</span>
                      <span>09:00 - 01:00</span>
                    </div>
                    <div className='flex gap-x-3 justify-between'>
                      <span className='text-[#bf2525]'>Sun.</span>
                      <span>09:00 - 01:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='md:hidden'>
          <h3 className='text-center text-3xl mt-10 mb-4'>110 Feedbacks</h3>
          <div>
            <div className='py-2 px-4 rounded-lg bg-[#ecf1ff] mx-6 mb-4'>
              <div className='flex gap-x-2 items-center'>
                <img className='w-[18px] h-[18px]' src={Like} alt='Like' />
                <span className='text-gray68'>2023-12-13 08:26</span>
              </div>
              <p className='text-base mt-2'>
                One of the best places to obtain ✅🌻XBOX GAME PASS ULTIMATE 12 + 1 MONTHS online. Thanks and have a
                great day!
              </p>
            </div>
            <div className='py-2 px-4 rounded-lg bg-[#ecf1ff] mx-6 mb-4'>
              <div className='flex gap-x-2 items-center'>
                <img className='w-[18px] h-[18px]' src={Like} alt='Like' />
                <span className='text-gray68'>2023-12-13 08:26</span>
              </div>
              <p className='text-base mt-2'>
                One of the best places to obtain ✅🌻XBOX GAME PASS ULTIMATE 12 + 1 MONTHS online. Thanks and have a
                great day!
              </p>
            </div>
            <div className='py-2 px-4 rounded-lg bg-[#ecf1ff] mx-6 mb-4'>
              <div className='flex gap-x-2 items-center'>
                <img className='w-[18px] h-[18px]' src={Like} alt='Like' />
                <span className='text-gray68'>2023-12-13 08:26</span>
              </div>
              <p className='text-base mt-2'>
                One of the best places to obtain ✅🌻XBOX GAME PASS ULTIMATE 12 + 1 MONTHS online. Thanks and have a
                great day!
              </p>
            </div>
          </div>
          <div className='bg-[#bcbcbc] border border-[#bcbcbc] hover:text-[#bcbcbc] cursor-pointer mx-auto mb-6 hover:bg-white w-[106px] h-[35px] rounded-full items-center flex justify-center text-white pb-1'>
            Show more
          </div>
        </div>
      </div>
      <AboutModule />
    </div>
  )
}

export default ProductViewDetails
