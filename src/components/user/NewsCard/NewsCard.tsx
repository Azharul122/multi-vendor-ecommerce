import React from 'react'
import { News } from '../../../types'
import { Link } from 'react-router-dom'

interface props {
  news: News
}

const NewsCard = ({ news }: props) => {
  const { image, tags, title, author, authorImage, date, description, category, id, url } = news

  return (
    <Link to={`/news/${id}`} className={`card relative border mx-3  flex flex-col gap-1 group z-10 cursor-pointer `} key={id} >
      {/*  Image */}
      <div className="w-full h-[150px] overflow-hidden group-hover:bg-[rgba(0,0,0,0.4)]">
        <img src={image} className='size-full group-hover:scale-125 transition-all duration-500 object-fill' alt={""} />
      </div>


      <div className="px-2">
        {/* title  */}
        <p className='text-lg '>{title}</p>
        {/* Description */}
        <div className="flex items-center space-x-2 text-sm ">
          <div className="p">
            {description.length > 50 ? (
              <p>
                {
                  description.slice(0, 50).concat("...")
                }
              </p>
            ) : (
              <p>
                {
                  description
                }
              </p>
            )}
          </div>
        </div>

        {/* Author */}
        <div className="mt-5 pb-3">
          <div className="flex items-center gap-3">
            <img src={authorImage} alt="" className='size-10 rounded-full object-fill object-center' />
            <p className='text-[1rem]'> {author}</p>
          </div>
          <p className='text-sm'>Admin | {date}</p>
        </div>

      </div>


    </Link>
  )
}

export default NewsCard