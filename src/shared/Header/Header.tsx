import React, { MouseEvent, useEffect, useState } from 'react'
import { BiMobile, BiSolidLogIn, BiSolidLogOut, BiSolidUser, BiX } from 'react-icons/bi'
import { LiaPhoneSolid } from 'react-icons/lia'
import { SiShopee, SiTraccar } from 'react-icons/si'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import MainContainer from '../../components/user/containers/MainContainer'
import { BsHeart, BsMoon, BsSun } from 'react-icons/bs'
import { TfiBag, TfiSearch } from 'react-icons/tfi'
import WishListModal from '../../components/ui/WishListModal'
import CartModal from '../../components/ui/CartModal'
import { GoListOrdered } from 'react-icons/go'
import { FaFirstOrder } from 'react-icons/fa'
import { VscGlobe } from 'react-icons/vsc'

const Header = () => {
  const [query, setQuery] = useState("")
  const orders: never[] = []
  const [isScrolly, setIsScrolly] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const [modalShow, setModalShow] = useState<boolean>(false)
  const [isWishlistOpen, setIsWishListOpen] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(false)


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


  const handleSearchSubmit = (e: MouseEvent<SVGElement, globalThis.MouseEvent>) => {
    e.preventDefault()
    // navigate(`/search?query=${query}`,{state:"q"})
    navigate(`/search?query=${query}`)
    setQuery("")
  }


  const handleSearchEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {


    if (e.key == "Enter") {
      e.preventDefault()
      navigate(`/search?query=${query}`)
      setQuery("")

    }

  }




  const handleAddToCart = (e: MouseEvent<SVGElement, globalThis.MouseEvent>) => {
    e.preventDefault()
    setModalShow(!modalShow)
    setIsWishListOpen(false)
  }
  const handleWishList = (e: MouseEvent<SVGElement, globalThis.MouseEvent>) => {
    e.preventDefault()
    setIsWishListOpen(!isWishlistOpen)
    setModalShow(false)
  }


  // .......... Theme ..............

  const [theme, setTheme] = useState("light")
  const [loading, setLoading] = useState<boolean>(true);
  const handleToggleTheme = (event: React.MouseEvent<SVGElement, globalThis.MouseEvent>) => {
    event.preventDefault()
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));




  }



  useEffect(() => {
    const getCurrentTheme = localStorage.getItem("theme")
    console.log(getCurrentTheme)
    if (getCurrentTheme) {
      setTheme(getCurrentTheme)
    }
    setLoading(false)
  }, [])


  useEffect(() => {
    if (loading) return
    if (theme == "dark") {

      document.body.classList.add("dark")
      document.body.classList.remove("light")
    }
    else {

      document.body.classList.add("light")
      document.body.classList.remove("dark")
    }

    localStorage.setItem("theme", theme)
  }, [theme])


  // .................. profile ..................

  const user = { role: "admin", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1uWMp6aoYC9_tXhEl7W4dFeWdd6leHDNYNw&s" }


  //............. Toggle Profile navlink modal ...................


  const hanldeProfileNavModal = (e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    e.stopPropagation()
    
    setShow(!show)
  }

  const handleLogout=(e: React.MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>)=>{
    e.preventDefault()
    alert("Logout")
  }


  return (
    <div className={`mb-[5.5rem] `}>
      {/* Top header */}
      <div className="topHeader h-[2rem] relative w-full bg-green-400 text-white flex items-center  text-xs sm:text-sm ">
        <MainContainer className=''>
          <div className="flex items-center justify-end gap-4  ">
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
          <div className="flex justify-between items-center  h-full py-2 shrink-0">
            {/* Brand logo & Icon */}
            <div className='hover:opacity-50 duration-500'>
              <Link className="flex items-center gap-2 uppercase" to={"/"}><SiShopee className='text-xl hover:bg-opacity-20 ' /> Shopee</Link>
            </div>

            {/* Link Items */}
            <div className="sm:block hidden">
              <div className="flex gap-2 items-center  ">
                <Link to={"/shop"}>Shop</Link>
                <Link to={"/category"}>Category</Link>
              </div>
            </div>

            {/* Search */}
            <form className="relative hidden md:block "  >
              <input value={query} type="text" className='px-5 py-1 outline-none bg-[rgba(0,0,0,0.2)] rounded-full border-slate-700' onChange={(e) => setQuery(e.target.value)} onKeyDown={handleSearchEnter} />
              <div className="absolute flex items-center gap-2 top-1/2 right-3 -translate-y-1/2">
                {
                  query && <BiX className='text-2xl' onClick={() => setQuery("")} />
                }
                <TfiSearch className='text-lg' onClick={handleSearchSubmit} />

              </div>
            </form>

            {/* Right side */}
            <div className="flex gap-3 md:gap-2  items-center">
              <TfiSearch className=' text-xl cursor-pointer' />
              {
                theme == "dark" ? (
                  <BsSun onClick={handleToggleTheme} className='text-xl cursor-pointer' />

                ) : (
                  <BsMoon onClick={handleToggleTheme} className='text-xl cursor-pointer' />

                )
              }
              <div className="flex items-center gap-5">
                <div className="relative">
                  <TfiBag onBlur={() => setModalShow(!modalShow)} onClick={(e) => handleAddToCart(e)} className='text-xl cursor-pointer' />
                  <div className="absolute -top-2  -right-2  bg-[rgba(0,0,0,0.4)] rounded-full flex justify-center items-center size-5">
                    0
                  </div>
                </div>
                <div className="relative">
                  <BsHeart onClick={(e) => handleWishList(e)} className='text-xl cursor-pointer ' />
                  <div className="absolute -top-2  -right-2  bg-[rgba(0,0,0,0.4)] rounded-full flex justify-center items-center size-5">
                    0
                  </div>
                </div>
                {
                  user ? (
                    <div className="w-8 h-8 flex justify-center items-center border dark:bg-slate-700 rounded-full relative" onClick={(e)=>hanldeProfileNavModal(e)}>
                      <img src={user.image} className='size-7 rounded-full' alt="" />
                      {/*Modal Link items */}
                      {
                        show && (
                          <div className="modal absolute top-[2.6rem] right-0 w-40 md:p-4 p-2 z-[120] dark:bg-[rgba(0,0,0,0.8)]">
                            <div className="size-full">
                              {/* title */}
                              <p className='pb-3 border-b '>Login as <span className='font-medium'>Azhar</span></p>

                              {/* Link items */}
                              <div className="flex flex-col gap-3 pt-2">
                                <button className='flex gap-2 items-center'>
                                   <FaFirstOrder /> Orders
                                </button>
                                <Link className='flex gap-2 items-center' to={"#"}><BiSolidUser /> Peofile</Link>
                                <Link className='flex gap-2 items-center' onClick={(e)=>handleLogout(e)} to={"#"}><BiSolidLogOut /> Logout</Link>
                              </div>
                            </div>
                          </div>
                        )
                      }
                    </div>
                  ) : (
                    <Link className='flex items-center gap-2 px-2 py-1 border border-slate-700 backdrop-blur-xl bg-[rgba(0,0,0,0.2)]' to={"/login"}><BiSolidLogIn />Login</Link>
                  )
                }
              </div>
            </div>

          </div>
        </MainContainer>
      </div>

      {/* Modal cart*/}

      {
        modalShow && (
          <CartModal open={modalShow} isOpen={setModalShow} />
        )
      }
      {/* Modal wishlisht*/}

      {
        isWishlistOpen && (
          <WishListModal open={isWishlistOpen} isOpen={setIsWishListOpen} />
        )
      }

    </div>
  )
}

export default Header