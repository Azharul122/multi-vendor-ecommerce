// import React from 'react'
import { LiaMinusSolid, LiaPlusSolid, LiaTimesSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'

interface props {
    open: boolean,
    isOpen: (open: boolean) => void
}
const CartModal = ({ open, isOpen }: props) => {
    return (
        <div className={`fixed  h-[100vh] z-[70] w-[450px] top-0 ${open ? "left-0" : "-left-full"}  transition-all duration-1000 ease-in-out`}>
            <div className="relative h-screen bg-white bg-opacity-80 p-5">
                {/* top */}
                <p className='sticky w-full py-2 border-b border-gray-500'>Cart</p>

                {/* cart content */}
                <div className="py-2 overflow-y-auto max-h-[calc(100vh-150px)]">
                    <div className="flex flex-col gap-2">
                        {/* card 1 */}
                        <div className="item-card grid grid-cols-4 items-center">
                            <div className="flex gap-2 items-center">
                                <img src="#" className='size-16' alt="" />
                            </div>

                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nesciunt!</p>


                            {/* Quantity */}
                            <div className="flex items-center gap-2">
                                <LiaPlusSolid className='cursor-pointer text-lg' />
                                <input className='px-2 py-1 rounded w-[50px] text-center overflow-y-hidden' type="number" value={0} />
                                <LiaMinusSolid className='cursor-pointer text-lg' />
                            </div>


                            {/* subtotal */}
                            <p className='text-sm'> Subtotal:$392</p>

                        </div>
                        {/* card 1 */}
                        <div className="item-card grid grid-cols-4 items-center">
                            <div className="flex gap-2 items-center">
                                <img src="#" className='size-16' alt="" />
                            </div>

                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nesciunt!</p>


                            {/* Quantity */}
                            <div className="flex items-center gap-2">
                                <LiaPlusSolid className='cursor-pointer text-lg' />
                                <input className='px-2 py-1 rounded w-[50px] text-center overflow-y-hidden' type="number" value={0} />
                                <LiaMinusSolid className='cursor-pointer text-lg' />
                            </div>


                            {/* subtotal */}
                            <p className='text-sm'> Subtotal:$392</p>

                        </div>
                        {/* card 1 */}
                        <div className="item-card grid grid-cols-4 items-center">
                            <div className="flex gap-2 items-center">
                                <img src="#" className='size-16' alt="" />
                            </div>

                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nesciunt!</p>

                            {/* Quantity */}
                            <div className="flex items-center gap-2">
                                <LiaPlusSolid className='cursor-pointer text-lg' />
                                <input className='px-2 py-1 rounded w-[50px] text-center overflow-y-hidden' type="number" value={0} />
                                <LiaMinusSolid className='cursor-pointer text-lg' />
                            </div>

                            {/* subtotal */}
                            <p className='text-sm'> Subtotal:$392</p>

                        </div>
                        {/* card 1 */}
                        <div className="item-card grid grid-cols-4 items-center">
                            <div className="flex gap-2 items-center">
                                <img src="#" className='size-16' alt="" />
                            </div>

                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nesciunt!</p>


                            {/* Quantity */}
                            <div className="flex items-center gap-2">
                                <LiaPlusSolid className='cursor-pointer text-lg' />
                                <input className='px-2 py-1 rounded w-[50px] text-center' type="number" value={0} />
                                <LiaMinusSolid className='cursor-pointer text-lg' />
                            </div>


                            {/* subtotal */}
                            <p className='text-sm'> Subtotal:$392</p>

                        </div>
                        {/* card 1 */}
                        <div className="item-card grid grid-cols-4 items-center">
                            <div className="flex gap-2 items-center">
                                <img src="#" className='size-16' alt="" />
                            </div>

                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nesciunt!</p>


                            {/* Quantity */}
                            <div className="flex items-center gap-2">
                                <LiaPlusSolid className='cursor-pointer text-lg' />
                                <input className='px-2 py-1 rounded w-[50px] text-center overflow-y-hidden' type="number" value={0} />
                                <LiaMinusSolid className='cursor-pointer text-lg' />
                            </div>


                            {/* subtotal */}
                            <p className='text-sm'> Subtotal:$392</p>

                        </div>
                        {/* card 1 */}
                        <div className="item-card grid grid-cols-4 items-center">
                            <div className="flex gap-2 items-center">
                                <img src="#" className='size-16' alt="" />
                            </div>

                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nesciunt!</p>


                            {/* Quantity */}
                            <div className="flex items-center gap-2">
                                <LiaPlusSolid className='cursor-pointer text-lg' />
                                <input className='px-2 py-1 rounded w-[50px] text-center overflow-y-hidden' type="number" value={0} />
                                <LiaMinusSolid className='cursor-pointer text-lg' />
                            </div>


                            {/* subtotal */}
                            <p className='text-sm'> Subtotal:$392</p>

                        </div>
                    </div>
                </div>

                {/* Fixed part */}
                <div className="sticky bottom-0 left-0 py-2 px-3 border-t border-gray-500 w-full flex justify-between items-center">
                    <div className="coupon flex flex-col gap-2">
                        <input type="text" className='py-1 outline-none bg-transparent border border-gray-500 px-2' />
                        <button className='px-3 py-1 border border-gray-500 w-max'>Apply coupon</button>
                    </div>

                    <div>
                        <p className='mb-2'>Total Price: $550</p>
                        <Link to={"#"} className='border border-gray-500 px-3 py-1 hover:opacity-50 duration-500'>Checkout</Link>
                    </div>
                </div>

                {/* Close Modal Icon */}
                <div onClick={() => isOpen(false)} className="absolute top-2 right-2 cursor-pointer hover:opacity-50 duration-500">
                    <LiaTimesSolid className='text-xl' />
                </div>
            </div>
        </div>
    )
}

export default CartModal