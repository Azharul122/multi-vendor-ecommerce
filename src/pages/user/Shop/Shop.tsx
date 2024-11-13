import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

const Shop = () => {
  const location = useLocation()
  const categorySearchUrl = new URLSearchParams(location.search).get("category")
  return (
    <div>
      <div className="header w-[90%] h-10 mx-auto bg-slate-600 flex justify-between items-center flex-shrink-0">
        <p>Brand Section</p>
        <p>Nav Items</p>
        <p>Cart</p>

        <div className="relative">
          <img
            src="https://www.startech.com.bd/image/cache/catalog/laptop/asus/fa507re/fa507re-01-228x228.webp"
            className="size-10 rounded-full"
            alt=""
          />


          <div className="absolute p-3 w-[350px] -bottom-32 right-0 bg-yellow-500" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id velit hic quas suscipit obcaecati...
          </div>
        </div>
      </div>

    </div>
  )
}

export default Shop