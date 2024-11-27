'use client'

import Banner from '@/components/DetailsPage/client/Banner'
import Map from '@/components/shared/Client/Map'
import { useGetEventByIdQuery } from '@/Redux/Apis/eventApis'
import { imageUrl } from '@/Utils/serverUrl'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'
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
                        <p className="uppercase text-gray">
                            {eventData?.vendor?.email || 'No email provided'}
                        </p>
                    </Link>
                </Link>
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
