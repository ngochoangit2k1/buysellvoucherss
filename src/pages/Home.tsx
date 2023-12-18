import About from '~/components/Home/About/About'
import PopularCategories from '~/components/Home/Category/PopularCategories'
import News from '~/components/Home/News/News'
import PromotedProducts from '~/components/Home/Product/PromotedProducts'
import Banner1 from '~/assets/images/razer.webp'
import Banner2 from '~/assets/images/freefire.webp'
import Banner3 from '~/assets/images/pubg.webp'
const Home = () => {
  return (
    <div className=' bg-[#f7f7f7]'>
      <div className='pt-5 xl:flex xl:gap-x-7 xl:max-w-[1400px] mx-auto flex-row-reverse items-center'>
        <div>
          <h1 className='text-center xl:text-left md:text-6xl md:text-[49px] bg-gradient-to-r from-orange-500 to-red-600 text-orange-500 font-bold text-3xl leading-tight md:mb-6 mb-3 max-w-full uppercase bg-clip-text text-transparent'>
            ONLINE MARKETPLACE
          </h1>
          <p className='uppercase xl:text-left md:text-4xl text-center text-[#5e5e5e] text-xl '>
            That connects buyers and sellers
          </p>
        </div>
        <div className='grid grid-cols-3 items-end mt-3 xl:max-w-[776px]'>
          <img src={Banner1} alt='Banner1' className='translate-x-4' />
          <img src={Banner2} alt='Banner2' className='z-10' />
          <img src={Banner3} alt='Banner3' className='-translate-x-4' />
        </div>
      </div>
      <div className='max-w-[840px] mx-auto'>
        <PopularCategories></PopularCategories>
        <PromotedProducts></PromotedProducts>
      </div>
      <News></News>
      <About></About>
    </div>
  )
}

export default Home
