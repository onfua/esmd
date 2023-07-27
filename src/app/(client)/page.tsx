import React from 'react'
import FirstPoster from '@/components/firstPoster/firstPoster'
import ProductPost from '@/components/product-post/productPost'
import SecondPost from '@/components/secondPoster/secondPoster'
import OurSelection from '@/components/ourSelection/ourSelection'
import ThirdPost from '@/components/thirdPoster/thirdPost'
import RecentArticle from '@/components/recentArticle/recentArticle'

const Home : React.FC = () => {
  return (
    <>
      <FirstPoster/>
      <ProductPost></ProductPost>
      <SecondPost></SecondPost>
      <OurSelection></OurSelection>
      <ThirdPost></ThirdPost>
      <RecentArticle></RecentArticle>
    </>
  )
}
  
export default Home
