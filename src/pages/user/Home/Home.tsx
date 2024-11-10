import React from 'react'
import Banner from '../../../components/user/banner/Banner'
import FeaturedProducts from '../../../components/user/featuredProducts/FeaturedProducts'
import TrandingProducts from '../../../components/user/TrandingProducts/TrandingProducts'
import CategoryGallery from '../../../components/user/CategoryGallery/CategoryGallery'
import BsetSeller from '../BsetSeller/BsetSeller'

const Home = () => {
  
  return (
    <div className=''>
      <Banner/>
      <FeaturedProducts/>

      <TrandingProducts/>

      {/*  */}
      <CategoryGallery/>


      {/* Best seller */}
      <BsetSeller/>
    </div>
  )
}

export default Home