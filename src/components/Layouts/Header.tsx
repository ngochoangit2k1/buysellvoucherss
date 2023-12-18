/* eslint-disable @typescript-eslint/no-explicit-any */
import Logo from '~/assets/images/logo.png'
import USA from '~/assets/icons/usa.svg'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [text, setText] = useState('')
  const [visibleLetters, setVisibleLetters] = useState(0)
  const [visibleDiv, setVisibleDiv] = useState(true)
  const divRef = useRef<any>(null)
  const originalText = 'What are you looking for? Just type here'
  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleLetters((prev) => prev + 1)
      setText(originalText.slice(0, visibleLetters))
    }, 100)

    return () => {
      clearInterval(intervalId)
    }
  }, [visibleLetters])

  useEffect(() => {
    const resetInterval = setTimeout(() => {
      setVisibleLetters(0)
      setText('')
    }, 3000)

    return () => {
      clearTimeout(resetInterval)
    }
  }, [text])
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 130) {
        divRef.current.classList.add(
          'top-2',
          'fixed',
          'w-full',
          'left-1/2',
          '-translate-x-1/2',
          'max-w-[665px]',
          'bg-white',
          'z-50',
          'duration-500'
        )
        divRef.current.classList.remove('-top-full', 'static')
      } else {
        divRef.current.classList.add('-top-full', 'static')
        divRef.current.classList.remove(
          'top-2',
          'fixed',
          'w-full',
          'left-1/2',
          '-translate-x-1/2',
          'max-w-[665px]',
          'bg-white',
          'z-50',
          'duration-500'
        )
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  useEffect(() => {
    // Xác định xem sự kiện click có xảy ra ngoài div không
    const handleClickOutside = (event: any) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setVisibleDiv(true)
      }
    }

    // Thêm sự kiện click toàn cầu
    document.addEventListener('click', handleClickOutside)

    // Xóa sự kiện khi component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])
  return (
    <>
      <div className='pt-6 pb-4 px-3 lg:py-7'>
        <div className='flex justify-between md:mb-0 md:max-w-[1250px] xl:max-w-[1400px] mx-auto mb-5 items-center gap-x-4 xl:gap-x-20'>
          <Link to='/'>
            <img className='w-[116px] lg:ml-4 h-[36px] lg:w-[130px] lg:h-[40px]' src={Logo} alt='Logo' />
          </Link>
          <form ref={divRef} className='md:block hidden flex-1 rounded-3xl '>
            <div
              className={` ${!visibleDiv ? 'border-blue-600 shadow-lg' : 'border-[#bcbcbc] shadow-none'
                } flex rounded-3xl overflow-hidden border-[2px] `}
            >
              <div className={`relative w-full `}>
                <input
                  type='search'
                  id='search-dropdown'
                  className='block  placeholder:font-bold pl-5 p-2.5 py-3 w-full z-20 text-sm text-gray-900  rounded-e-lg border-s-gray-50 border-s-2  border-gray-300  :bg-gray-700  :border-s-gray-700   :border-gray-600  :placeholder-gray-400  :text-white  :focus:border-blue-500'
                  required
                />
                <label
                  htmlFor='search-dropdown'
                  onClick={() => setVisibleDiv(false)}
                  className={`${visibleDiv ? 'flex' : 'hidden'
                    } absolute bg-white top-0 left-0 items-center pl-5 font-semibold text-[#b5b5b5] w-full h-full`}
                >
                  {text}
                </label>
                <button
                  type='submit'
                  className='absolute top-0 end-0 p-2.5 text-sm flex justify-center font-medium w-[63px] h-full text-white bg-[#446adc] border border-[#446adc]  focus:outline-none   :bg-blue-600  :hover:bg-blue-700  :focus:ring-blue-800'
                >
                  <svg
                    className='w-5 h-5'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 20'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                    />
                  </svg>
                  <span className='sr-only'>Search</span>
                </button>
              </div>
            </div>
          </form>
          <div className='flex gap-x-2 sm:flex-row-reverse sm:gap-x-4 items-center'>
            <div className='flex items-center gap-x-2 xl:ml-20'>
              <img src={USA} alt='USA' />
              <div className='flex text-sm font-bold text-[#c4c4c4] gap-x-2'>
                <span>ENG</span>
                <div className='w-[0.6px] bg-[#c4c4c4]'></div>
                <span>USD $</span>
              </div>
            </div>
            <div className='sm:flex  text-base font-normal text-gray80 hidden items-center'>
              <span className='hover:font-bold flex items-center justify-center w-[50px] cursor-pointer'>Login</span>
              <div className='w-[0.6px] bg-[#c4c4c4] text-white mx-1 mr-3'>|</div>

              <span className='hover:font-bold flex items-center justify-center w-[50px] cursor-pointer'>Register</span>
            </div>
            <svg width={32} height={32} viewBox='0 0 32 32' fill='#b5b5b5' xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#f6f6f5'
                className='i-user-circle'
                d='M32 16C32 20.8214 29.8674 25.1447 26.4941 28.0781C23.6849 30.521 20.0152 32 16 32C11.9848 32 8.3151 30.521 5.50587 28.0781C2.13256 25.1447 0 20.8214 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z'
              />
              <circle className='i-user-head' cx='16.0002' cy='12.8' r='4.8' />
              <path
                className='i-user-body'
                d='M26.4941 28.0782C24.9046 23.8269 20.8058 20.8 16 20.8C11.1942 20.8 7.09535 23.8269 5.50586 28.0782C8.31509 30.5211 11.9848 32 16 32C20.0152 32 23.6849 30.5211 26.4941 28.0782Z'
              />
            </svg>
          </div>
        </div>

        <form className='md:hidden'>
          <div className='flex rounded-3xl overflow-hidden border-[2px] border-[#bcbcbc]'>
            <div className='relative w-full'>
              <input
                type='search'
                id='search-dropdown'
                className='block placeholder:font-bold pl-5 p-2.5 py-3 w-full z-20 text-sm text-gray-900  rounded-e-lg border-s-gray-50 border-s-2  border-gray-300  :bg-gray-700  :border-s-gray-700   :border-gray-600  :placeholder-gray-400  :text-white  :focus:border-blue-500'
                placeholder='What are you looking for? Just type here'
                required
              />
              <button
                type='submit'
                className='absolute top-0 end-0 p-2.5 text-sm flex justify-center font-medium w-[63px] h-full text-white bg-[#446adc] border border-[#446adc]  focus:outline-none   :bg-blue-600  :hover:bg-blue-700  :focus:ring-blue-800'
              >
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                  />
                </svg>
                <span className='sr-only'>Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className='bg-orangefc'>
        <div className='xl:max-w-[1400px] mx-auto  md:px-3 flex justify-center md:justify-start md:gap-x-6'>
          <button className='flex md:hidden text-xl text-white py-1 pb-1.5 gap-x-4'>
            Products
            <div className='border-white border-[7px] translate-y-[14px] border-r-transparent border-b-transparent border-l-transparent'></div>
          </button>
          <button className='hidden md:flex md:text-base font-bold text-white py-1 pb-1.5 gap-x-2'>
            Gift cards
            <div className='border-white border-[5px] translate-y-[11px] border-r-transparent border-b-transparent border-l-transparent'></div>
          </button>
          <button className='hidden md:flex md:text-base font-bold text-white py-1 pb-1.5 gap-x-2'>
            Games
            <div className='border-white border-[5px] translate-y-[11px] border-r-transparent border-b-transparent border-l-transparent'></div>
          </button>
          <button className='hidden md:flex md:text-base font-bold text-white py-1 pb-1.5 gap-x-2'>
            VoIP
            <div className='border-white border-[5px] translate-y-[11px] border-r-transparent border-b-transparent border-l-transparent'></div>
          </button>
          <button className='hidden md:flex md:text-base font-bold text-white py-1 pb-1.5 gap-x-2'>
            More
            <div className='border-white border-[5px] translate-y-[11px] border-r-transparent border-b-transparent border-l-transparent'></div>
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
