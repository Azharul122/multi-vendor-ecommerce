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




            <div className="bg-[#FBF7F2] py-10 relative  overflow-hidden">
                {/*  */}

                <MainContainer>
                <div className="relative w-max">
                    <span className='absolute right-0 -bottom-[2px] h-[1px] bg-green-700 w-[50px]'></span>
                    <p className="uppercase md:text-2xl text-xl">Latet News</p>
                </div>

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

                                    //    <ProductsCard product={fp} marginX='mx-2' />
                                    <div  className={`card relative border mx-3  flex flex-col gap-1 group z-10 cursor-pointer  `} key={fp.id} >
                                        {/* Product Image */}
                                        <div className="w-full h-[150px] overflow-hidden group-hover:bg-[rgba(0,0,0,0.4)]">
                                            <img src={fp.image} className='size-full group-hover:scale-125 transition-all duration-500 object-fill' alt={""} />
                                        </div>

                                       
                                        <div className="px-2">
                                             {/* title  */}
                                            <p className='text-lg '>{fp.title}</p>
                                            {/* Description */}
                                            <div className="flex items-center space-x-2 text-sm">
                                                <div  className="p">
                                                    {fp.description.length>50?(
                                                       <p>
                                                        {
                                                             fp.description.slice(0,50).concat("...")
                                                        }
                                                       </p>
                                                    ):(
                                                        <p>
                                                            {
                                                                fp.description
                                                            }
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            
                                            {/* Author */}
                                            <div className="mt-5 pb-3">
                                                <div className="flex items-center gap-3">
                                                        <img src={fp.authorImage} alt="" className='size-10 rounded-full object-fill object-center'/>
                                                        <p className='text-[1rem]'> {fp.author}</p>
                                                </div>
                                                <p className='text-sm'>Admin | {fp.date}</p> 
                                            </div>


                                        </div>

                                        {/* Rating */}

                                        {/* <Rating rating={fp.rating} /> */}


                                    </div>
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