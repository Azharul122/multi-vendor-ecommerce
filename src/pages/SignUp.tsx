import { LiaGithub, LiaGoogle } from "react-icons/lia"
import { Link } from "react-router-dom"


const SignUp = () => {
  const required = false
  return (
    <div className='w-full h-screen flex justify-center items-center bg-[url(https://images.pexels.com/photos/950241/pexels-photo-950241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] z-10'>
      <div className="shadow-[0_0_15px_rgba(0,0,0,0.25)] drop-shadow-xl max-w-[30rem] md:w-[23rem] sm:w-[20rem] w-full mx-auto p-3 z-50 bg-[rgba(255,255,255,0.7)]">
        <div className="relative  w-max">
          <p className="uppercase md:text-2xl text-xl  ">Signup  <span className='absolute  right-0 -bottom-[2px] h-[1px] bg-green-700 w-[50px]'></span> </p>
        </div>
        <form className='flex flex-col gap-4 pt-3 '>
          {/* 1st row */}
          <div className="grid grid-cols-2 gap-2 items-center w-full">
            {/* name */}
            <div className="flex flex-col gap-1 w-auto">
              <p>Name</p>
              {/* required */}

              <div className="relative">
                <input className='px-3 py-1 border focus:outline-gray-300  duration-500 w-full text-sm' type="text" placeholder='ex: John Doe' />
                {
                  required && (
                    <div className="absolute text-red-500 -bottom-4 right-0 text-xs">
                      this field is required
                    </div>
                  )}
              </div>

            </div>
            {/* email */}
            <div className="flex flex-col gap-1 w-auto">
              <p>Email</p>
              {/* required */}

              <div className="relative">
                <input className='px-3 py-1 border focus:outline-gray-300  duration-500 w-full text-sm' type="email" placeholder='ex: example@email.com' />
                {
                  required && (
                    <div className="absolute text-red-500 -bottom-4 right-0 text-xs">
                      this field is required
                    </div>
                  )}
              </div>

            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-2">
            <div className="flex flex-col gap-1">
              <p>Password</p>
              {/* required */}

              <div className="relative">
                <input className='px-3 py-1 border focus:outline-gray-300  duration-500 w-full text-sm' type="password" placeholder='Password' />
                {
                  required && (
                    <div className="absolute text-red-500 -bottom-4 right-0 text-xs">
                      this field is required
                    </div>
                  )}
              </div>

            </div>
            <div className="flex flex-col gap-1">
              <p>Confirm Password</p>
              {/* required */}

              <div className="relative">
                <input className='px-3 py-1 border focus:outline-gray-300  duration-500 w-full text-sm' type="password" placeholder='Confirm Password .....' />
                {
                  required && (
                    <div className="absolute text-red-500 -bottom-4 right-0 text-xs">
                      this field is required
                    </div>
                  )}
              </div>

            </div>

          </div>
          <Link to={"/reset-password"} className='text-sm '>Forgotten password?  <span className='text-green-500'>Reset</span></Link>
          <button className='border py-1' type="submit">Sign Up</button>
          <div className="">
            <div className="w-full border relative"><div className="absolute bg-transparent top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2">OR</div></div>

          </div>

          {/*  */}
          <div className="grid grid-cols-2 items-center gap-2">
            <button className="text-center mx-auto text-xl">
              <div className="size-[2rem] rounded-full border flex justify-center items-center">
                <LiaGoogle />
              </div>
            </button>
            <button className="text-center mx-auto text-xl">
              <div className="size-[2rem] rounded-full border flex justify-center items-center">

                <LiaGithub className="text-center mx-auto text-xl" />
              </div>
            </button>
          </div>
        </form>
        <div className="mt-3">
          <Link to={"/login"} className='text-sm '>Already have account? <span className='text-green-500'>Login Now</span></Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp