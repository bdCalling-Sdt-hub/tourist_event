'use client'
import Banner from '@/components/AuthorPage/Client/Banner'
import Featured from '@/components/DetailsPage/client/Featured';
import EventCard from '@/components/shared/EventCard';
import { useGetVendorProfileQuery } from '@/Redux/Apis/userApis';
import { useSearchParams } from 'next/navigation';
import React from 'react'

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
const AuthorPage = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id')
    const { data: vendorData } = useGetVendorProfileQuery(id)
    const vendor = vendorData?.data?.result as BusinessProfile
    const events = vendorData?.data?.events as Event[]
    const featured = vendorData?.data?.featured as Event[]
    return (
        <div className='container mx-auto'>
            <Banner vendor={vendor} />
            <p className='text-3xl mt-4'>Description:</p>
            <div dangerouslySetInnerHTML={{ __html: vendor?.description }}>

            </div>
            <h2 className='h2-black mb-5 mt-10'>Events</h2>

            <div className='grid-4 mt-10'>
                {events?.map((item: Event,) => (
                    <EventCard
                        item={item}
                        key={item?._id}
                    />
                ))}
            </div>
            <div className=' mt-4'>
                <Featured data={featured} />
            </div>
            {/* <SeeMoreButton /> */}

        </div>
    )
}

export default AuthorPage
