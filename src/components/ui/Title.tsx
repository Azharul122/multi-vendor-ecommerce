import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

interface tileProps{
    title:string,
    className?:string,
    props?:DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

const Title = ({title}:tileProps) => {
    return (
      
            <div className="relative  w-max">
                <p className="uppercase md:text-2xl text-xl  ">{title} <span className='absolute  right-0 -bottom-[2px] h-[1px] bg-green-700 w-[50px]'></span> </p>
            </div>
   
    )
}

export default Title