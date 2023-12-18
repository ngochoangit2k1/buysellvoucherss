import { ListProduct } from '~/components/Home/Product/PromotedProducts'
import AboutModule from '~/modules/AboutModule/AboutModule'
const ProductListDetails = () => {
  return (
    <div className='py-10 px-[10px] bg-[#f7f7f7]'>
      <h1 className='font-bold text-4xl text-[32px] text-center mb-3 '>Buy and Sell PlayStation PSN Gift Cards</h1>
      <p className='text-gray68 text-base text-center mb-4'>
        Here is the market products. You can switch currency and arrange list by different params
      </p>
      <div className='max-w-[840px] mx-auto mt-10'>
        <ListProduct></ListProduct>
      </div>
      <AboutModule />
    </div>
  )
}

export default ProductListDetails
