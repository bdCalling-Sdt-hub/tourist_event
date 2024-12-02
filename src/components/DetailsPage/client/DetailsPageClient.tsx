'use client'

import Banner from '@/components/DetailsPage/client/Banner'
import Map from '@/components/shared/Client/Map'
import { useGetEventByIdQuery } from '@/Redux/Apis/eventApis'
import { imageUrl } from '@/Utils/serverUrl'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'
import { FaCalendar, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import { FaEarthAfrica, FaLocationDot } from 'react-icons/fa6'
interface EventData {
    address: string,
    _id: string
    vendor: {
        profile_image: string,
        name: string,
        email: string,
        _id: string
    } | null
    name: string
    date: string // ISO date string
    end_date: string // ISO date string
    time: string
    duration: string
    category: {
        _id: string
        name: string
        __v: number
    }
    option: string[]
    social_media: {
        name: string
        link: string
        _id: string
    }[]
    location: {
        type: string
        coordinates: [number, number]
        _id: string
    }
    description: string
    event_image: string[]
    featured: boolean | null
    favorites: Number
    status: string
    createdAt: string
    updatedAt: string,
}


const DetailsPageClient = () => {
    const params = useParams()
    const id = params?.id as string
    const { data, isLoading, isError } = useGetEventByIdQuery(id)
    const eventData = data?.data as EventData
    return (
        <div className="container mx-auto">
            <Banner
                date={eventData?.date}
                end_date={eventData?.end_date}
                event_image={eventData?.event_image?.[0]}
                location={eventData?.address}
                name={eventData?.name}
                time={eventData?.time}
                social_media={eventData?.social_media}
            />
            <div>
                <Link
                    href={`/details/author`}
                    className="start-center gap-2 mt-4 cursor-pointer"
                >
                    <Image
                        src={imageUrl(eventData?.vendor?.profile_image || "")}
                        alt="Author Image"
                        height={600}
                        width={600}
                        className="h-14 w-14 rounded-full object-cover"
                    // unoptimized
                    />
                    <Link href={`/details/author?id=${eventData?.vendor?._id}`}>
                        <p className="uppercase text-gray font-bold">
                            {eventData?.vendor?.name || 'Unknown Author'}
                        </p>
                        {/* <p className="uppercase text-gray">
                            {eventData?.vendor?.email || 'No email provided'}
                        </p> */}
                    </Link>
                </Link>
                <div  className=' start-start flex-col gap-1 max-w-[600px]'>
                    {/* <p className='text-[var(--color-white)] text-lg md:text-xl lg:text-2xl'>Best Event in</p> */}
                    <p className='text-3xl mt-8'>{eventData?.name}</p>
                    <p style={{
                    }} className='text flex justify-start items-center gap-2'><FaLocationDot /> {eventData?.address}</p>
                    <p className='start-center bg-[var(--color-blue-500)] text-[var(--color-white)] w-fit p-1 px-4 mt-2 rounded-md gap-2'>
                        <FaCalendar /> {eventData?.date?.split('T')?.[0]} at {eventData?.time} to {eventData?.end_date?.split('T')?.[0]}
                    </p>
                    <div className='flex justify-start items-center gap-2 mt-2 text-white'>
                        {
                            eventData?.social_media ? Array.isArray(eventData?.social_media) ? eventData?.social_media?.map(item => <Link href={item?.link}>
                                {item?.name == 'facebook' ? < FaFacebook /> : item?.name == 'website' ? <FaEarthAfrica /> : item?.name == 'instagram' ? <FaInstagram /> : <FaTiktok />}
                            </Link>) : <Link href={eventData?.social_media}>
                                <FaEarthAfrica />
                            </Link> : <></>
                        }
                    </div>
                </div>
                <p className="text-3xl mt-4">Description:</p>
                <div className="text-gray">
                    <strong>{eventData?.name || 'Event Name Unavailable'}</strong>
                    <br />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: eventData?.description || '',
                        }}
                    ></div>
                </div>
            </div>
            <div className="mt-10">
                <Map location={eventData?.location} address={eventData?.address} />
            </div>
        </div >
    )
}

export default DetailsPageClient
