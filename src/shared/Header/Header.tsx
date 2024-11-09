import { useEffect, useState } from 'react'
import { BiMobile, BiSolidLogIn, BiX } from 'react-icons/bi'
import { LiaPhoneSolid } from 'react-icons/lia'
import { SiShopee, SiTheirishtimes, SiTraccar } from 'react-icons/si'
import { Link, useLocation } from 'react-router-dom'
import MainContainer from '../../components/user/containers/MainContainer'
import { BsHeart, BsMoon, BsSun } from 'react-icons/bs'
import { TfiBag, TfiSearch } from 'react-icons/tfi'
import { TiTimes, TiTimesOutline } from 'react-icons/ti'
import { FaTimes } from 'react-icons/fa'
import Search from '../../pages/user/search/Search'

const Header = () => {
  const [query, setQuery] = useState("")
  const orders: never[] = []
  const [isScrolly, setIsScrolly] = useState(false)
  const location = useLocation()


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 32) {
        setIsScrolly(true);
      } else {
        setIsScrolly(false);
      }
    };


    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const nevigateSearchPage = () => {

    return <Search query={query} />
  }




  return (
    <div className={`mb-[5.5rem] `}>
      {/* Top header */}
      <div className="topHeader h-[2rem] relative w-full bg-green-400 text-white flex items-center  text-xs sm:text-sm ">
        <MainContainer className=''>
          <div className="flex items-center justify-end gap-4 overflow-hidden ">
            <Link className='flex items-center gap-1' to={"#"}><BiMobile /> Get mobile app</Link>
            {
              orders && <Link className='flex items-center gap-1' to={"#"}><SiTraccar /> Track orders</Link>
            }
            <Link className='flex items-center gap-1' to={"#"}><LiaPhoneSolid /> +880 1712 34 567 890</Link>

          </div>
        </MainContainer>
      </div>

      {/* Sticky Header */}
      <div className={`w-full fixed ${isScrolly ? "top-[0rem]" : "top-[2rem]"} left-0 flex  items-center bg-green-700 py-5 duration-700 text-white z-30`}>
        <MainContainer>
          <div className="flex justify-between items-center overflow-hidden h-full py-2">
            {/* Brand logo & Icon */}
            <div className='hover:opacity-50 duration-500'>
              <Link className="flex items-center gap-2 uppercase" to={"/"}><SiShopee className='text-xl hover:bg-opacity-20 ' /> Shopee</Link>
            </div>

            {/* Link Items */}
            <div className="flex gap-2 items-center">
              <Link to={"/shop"}>Shop</Link>
              <Link to={"/category"}>Category</Link>
            </div>

            {/* Search */}
            <div className="relative">
              <input value={query} onKeyDown={() => nevigateSearchPage()} onChange={(e) => setQuery(e.target.value)} type="text" className='px-5 py-1 outline-none bg-[rgba(0,0,0,0.2)] rounded-full border-slate-700' />
              <div className="absolute flex items-center gap-2 top-1/2 right-3 -translate-y-1/2">
                {
                  query && <BiX className='text-2xl ' onClick={() => setQuery("")} />
                }
                <TfiSearch className='text-lg' />

              </div>
            </div>

            {/* Right side */}
            <div className="flex gap-3 md:gap-2  items-center">
              <TfiSearch className=' text-xl cursor-pointer' />
              <BsSun className='text-xl cursor-pointer' />
              <BsMoon className='text-xl cursor-pointer' />
              <div className="flex items-center gap-5">
                <div className="relative">
                  <TfiBag className='text-xl cursor-pointer' />
                  <div className="absolute -top-2  -right-2  bg-[rgba(0,0,0,0.4)] rounded-full flex justify-center items-center size-5">
                    0
                  </div>
                </div>
                <div className="relative">
                  <BsHeart className='text-xl cursor-pointer ' />
                  <div className="absolute -top-2  -right-2  bg-[rgba(0,0,0,0.4)] rounded-full flex justify-center items-center size-5">
                    0
                  </div>
                </div>
                <Link className='flex items-center gap-2 px-2 py-1 border border-slate-700 backdrop-blur-xl bg-[rgba(0,0,0,0.2)]' to={"/login"}><BiSolidLogIn /> Login</Link>
              </div>
            </div>

          </div>
        </MainContainer>
      </div>

    </div>
  )
}

export default Header