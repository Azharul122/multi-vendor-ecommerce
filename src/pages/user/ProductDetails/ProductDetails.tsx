import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { featuredProducts } from '../../../constance'
import { Product } from '../../../types'
import Rating from '../../../components/user/Rating/Rating'
import { p } from 'framer-motion/client'
import ProductsCard from '../../../components/ui/ProductsCard'
import MainContainer from '../../../components/user/containers/MainContainer'



const ProductDetails = () => {
    const params = useParams()
    const { id } = params
    const singleProduct = featuredProducts.find(fp => parseInt(id) == fp.id) as Product
    const { name, image, isFeatured, isNew, stock, price, discount, description, category, brand, rating, tags } = singleProduct

    const relatedProducts = featuredProducts.filter(fp => (fp.category == category || fp.brand == brand || fp.name.includes(name) || fp.tags.some(tag => tags.includes(tag))) && fp.id !== parseInt(id)).slice(0, 4)

    console.log(relatedProducts)
    return (
        <div className='overflow-hidden'>

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
                </div>
            </div>

            {/* Review and Comments */}

            <div className="border-y py-5">
                <p>Review & Comment</p>
            </div>


            {/* Related products */}
            <div className="">
                <MainContainer>
                    {
                        relatedProducts.length > 0 && (<>
                            <p>Related products</p>
                            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2">

                                {
                                    relatedProducts.map(product => <ProductsCard product={product} />)
                                }
                            </div>
                        </> ) 
                }
                </MainContainer>
            </div>

        </div>
    )
}

export default ProductDetails