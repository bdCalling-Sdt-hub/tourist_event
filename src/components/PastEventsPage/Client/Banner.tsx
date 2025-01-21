import Image from 'next/image'
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'

const Banner = () => {
    return (
            <div className='h-[400px] relative md:h-[600px] w-full rounded-md overflow-hidden mt-5'>
                <Image src={`https://i.ibb.co.com/KV2J5zx/Frame-1-3-min-1-3.png`} alt='banner' height={600} width={1200} unoptimized className='img-cover' />
                <div className='absolute top-[50%] translate-y-[-50%] left-8 start-start flex-col gap-1 max-w-[600px]'>
                    <p className='text-[var(--color-white)] text-lg md:text-xl lg:text-2xl'>Best Event in</p>
                    <p className='h1-white'>Costa Rica</p>
                    <p style={{
                        color: 'var(--color-white)'
                    }} className='text'>Looking  for something to do Costa Rica ? Whether you're a local , new
                        in town or just cruising through we’ve got loads of great tips and events. You
                        can explore by location ,what’s popular, our top ticket, free pro user...you got.</p>
                    <p className='start-center bg-[var(--color-blue-500)] text-[var(--color-white)] w-fit p-1 px-4 mt-2 rounded-md gap-2'>
                        <FaLocationDot /> Costa Rica
                    </p>
                </div>
            </div>
    )
}

export default Banner
