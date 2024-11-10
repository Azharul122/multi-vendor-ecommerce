import React, { useState } from 'react'
import Rating from '../user/Rating/Rating'
import { useNavigate } from 'react-router-dom'
import { Product } from '../../types'
import { BsCart, BsEye, BsHeart } from 'react-icons/bs'
import CarouselProductModal from './CarouselProductModal'

interface props {
    product: Product
    marginX?:string
}

const ProductsCard = ({ product,marginX }: props) => {


    const navigate = useNavigate()
    const [open, setOpen] = useState(false)



    const handleRedirect = (event: React.MouseEvent<SVGElement, MouseEvent>, id: string) => {
        event.preventDefault()
        navigate(`/products/${id}`)

    }
    const handleAddToCart = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
        event.stopPropagation()
    }
    const HndlePructView = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
        event.stopPropagation()
        setOpen(true)

    }


    return (
        <div>
            <div onClick={(e) => handleRedirect(e, product.id)} className={`card relative border   flex flex-col gap-1 group z-10 cursor-pointer  ${marginX?marginX:""}`} key={product.id} >
                {/* Product Image */}
                <div className="w-full h-[250px] overflow-hidden group-hover:bg-[rgba(0,0,0,0.4)]">
                    <img src={product.image} className='size-full group-hover:scale-125 transition-all duration-500' alt={""} />
                </div>

                {/* Icons */}
                <div className="absolute top-3 right-3 bg-[rgba(0,0,0,0.4)] p-2  text-white group-hover:block hidden z-20">
                    <div className="flex flex-col space-y-4">

                        <BsEye onClick={(e) => HndlePructView(e)} className='text-xl hover:text-green-700   ' />
                        <BsHeart onClick={(e) => handleAddToCart(e)} className='text-xl hover:text-green-700' />
                        <BsCart onClick={(e) => handleAddToCart(e)} className='text-xl hover:text-green-700' />
                    </div>
                </div>

                {/* Product Content */}
                <div className="px-2">
                    <p className='text-lg truncate'>{product.name}</p>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-400 line-through">${product.price}</span>
                        <span className="text-lg font-bold text-red-600">${(product.price - ((product.price * product.discount) / 100)).toFixed(2)}</span>
                    </div>
                </div>

                {/* Rating */}

                <Rating rating={product.rating} />


            </div>

            {/* Product modal */}
           <CarouselProductModal product={product} open={open} setOpen={setOpen}/>
        </div>
    )
}

export default ProductsCard