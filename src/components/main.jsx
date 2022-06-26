import React from 'react'
import TypeAnimation from 'react-type-animation';
const Main = () => {
    return (
        <div className='text-white'>
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
                <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data</h1>
                <div>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'> Fast,flexible financing for </p>
                    {/* <TypeMe strings={['BTB BTC SASS']} typeSpeed={50} backspeed={50} loop/> */}
                    
                </div>
                <div>
                <TypeAnimation
                        className='text-xl md:text-2xl'
                        cursor={false}
                        sequence={['BTB BTC SASS', 1000, '']}
                        wrapper="h2"
                        repeat={Infinity}
                    />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your Data analytics to increase revenue for BTB BTC SASS </p>
                <button className='bg-[#00df9a] w-[200px] rounded-lg font-medium my-6 mx-autopy-3 text-black'>Get Started</button>
            </div>
        </div>
    )
}

export default Main