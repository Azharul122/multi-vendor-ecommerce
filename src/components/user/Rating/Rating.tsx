import React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

interface ratingProps {
    rating: number
}

const Rating = ({ rating }: ratingProps) => {
    return (
        <div className="flex gap-1 items-center px-2">
            {

                [...Array(Math.floor(rating))].map((_, i) => (
                    <BsStarFill key={i} className='text-orange-500' />
                ))

            }
            {

                Math.floor(rating) + (5 - Math.ceil(rating)) !== 5 && <BsStarHalf className='text-orange-500' />
            }
            {

                [...Array(5 - Math.ceil(rating))].map((_, i) => (
                    <BsStar key={i} className='text-orange-500' />
                ))

            }

            <p>(2)</p>

        </div>
    )
}

export default Rating