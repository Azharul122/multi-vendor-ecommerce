
import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../components/ui/Title'

const Login = () => {
    const required = {
        email: false,
        password: false
    }
    return (
        <div className='w-full h-screen flex justify-center items-center bg-white z-10'>
            <div className="shadow-[0_0_15px_rgba(0,0,0,0.25)] drop-shadow-xl max-w-[30rem] md:w-[23rem] sm:w-[20rem] w-full mx-auto p-3 z-50 bg-[rgba(255,255,255,0.7)]">
                {/* <div className="relative  w-max">
                    <p className="uppercase md:text-2xl text-xl  ">Login  <span className='absolute  right-0 -bottom-[2px] h-[1px] bg-green-700 w-[50px]'></span> </p>
                </div> */}
                <Title title='login'/>
                <form className='flex flex-col gap-4 pt-3'>
                    <div className="flex flex-col gap-1">
                        <p>Email</p>
                        {/* required */}
                        <div className="relative">
                            <input className='px-3 py-1 border focus:outline-gray-300  duration-500 w-full' type="email" placeholder='ex: example@email.com' />
                            {
                                required.email && (
                                    <div className="absolute text-red-500 -bottom-4 right-0 text-xs">
                                        this field is required
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p>Password</p>
                        {/* required */}
                        <div className="relative">
                            <input className='px-3 py-1 border focus:outline-gray-300  duration-500 w-full' type="password" placeholder='Password' />
                            {
                                required.password && (
                                    <div className="absolute text-red-500 -bottom-4 right-0 text-xs">
                                        this field is required
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <Link to={"/reset-password"} className='text-sm '>Forgotten password?  <span className='text-green-500'>Reset</span></Link>


                    <button className='border py-1' type="submit">Login</button>
                </form>
                <div className="mt-3">
                    <Link to={"/signup"} className='text-sm '>Dont't have account? <span className='text-green-500'>Create Now</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Login