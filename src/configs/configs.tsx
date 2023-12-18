/* eslint-disable @typescript-eslint/no-explicit-any */
import LeftArrow from '~/assets/icons/left-arrow-svgrepo-com.svg'
export const settingsAbout = {
  infinite: true, // Vô hạn lặp lại slider
  speed: 500, // Tốc độ trượt (milliseconds)
  slidesToShow: 5, // Số lượng ảnh hiển thị cùng lúc
  slidesToScroll: 1, // Số lượng ảnh trượt khi bạn kéo,
  prevArrow: <SampleNextArrow footer />,
  nextArrow: <SamplePrevArrow footer />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
}

function SampleNextArrow(props: any, footer: boolean) {
  const { onClick } = props
  return (
    <div
      className={` absolute cursor-pointer z-50 left-0  lg:-left-10 p-2 -translate-y-1/2 ${
        footer ? 'block' : 'hidden'
      } top-1/2 rounded-full bg-[#ffffffa6]  w-[30px] h-[30px] lg:flex items-center justify-center`}
      onClick={onClick}
    >
      <img className='' src={LeftArrow} alt='' />
    </div>
  )
}
function SamplePrevArrow(props: any, footer: boolean) {
  const { onClick } = props
  return (
    <div
      className={` absolute cursor-pointer z-50 right-0  lg:-right-5 p-2 -translate-y-1/2 ${
        footer ? 'block' : 'hidden'
      } top-1/2 rounded-full bg-[#ffffffa6]  w-[30px] h-[30px] lg:flex items-center justify-center`}
      onClick={onClick}
    >
      <img className='rotate-180' src={LeftArrow} alt='' />
    </div>
  )
}
