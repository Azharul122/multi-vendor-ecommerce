import { useEffect, useState } from "react"
import { Product } from "../../types"
import { featuredProducts } from "../../constance"
import { LiaTimesSolid } from "react-icons/lia"
import { Link } from "react-router-dom"
import Rating from "../user/Rating/Rating"


interface props {
    product:Product | null,
    open:boolean,
    setOpen: (open: boolean) => void;
}



const CarouselProductModal = ({ product,open,setOpen }: props) => {
  


    return (
        <>
            {
                open && product && (

                    <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[60] overflow-y-auto w-[90%] h-[90vh] bg-[rgba(0,0,0,0.8)]">

                        <div className="size-full relative  p-5">
                            {/* Close modal */}
                            <div className="absolute top-2 right-2 cursor-pointer">
                                <LiaTimesSolid onClick={() => setOpen(false)} className='text-xl text-white ' />

                            </div>

                            {/* Border  */}
                            <div className="h-10 w-full border-b"></div>

                            {/* Products details */}
                            <div className="md:flex gap-2 flex-col ">
                                {/* gallery */}
                                <div className="flex-1 ">
                                    <div className="grid grid-cols-3 w-full items-center">
                                        {/* Left imagees */}
                                        <div className="col-span-1 ">
                                            <div className="grid grid-cols-1 gap-2">
                                                <img className='h-[100px] active' src="https://images.samsung.com/is/image/samsung/p6pim/bd/ua55bu8000rsfs/gallery/bd-crystaluhd-bu8000-ua55bu8000rsfs-533633653?$730_584_PNG$" alt="" /><img className='h-[100px]' src="https://images.samsung.com/is/image/samsung/p6pim/bd/ua55bu8000rsfs/gallery/bd-crystaluhd-bu8000-ua55bu8000rsfs-533633628?$684_547_PNG$" alt="" /><img className='h-[100px]' src="https://images.samsung.com/is/image/samsung/p6pim/bd/ua55bu8000rsfs/gallery/bd-crystaluhd-bu8000-ua55bu8000rsfs-533633632?$684_547_PNG$" alt="" />
                                            </div>
                                        </div>
                                        {/* Active imagees */}
                                        <div className="col-span-2 ">
                                            <img className='w-full' src="https://images.samsung.com/is/image/samsung/p6pim/bd/ua55bu8000rsfs/gallery/bd-crystaluhd-bu8000-ua55bu8000rsfs-533633629?$684_547_PNG$" alt="" />
                                        </div>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="flex-1 py-5 px-2">
                                    {/* Title */}
                                    <h2 className='text-2xl text-white'>{product.name}</h2>

                                    {/* Category */}
                                    <div className="flex items-center space-x-2 mb-3">
                                        <Link className='text-sm text-zinc-400' to={"#"}>{product.category}</Link>
                                        <Link className='text-sm text-green-400' to={"#"}>See matched products</Link>
                                    </div>

                                    {/* price */}
                                    <div className="flex items-center space-x-2">
                                        <p className='line-through text-white'>{product.price}</p>
                                        <p className='text-red-600'>{(product.price - ((product.discount * product.price) / 100)).toFixed(2)}</p>
                                    </div>

                                    {/* Rating */}
                                    <Rating rating={product.rating} />


                                    {/* Stock */}

                                    <div className="mb-3">
                                        {
                                            product.stock > 20 ? (
                                                <p className='text-green-300'>{product.stock} in stock</p>
                                            ) : product.stock > 10 ? (
                                                <p className='text-orange-300'>{product.stock} products available</p>
                                            ) : (
                                                <p className='text-red-400'>{product.stock} limited stock</p>
                                            )
                                        }
                                    </div>


                                    {/* Description */}
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        </div>

                    </div>

                )
            }
        </>
    )
}

export default CarouselProductModal