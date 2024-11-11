import React from 'react'
import Banner from '../../../components/user/banner/Banner'
import FeaturedProducts from '../../../components/user/featuredProducts/FeaturedProducts'
import TrandingProducts from '../../../components/user/TrandingProducts/TrandingProducts'
import CategoryGallery from '../../../components/user/CategoryGallery/CategoryGallery'
import BsetSeller from '../BsetSeller/BsetSeller'
import OurPartners from '../../../components/user/Partner/OurPartners'
import News from '../../../components/user/News/News'

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

      {/* Our Partners */}
      <OurPartners/>

      {/* News */}
      <News/>
    </div>
  )
}

export default Home