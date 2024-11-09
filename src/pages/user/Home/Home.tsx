import React from 'react'
import Banner from '../../../components/user/banner/Banner'
import FeaturedProducts from '../../../components/user/featuredProducts/FeaturedProducts'
import TrandingProducts from '../../../components/user/TrandingProducts/TrandingProducts'

const Home = () => {
  
  return (
    <div className=''>
      <Banner/>
      <FeaturedProducts/>

      <TrandingProducts/>
    </div>
  )
}

export default Home