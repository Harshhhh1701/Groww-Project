import React from 'react'
import TypeAnimation from 'react-type-animation';
const Main = () => {
    return (
        <div className='text-white'>
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data</h1>
                <div>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'> Fast,flexible financing for </p>
                    {/* <TypeMe strings={['BTB BTC SASS']} typeSpeed={50} backspeed={50} loop/> */}
                    <TypeAnimation
                        cursor={false}
                        sequence={['BTB BTC SASS', 1000, '']}
                        wrapper="h2"
                        repeat={Infinity}
                    />
                </div>

            </div>
        </div>
    )
}

export default Main