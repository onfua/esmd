import React from 'react'
import FirstPoster from '@/components/firstPoster/firstPoster'
import ProductPost from '@/components/product-post/productPost'
import SecondPost from '@/components/secondPoster/secondPoster'
import OurSelection from '@/components/ourSelection/ourSelection'

const Home : React.FC = () => {
  return (
    <>
      <FirstPoster/>
      <ProductPost></ProductPost>
      <SecondPost></SecondPost>
      <OurSelection></OurSelection>
    </>
  )
}
  
export default Home
