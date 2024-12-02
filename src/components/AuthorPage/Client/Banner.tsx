'use client'
import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaLocationDot, FaTiktok } from 'react-icons/fa6'
import Link from 'next/link'

import { imageUrl } from '@/Utils/serverUrl'
import { BusinessProfile } from './AuthorPage'
interface Props {
    vendor: BusinessProfile
}
const Banner = ({ vendor }: Props) => {
    return (
        <div className='h-[400px] relative md:h-[600px] w-full rounded-md  mt-5 mb-12'>
            <Image src={imageUrl(vendor?.banner ?? "")} alt='banner' height={600} width={1200} className='img-cover rounded-md' />

            <Image src={imageUrl(vendor?.profile_image)} alt='banner' height={600} width={1200} unoptimized className='w-[130px] h-[130px] object-cover rounded-full absolute -bottom-8 left-10 border-2 bg-gray-400 p-2 border-white' />
        </div>
    )
}

export default Banner
