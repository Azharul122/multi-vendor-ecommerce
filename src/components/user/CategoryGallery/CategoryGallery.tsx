import React from 'react'
import MainContainer from '../containers/MainContainer'
import { useNavigate } from 'react-router-dom'

const CategoryGallery = () => {
    const navigate = useNavigate()
    return (
        <div className='py-5'>
            <MainContainer>
                {/* Title */}
                <div className="pb-5 w-max">
                    <p className=" relative uppercase md:text-2xl text-xl">Category <span className='absolute right-0 -bottom-[2px] h-[1px] bg-green-700 w-[50px]'></span></p>

                </div>

                {/* Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-4 h-[400px]">
                    {/* Item1 */}
                    <div className="row-span-1 col-span-2 relative group overflow-hidden cursor-pointer" onClick={() => navigate("/abc")}>
                        <img
                            className="w-full h-full object-fill group-hover:scale-110 transition duration-300"
                            src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        />
                        {/* Overlay */}
                        <div className="absolute top-0 left-0 hover:bg-[rgba(0,0,0,0.4)] w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 hover:text-white transition duration-600 delay-600 group-hover:scale-110">
                            <p className='uppercase relative'>Laptop <span className='absolute h-[2px] w-[30px] -bottom-0 left-0 group-hover:right-0 bg-green-600 transition duration-300'></span></p>
                        </div>


                    </div>

                    <div className="row-span-1 col-span-1 relative group overflow-hidden cursor-pointer">
                        <img
                            className="w-full h-full object-fill group-hover:scale-110 transition duration-300"
                            src="https://www.startech.com.bd/image/cache/catalog/digital-camera/sony/alpha-a6400/alpha-a6400-1-500x500.jpg"
                            alt="Sony Alpha A6400 Camera"
                        />

                        {/* Overlay */}
                        <div className="absolute top-0 left-0 hover:bg-[rgba(0,0,0,0.4)] w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 hover:text-white transition duration-600 delay-600 group-hover:scale-110">
                            <p className='uppercase relative'>Camera <span className='absolute h-[2px] w-[30px] -bottom-0 left-0 group-hover:right-0 bg-green-600 transition duration-300'></span></p>
                        </div>
                    </div>

                    <div className="row-span-2 col-span-1 relative group overflow-hidden cursor-pointer">
                        <img
                            className="w-full h-full object-fill group-hover:scale-110 transition duration-300"
                            src="https://www.startech.com.bd/image/cache/catalog/mobile/zte/nubia-z60-ultra/nubia-z60-ultra-black-500x500.webp"
                            alt="ZTE Nubia Z60 Ultra Smartphone"
                        />

                        {/* Overlay */}
                        <div className="absolute top-0 left-0 hover:bg-[rgba(0,0,0,0.4)] w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 hover:text-white transition duration-600 delay-600 group-hover:scale-110">
                            <p className='uppercase relative'>Mobile <span className='absolute h-[2px] w-[30px] -bottom-0 left-0 group-hover:right-0 bg-green-600 transition duration-300'></span></p>
                        </div>
                    </div>

                    <div className="row-span-1 col-span-1 relative group overflow-hidden cursor-pointer">
                        <img
                            className="w-full h-full object-fill group-hover:scale-110 transition duration-300"
                            src="https://www.startech.com.bd/image/cache/catalog/smart-watch/colmi/p28-plus/p28-plus-black-500x500.webp"
                            alt="Colmi P28 Plus Smartwatch"
                        />

                        {/* Overlay */}
                        <div className="absolute top-0 left-0 hover:bg-[rgba(0,0,0,0.4)] w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 hover:text-white transition duration-600 delay-600 group-hover:scale-110">
                            <p className='uppercase relative'>Smart Watch <span className='absolute h-[2px] w-[30px] -bottom-0 left-0 group-hover:right-0 bg-green-600 transition duration-300'></span></p>
                        </div>
                    </div>

                    <div className="row-span-1 col-span-2 relative group overflow-hidden cursor-pointer">
                        <img
                            className="w-full h-full object-fill group-hover:scale-110 transition duration-300"
                            src="https://images.pexels.com/photos/3921847/pexels-photo-3921847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Xiaomi Black Shark Lucifer T9 Earbuds"
                        />

                        {/* Overlay */}
                        <div className="absolute top-0 left-0 hover:bg-[rgba(0,0,0,0.4)] w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 hover:text-white transition duration-600 delay-600 group-hover:scale-110">
                            <p className='uppercase relative'>Earbuds <span className='absolute h-[2px] w-[30px] -bottom-0 left-0 group-hover:right-0 bg-green-600 transition duration-300'></span></p>
                        </div>
                    </div>
                </div>
            </MainContainer>

        </div>
    )
}

export default CategoryGallery