import React from 'react'
import FirstPoster from '@/components/firstPoster/firstPoster'
import ProductPost from '@/components/product-post/productPost'
import SecondPost from '@/components/secondPoster/secondPoster'

const Home : React.FC = () => {
  return (
    <>
      <FirstPoster/>
      <ProductPost></ProductPost>
      <SecondPost></SecondPost>
    </>
  )
}
  
export default Home
