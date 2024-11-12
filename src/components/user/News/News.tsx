import React, { useRef, useState } from 'react'
import { featuredProducts, siteNews } from '../../../constance'
import { BsCart, BsEye, BsHeart } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import Aos from 'aos'
import MainContainer from '../containers/MainContainer'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import Rating from '../Rating/Rating'

import { Product } from '../../../types'
import CarouselProductModal from '../../ui/CarouselProductModal'
import { p } from 'framer-motion/client'
import Title from '../../ui/Title'
import NewsCard from '../NewsCard/NewsCard'



const News = () => {

    const [singleProduct, setSingleProduct] = useState<Product | null>(null)
    const [open, setOpen] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    Aos.init();



    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1700 },
            items: 5,
            partialVisibilityGutter: 40,
        },
        desktop: {
            breakpoint: { max: 1700, min: 1100 },
            items: 4,
            partialVisibilityGutter: 40,
        },

        medium: {
            breakpoint: { max: 1100, min: 770 },
            items: 3,
        },

        tablet: {
            breakpoint: { max: 770, min: 500 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 500, min: 0 },
            items: 1,
        },
    };



    const navigate = useNavigate()


   

    return (
        <div >




            <div className=" py-10 relative  overflow-hidden">
                {/*  */}

                <MainContainer>


                <Title title='Latest News'/>

                    {/* Products */}
                    <div className="popular-products py-3">
                        <Carousel
                            ref={slideRef}
                            arrows={false}
                            autoPlay={true}
                            infinite={true}
                            responsive={responsive}
                            itemClass="carousel-item-padding-40-px"
                            className='space-x-2'
                        >
                            {

                                siteNews.map(fp => (

                                    <NewsCard key={fp.id} news={fp}/>
                                ))

                            }
                        </Carousel>
                    </div>
                </MainContainer>

            </div>


            {/* carousel product modal */}

            {/* <CarouselProductModal product={singleProduct ? singleProduct : null} open={open} setOpen={setOpen} /> */}


        </div>
    )
}

export default News