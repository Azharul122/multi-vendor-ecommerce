import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { siteNews } from '../../../constance'
import { News } from '../../../types'
import MainContainer from '../../../components/user/containers/MainContainer'
import Title from '../../../components/ui/Title'
import { LiaEye } from 'react-icons/lia'
import { BsEye } from 'react-icons/bs'

const NewsDetails = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [newsData, setNewsData] = useState<News | undefined>(undefined)
    const [viewCount, setViewCount] = useState<number>(100)

  

    useEffect(() => {
        try {
            setLoading(true)
            const singleNews = id && siteNews.find(news => news.id === parseInt(id))
            if (singleNews) {
                setNewsData(singleNews)
            }

        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }, [id])

    if (loading) {
        return <div className="">Loading...............</div>
    }

    //   const { image, tags, title, author, authorImage, date, description, category, url } = newsData

    return (
        <div className='py-7'>
            <MainContainer>
                <div className="md:flex-row flex flex-col gap-4 ">
                    {/* right */}
                    <div className="md:w-[65%] w-full md:mb-0 mb-4">
                        <div className="flex items-center gap-2 flex-wrap pb-2">
                            {
                                newsData?.tags.map((tag, index) => (
                                    <div className="px-2 py-1 bg-green-700" key={index}>
                                        {
                                            tag
                                        }
                                    </div>
                                ))
                            }
                        </div>

                        {/* Name */}
                        <Title title={newsData?.title ? newsData?.title : ""} />

                        {/* description */}
                        <p className='py-3 dark:text-white text-zinc-700 italic'>{newsData?.description}</p>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <span className='font-bold flex items-center gap-2' > <img src={newsData?.authorImage} alt="" className='size-10 rounded-full' /> {newsData?.author}
                                </span>
                                <span>-</span>
                                <p>{newsData?.date}</p>
                            </div>

                            {/*  */}
                            <div className="flex items-center gap-2"><BsEye /> <span>{viewCount}</span></div>
                        </div>

                        {/* Image */}
                        <div className="w-full h-[25rem] relative mt-4">
                            <img src={newsData?.image} className='size-full object-fill' alt="" />
                        </div>
                    </div>

                    {/* .........Right sidebar........ */}
                    <div className="md:w-[35%] border-b w-full">
                        {/* title */}
                        <div className="relative w-full">
                            <button className='px-3 py-1 bg-[rgba(255,255,255,0.5)] z-10 border relative'> Latest News</button>
                            <span className='absolute w-full bottom-0 left-0  border-[1px]'>

                            </span>
                        </div>

                        {/* Content here */}
                        <div className="grid grid-cols-1 gap-5 pt-5">
                            {
                                siteNews.slice(0, 6).map(news => <Link to={`/news/${news.id}`} className="flex items-center gap-2 hover:opacity-50 duration-500" key={news.id}>
                                    <img src={news.image} alt="" className='size-6 object-cover shrink-0' />
                                    <p>{news.title}</p>
                                </Link>)
                            }
                        </div>

                    </div>
                </div>
            </MainContainer>
        </div>
    )
}

export default NewsDetails