import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center bg-white'>
            <div className="shadow-[0_0_15px_rgba(0,0,0,0.25)] drop-shadow-xl max-w-[30rem] mx-auto p-3">
                <form className='flex flex-col gap-4'>
                    <div className="flex flex-col gap-1">
                        <p>Enail</p>
                        <input className='px-3 py-1 border focus:outline-gray-300  duration-500 ' type="email" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p>Password</p>
                        <input className='px-3 py-1 border focus:outline-gray-300  duration-500 ' type="password" />
                    </div>

                    <Link to={"/reset-password"} className='text-sm '>Forgotten password?  <span className='text-green-500'>Reset</span></Link>


                    <button className='border py-1' type="submit">Submit</button>
                </form>
                <div className="mt-3">
                    <Link to={"/signup"} className='text-sm '>Dont't have account? <span className='text-green-500'>Create Now</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Login