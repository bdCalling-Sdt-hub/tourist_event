'use client'

import React, { Suspense } from 'react'
import Banner from '@/components/AuthorPage/Client/Banner'
import Featured from '@/components/DetailsPage/client/Featured'
import EventCard from '@/components/shared/EventCard'
import { useGetVendorProfileQuery } from '@/Redux/Apis/userApis'
import { useSearchParams } from 'next/navigation'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'lucide-react'
import { FaFacebook, FaGoogle, FaInstagram, FaTiktok } from 'react-icons/fa'

interface LocationMap {
    type: string;
    coordinates: [number, number];
    _id: string;
}

interface Category {
    _id: string;
    name: string;
}

export interface BusinessProfile {
    _id: string;
    business_name: string;
    address: string;
    description: string;
    banner: string;
    profile_image: string;
    location_map: LocationMap;
    social_media: [
        {
            link: string,
            name: string,
            _id: string,
        }
    ] | null;
}

export interface Event {
    category: {
        name: string,
        _id: string,
    }
    date: string;
    event_image: string[];
    name: string;
    _id: string;
    address: string
}


const AuthorPageClient = () => {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    const { data: vendorData } = useGetVendorProfileQuery(id)
    const vendor = vendorData?.data?.result as BusinessProfile
    const events = vendorData?.data?.events as Event[]
    const featured = vendorData?.data?.featured as Event[]

    if (!vendorData) {
        return <div>Loading...</div>
    }

    return (
        <div className='container mx-auto'>
                <Banner vendor={vendor} />
                <div className=' start-start flex-col gap-1 max-w-[600px]'>
                {/* <p className='text-[var(--color-white)] text-lg md:text-xl lg:text-2xl'>Best Event in</p> */}
                <p className='text-3xl my-2 '>{vendor?.business_name}</p>
                {/* <p style={{
                    color: 'var(--color-white)'
                }} className='text'>Looking  for something to do Costa Rica ? Whether you're a local , new
                    in town or just cruising through we’ve got loads of great tips and events. You
                    can explore by location ,what’s popular, our top ticket, free pro user...you got.</p> */}
                <p className='start-center bg-[var(--color-blue-500)] text-[var(--color-white)] w-fit p-1 px-4  rounded-md gap-2'>
                    <FaLocationDot /> {vendor?.address}
                </p>
                <div className='flex justify-start items-center gap-2 mt-3'>
                    {//Website TikTok Instagram Facebook
                        vendor?.social_media?.map(item => <>
                            {
                                item?.name === 'Facebook' ?
                                    <Link key={item?._id} className='text-[var(--color-white)] bg-[var(--color-blue-500)] p-2 rounded-full' href={item?.link}>
                                        <FaFacebook size={20} />
                                    </Link> : item?.name === 'Website' ?
                                        <Link key={item?._id} className='text-[var(--color-white)] bg-[var(--color-blue-500)] p-2 rounded-full' href={item?.link}>
                                            <FaGoogle size={20} />
                                        </Link> : item?.name === 'Instagram' ?
                                            <Link key={item?._id} className='text-[var(--color-white)] bg-[var(--color-blue-500)] p-2 rounded-full' href={item?.link}>
                                                <FaInstagram size={20} />
                                            </Link> :
                                            <Link key={item?._id} className='text-[var(--color-white)] bg-[var(--color-blue-500)] p-2 rounded-full' href={item?.link}>
                                                <FaTiktok size={20} />
                                            </Link>
                            }
                        </>)
                    }

                </div>
            </div>
                <p className='text-3xl mt-4'>Description:</p>
                <div dangerouslySetInnerHTML={{ __html: vendor?.description }}></div>
                <h2 className='h2-black mb-5 mt-10'>Events</h2>

                <div className='grid-4 mt-10'>
                    {events?.map((item: Event) => (
                        <EventCard item={item} key={item?._id} />
                    ))}
                </div>

                <div className='mt-4'>
                    <Featured data={featured} />
                </div>
        </div>
    )
}

export default AuthorPageClient
