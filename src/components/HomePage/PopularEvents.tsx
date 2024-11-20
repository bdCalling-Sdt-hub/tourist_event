'use client'
import React from 'react';
import Link from 'next/link';
import EventCard from '../shared/EventCard';
import { useGetPopularEventsQuery } from '@/Redux/Apis/eventApis';
export interface EventData {
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
const PopularEvents = () => {
    const { data: events } = useGetPopularEventsQuery(undefined)
    return (
        <div className='container mx-auto'>
            <h2 className='h2-black mb-5'>Popular Event</h2>
            <div className='grid-4'>
                {events?.data?.result?.map((item: EventData) => (
                    <EventCard
                        item={item}
                        key={item?._id}
                    />
                ))}
            </div>
            {/* <Link href={'/'} className='button-blue whitespace-nowrap mx-auto mt-6'>
                View All
            </Link> */}
        </div>
    );
};

export default PopularEvents
