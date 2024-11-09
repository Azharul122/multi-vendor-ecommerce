import React from 'react'
import { featuredProducts } from '../../../constance'
import { BsCart, BsEye, BsHeart, BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import {  useNavigate } from 'react-router-dom'
import Rating from '../Rating/Rating'
import ProductsCard from '../../ui/ProductsCard'


const FeaturedProducts = () => {

    const FeaturedProducts = featuredProducts.filter(fp => fp.isFeatured == true)

  

    return (
        <div >
            <div className="grid grid-cols-4 gap-4">
                {
                    FeaturedProducts.map(fp => (
                        <ProductsCard product={fp}/>
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturedProducts