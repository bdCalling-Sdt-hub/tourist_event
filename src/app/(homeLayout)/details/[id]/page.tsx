import Banner from '@/components/DetailsPage/client/Banner'
import Map from '@/components/shared/Client/Map'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DetailsPage = () => {
    return (
        <div className='container mx-auto'>
            <Banner />
            <div>
                <Link href={`/details/author`} className='start-center gap-2 mt-4 cursor-pointer'>
                    <Image src={'https://i.ibb.co.com/bHTrR2R/blank-profile-picture-973460-1280.webp'} alt='image' height={600} width={600} className='h-14 w-14 rounded-full' unoptimized />
                    <div>
                        <p className='uppercase text-gray font-bold'>siyam</p>
                        <p className='uppercase text-gray'>siyamoffice0073@gmail.com</p>
                    </div>
                </Link>
                <p className='text-3xl mt-4'>Description:</p>
                <div className='text-gray'>
                    <strong>   Live Music at 5:00 PM</strong>
                    <br />
                    We would like to invite you to taste, discover, and learn about more than 60 premium whiskey brands and cocktails–the best of Bourbon, American, Irish, Scotch, Rye, Single Malt, and more as part of our WhiskyX event in Austin! We’ve curated an unprecedented selection of innovative and world-class whiskies.
                </div>
            </div>
            <div className='mt-10'>
                <Map />
            </div>
        </div>
    )
}

export default DetailsPage
