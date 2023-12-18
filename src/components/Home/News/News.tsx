const News = () => {
  return (
    <div className='px-[10px] max-w-[1150px] mx-auto mb-14'>
      <h2 className='uppercase text-2xl text-[#c1c1c1] text-center mb-4'>NEWS</h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        <NewsItem></NewsItem>
        <NewsItem></NewsItem>
        <NewsItem></NewsItem>
      </div>
    </div>
  )
}
// {}: NewIProps
const NewsItem = () => {
  return (
    <div className='p-5 lg:px-10 lg:py-7 bg-white group cursor-pointer rounded-md shadow hover:shadow-lg'>
      <div className='bg-[#ededed] text-[#686868] w-max text-xs rounded-xl p-1 px-2'>2023-12-13 09:51</div>
      <h4 className='text-2xl text-[#201b16] group-hover:text-blue-500 group-hover:underline font-bold mt-6 mb-7'>
        How to Sell Gift Cards | Seller Guide
      </h4>
      <p className='text-[#8f8f8f] text-base mb-6 lg:mb-14'>
        Do you have unwanted gift cards or are you a gift card reseller? Wondering where and how to safely and
        profitably sell gift cards online? Check this step-by-step guide on how to sell gift...
      </p>
      <div className='flex justify-end'>
        <div className='text-xs border-blue-600 cursor-pointer group-hover:bg-blue-600 group-hover:text-white border p-0.5 px-1.5 text-blue-600'>
          more →
        </div>
      </div>
    </div>
  )
}

export default News
