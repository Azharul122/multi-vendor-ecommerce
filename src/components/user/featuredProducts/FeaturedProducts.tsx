import Carousel from 'react-multi-carousel'
import { featuredProducts } from '../../../constance'
import CarouselProductModal from '../../ui/CarouselProductModal'
import ProductsCard from '../../ui/ProductsCard'
import MainContainer from '../containers/MainContainer'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import { Product } from '../../../types'
import Aos from 'aos'
import "react-multi-carousel/lib/styles.css";
import { BsCart, BsEye, BsHeart } from 'react-icons/bs'
import Rating from '../Rating/Rating'


const FeaturedProducts = () => {

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

    const FeaturedProducts = featuredProducts.filter(fp => fp.isFeatured == true)

    const navigate = useNavigate()
    const HndlePructView = (event: React.MouseEvent<SVGElement, MouseEvent>, product: Product) => {
        event.stopPropagation()
        setOpen(true)
        setSingleProduct(product)
    }

    const handleRedirect = (event: React.MouseEvent<SVGElement, MouseEvent>, id: string) => {
        event.preventDefault()
        navigate(`/products/${id}`)

    }
    const handleAddToCart = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
        event.stopPropagation()
    }



    return (
        <div >
            {/* <MainContainer>
                <div className="grid grid-cols-4 gap-4">
                    {
                        FeaturedProducts.map(fp => (
                            <ProductsCard product={fp} />
                        ))
                    }
                </div>
            </MainContainer> */}


<div className="bg-[#FBF7F2] py-10 relative  overflow-hidden">
                {/*  */}

                <MainContainer>
                    <div className="flex items-center justify-between pb-3">
                        <div className="relative">
                            <p className="uppercase md:text-2xl text-xl">POPULAR Products</p>
                            <span className='absolute right-0 -bottom-[2px] h-[1px] bg-green-700 w-[50px]'></span>
                        </div>
                        <div className="flex gap-4 items-center">
                            <button
                                disabled={currentSlide <= 0}
                                className="size-10 cursor-pointer rounded-full shadow-xl backdrop-blur-xl flex justify-center items-center"
                            >
                                <FaAngleLeft
                                    className={` size-7 text-[#BD1F17] ${currentSlide <= 0
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
                                    className={` size-7 text-[#BD1F17] ${currentSlide >= featuredProducts.length - 3
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
                            itemClass="carousel-item-padding-40-px"
                            className='space-x-2'
                        >
                            {

                                FeaturedProducts.map(fp => (

                                    //    <ProductsCard product={fp} marginX='mx-2' />
                                    <div onClick={(e) => handleRedirect(e, fp.id)} className={`card relative border mx-3  flex flex-col gap-1 group z-10 cursor-pointer  `} key={fp.id} >
                                        {/* Product Image */}
                                        <div className="w-full h-[250px] overflow-hidden group-hover:bg-[rgba(0,0,0,0.4)]">
                                            <img src={fp.image} className='size-full group-hover:scale-125 transition-all duration-500' alt={""} />
                                        </div>

                                        {/* Icons */}
                                        <div className="absolute top-3 right-3 bg-[rgba(0,0,0,0.4)] p-2  text-white group-hover:block hidden z-20">
                                            <div className="flex flex-col space-y-4">

                                                <BsEye onClick={(e) => HndlePructView(e, fp)} className='text-xl hover:text-green-700   ' />
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

                                        <Rating rating={fp.rating} />


                                    </div>
                                ))

                            }
                        </Carousel>
                    </div>
                </MainContainer>



            </div>


            {/* carousel product modal */}

            <CarouselProductModal product={singleProduct ? singleProduct : null} open={open} setOpen={setOpen} />
        </div>
    )
}

export default FeaturedProducts