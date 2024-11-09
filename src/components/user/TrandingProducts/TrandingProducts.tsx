import React, { useRef, useState } from 'react'
import { featuredProducts } from '../../../constance'
import { BsCart, BsEye, BsHeart, BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import Aos from 'aos'
import MainContainer from '../containers/MainContainer'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import Rating from '../Rating/Rating'


const TrandingProducts = () => {


const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  Aos.init();
  

  // console.log(currentSlide, featuredProducts.length);

  // Carousel responsive

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

    const products = featuredProducts.filter(fp => fp.isFeatured == true)

    const navigate = useNavigate()



    const handleRedirect = (event: React.MouseEvent<SVGElement, MouseEvent>, id: string) => {
        event.preventDefault()
        navigate(`/products/${id}`)

    }
    const handleAddToCart = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
        event.stopPropagation()
    }

    return (
        <div >




<div className="bg-[#FBF7F2] py-10 relative overflow-hidden">
      {/*  */}

      <MainContainer>
        <div className="flex items-center justify-between pb-3">
          <div className="flex flex-col gap-4">
            <div className="flex  text-primary items-center gap-2">
              <p className="size-3 bg-primary"></p>
              <p>Crispy, Every Bite Taste</p>
            </div>
            <p className="uppercase md:text-2xl text-xl">POPULAR FOOD ITEMS</p>
          </div>
          <div className="flex gap-4 items-center">
            <button
              disabled={currentSlide <= 0}
              className="size-10 cursor-pointer rounded-full shadow-xl backdrop-blur-xl flex justify-center items-center"
            >
              <FaAngleLeft
                className={` size-7 text-[#BD1F17] ${
                  currentSlide <= 0
                    ? "opacity-30 cursor-not-allowed"
                    : "opacity-100"
                }`}
                onClick={() => {
                  slideRef.current.previous();
                  currentSlide > 0 &&
                    setCurrentSlide(slideRef.current?.state?.currentSlide - 1);
                }}
              />
            </button>
            <button
              disabled={currentSlide >= featuredProducts.length - 3}
              className="size-10 cursor-pointer rounded-full shadow-xl backdrop-blur-xl flex justify-center items-center"
            >
              <FaAngleRight
                className={` size-7 text-[#BD1F17] ${
                  currentSlide >= featuredProducts.length - 3
                    ? "opacity-30 cursor-not-allowed"
                    : "opacity-100"
                }`}
                onClick={() => {
                  slideRef.current.next();
                  setCurrentSlide(currentSlide + 1);
                }}
              />
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="popular-products py-3">
          <Carousel
            ref={slideRef}
            arrows={false}
            autoPlay={false}
            infinite={true}
            responsive={responsive}
            itemclassName="carousel-item-padding-40-px"
            className='space-x-2'
          >
            {
            
            products.map(fp => (
                <div onClick={(e) => handleRedirect(e, fp.id)} className="card mx-2 relative border   flex flex-col gap-2 group z-10 cursor-pointer  " key={fp.id} >
                    {/* Product Image */}
                    <div className="w-full h-[250px] overflow-hidden group-hover:bg-[rgba(0,0,0,0.4)]">
                        <img src={fp.image} className='size-full group-hover:scale-125 transition-all duration-500' alt={""} />
                    </div>

                    {/* Icons */}
                    <div className="absolute top-3 right-3 bg-[rgba(0,0,0,0.4)] p-2  text-white group-hover:block hidden z-20">
                        <div className="flex flex-col space-y-4">

                            <BsEye onClick={(e) => handleAddToCart(e)} className='text-xl hover:text-green-700   ' />
                            <BsHeart onClick={(e) => handleAddToCart(e)} className='text-xl hover:text-green-700' />
                            <BsCart onClick={(e) => handleAddToCart(e)} className='text-xl hover:text-green-700' />
                        </div>
                    </div>

                    {/* Product Content */}
                    <div className="px-2">
                        <p className='text-lg truncate'>{fp.name}</p>
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-400 line-through">${fp.price}</span>
                            <span className="text-lg font-bold text-red-600">${(fp.price - ((fp.price * fp.discount) / 100)).toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Rating */}
                    <Rating rating={fp.rating}/>

                  
                </div>
            ))
            
            }
          </Carousel>
        </div>
      </MainContainer>

      {/* side image design */}
      <div className="absolute size-40 left-0 -translate-x-[6rem] top-1/2 -translate-y-1/2">
        <img src="./side1.png" alt="" className="inset-0 -rotate-45" />
      </div>
    </div>




        </div>
    )
}

export default TrandingProducts