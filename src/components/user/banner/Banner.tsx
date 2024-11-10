import { SetStateAction, useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { bannerSliderData } from "../../../constance";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";



const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);


    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1700 },
            items: 1,
            partialVisibilityGutter: 40,
        },
        desktop: {
            breakpoint: { max: 1700, min: 770 },
            items: 1,
            partialVisibilityGutter: 40,
        },
        tablet: {
            breakpoint: { max: 770, min: 400 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 400, min: 0 },
            items: 1,
        },
    };
    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: "ease-in-out",

        });
    }, []);


    const handleSlideChange = (newIndex: SetStateAction<number>) => {
        setCurrentSlide(newIndex);
    };


    const slideVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
            },
        },
        exit: { opacity: 0, x: 100, transition: { duration: 1 } }, // Slide out to the left
    };

    return (
        <div className="overflow-hidden">
           
            <Carousel
                ref={slideRef}
                arrows={false}
                responsive={responsive}
                transitionDuration={3000}

                beforeChange={handleSlideChange}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
            >

                {
                    bannerSliderData.map(banner => (
                        <motion.div
                            className={`card h-[75vh] w-full bg-cover object-fill bg-center bg-no-repeat flex items-center`}
                            key={currentSlide}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={slideVariants}
                            style={{ backgroundImage: `url(${banner?.image})` }}

                        >
                            <div className={`w-full h-full bg-[rgba(0,0,0,0.3)] p-10 text-white flex justify-${banner.xAxisPosition}`}>
                                <div className={`max-w-[40rem] flex flex-col gap-3 h-full justify-${banner.yAxisPosition} items-${banner.textPosition}`}>
                                    <p className="text-3xl transition delay-500 duration-500 animate-pulse-once">
                                        {
                                            banner.title
                                        }
                                    </p>
                                    <p className="transition delay-600 duration-600 animate-pulse-once">{banner.description}</p>
                                    <div className="transition delay-700 duration-700 animate-pulse-once">
                                        <Link to={"#"} className="px-3 py-1 border">{banner.buttonText}</Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default Banner