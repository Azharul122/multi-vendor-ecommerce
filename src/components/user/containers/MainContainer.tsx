import React from 'react'

interface props {
    children: React.ReactNode,
    className?: string
}

const MainContainer = ({ children }: props) => {
    return (
        <div className='md:w-[90%] sm:w-[94%] w-[98%] mx-auto'>
            {
                children
            }
        </div>
    )
}

export default MainContainer