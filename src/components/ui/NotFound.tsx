import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='w-full h-[100vh] flex flex-col justify-center items-center overflow-hidden gap-3'>
            <h1 className='text-7xl animate-pulse text-red-600'>404</h1>
            <Link to={"/"} className='border px-3 py-1'>Go Home</Link>
        </div>
    )
}

export default NotFound