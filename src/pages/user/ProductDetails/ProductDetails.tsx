import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { featuredProducts } from '../../../constance'
import { Product } from '../../../types'
import Rating from '../../../components/user/Rating/Rating'

import ProductsCard from '../../../components/ui/ProductsCard'
import MainContainer from '../../../components/user/containers/MainContainer'
import { LiaMinusSolid, LiaPlusSolid } from 'react-icons/lia'
import Title from '../../../components/ui/Title'



const ProductDetails = () => {
    const params = useParams()
    const { id } = params
    const singleProduct = featuredProducts.find(fp => id && id == fp.id) as Product
    const { name, image, isFeatured, isNew, stock, price, discount, description, category, brand, rating, tags } = singleProduct

    const discountPrice = (price - ((price * discount) / 100)).toFixed(2)

    const relatedProducts = featuredProducts.filter(fp => (fp.category == category || fp.brand == brand || fp.name.includes(name) || fp.tags.some(tag => tags.includes(tag))) && fp.id !== parseInt(id)).slice(0, 4)

    const [quantity, setQuantity] = useState(1)

    const handleQuantity = (e: React.MouseEvent<SVGElement, MouseEvent>, action: string) => {
        e.preventDefault()
        if (action === "plus" && quantity >= 1 && quantity < stock) {
            setQuantity(quantity + 1)
        }
        if (action === "minus" && quantity > 1) {
            setQuantity(quantity - 1)
        }

    }

    return (
        <div className='overflow-hidden'>

            <MainContainer>
                {/* Image Gallery section */}
                <div className="flex gap-2 ">
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
                        <h2 className='text-2xl'>{name}</h2>
                        <div className="flex items-center space-x-2 mb-3">
                            <Link className='text-sm text-zinc-400' to={"#"}>{category}</Link>
                            <Link className='text-sm text-green-400' to={"#"}>See matched products</Link>
                        </div>

                        {/* Price */}
                        <div className="py-3 flex justify-center gap-2 w-max">
                            <p className='line-through'>${price} </p>
                            <p>${discountPrice}</p>

                        </div>

                        {/* Rating */}
                        <Rating rating={rating} />


                        {/* Stock */}

                        <div className="mb-3">
                            {
                                stock > 20 ? (
                                    <p className='text-green-300'>{stock} in stock</p>
                                ) : stock > 10 ? (
                                    <p className='text-orange-300'>{stock} products available</p>
                                ) : (
                                    <p className='text-red-400'>{stock} limited stock</p>
                                )
                            }
                        </div>


                        {/* Description */}
                        <p>{description}</p>

                        {/* Counter */}
                        <div className="flex gap-3 items-center py-3">

                            <div className="flex items-center">
                                <LiaPlusSolid onClick={(e) => handleQuantity(e, "plus")} className={`cursor-pointer text-xl ${quantity == stock ? "disabled cursor-not-allowed" : ""}`} />
                                <input type="number" disabled className='custom-number-input outline-none bg-transparent  text-center w-[30px] appearance-none! -webkit-appearance-none ' value={quantity} />
                                <LiaMinusSolid onClick={(e) => handleQuantity(e, "minus")} className={`cursor-pointer text-xl ${quantity == 1 ? "disabled cursor-not-allowed opacity-50" : ""}`} />
                            </div>

                            <span>{discountPrice}*{quantity}= {(discountPrice * quantity).toFixed(2)}</span>

                        </div>

                        <button className='border px-3 py-1'>Add to cart</button>
                    </div>
                </div>


                {/* Review and Comments */}

                <div className="border-y py-5">
                    <Title title='Review & Comment'/>
                </div>


                {/* Related products */}
                <div className="">
                    
                        {
                            relatedProducts.length > 0 && (<>
                                <Title title='Related products'/>

                                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 pt-3">

                                    {
                                        relatedProducts.map(product => <ProductsCard product={product} />)
                                    }
                                </div>
                            </>)
                        }
                   
                </div>
            </MainContainer>

        </div>
    )
}

export default ProductDetails