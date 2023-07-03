import React from 'react'
import FirstPoster from '@/components/firstPoster/firstPoster'
import ProductPost from '@/components/product-post/productPost'

const Home : React.FC = () => {
  return (
    <>
      <FirstPoster/>
      <ProductPost></ProductPost>
    </>
  )
}
  
export default Home
