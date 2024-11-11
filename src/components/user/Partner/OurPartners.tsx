import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ourBrands } from '../../../constance';
import MainContainer from '../containers/MainContainer';


const OurPartners = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 3,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            }
        ]
    }
    return (
        <div className='py-8'>
            <MainContainer>
                <div className="relative w-max">
                    <span className='absolute right-0 -bottom-[2px] h-[1px] bg-green-700 w-[50px]'></span>
                    <p className="uppercase md:text-2xl text-xl">Our Partners</p>
                </div>
                <div className="slider-container overflow-hidden pt-5">
                    <Slider {...settings}>
                        {
                            ourBrands.map((brnad, i) => (
                                <div className=" mr-1" key={i}>
                                    <img src={brnad.image} className='size-[6rem]' alt="" />

                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </MainContainer>
        </div>
    )
}

export default OurPartners