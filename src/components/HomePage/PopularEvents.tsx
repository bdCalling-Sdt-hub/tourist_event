'use client'
import React from 'react';
import EventCard from '../shared/EventCard';
import { useGetEventsByCategoryQuery } from '@/Redux/Apis/eventApis';
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
    // console.log()
    const { data: events } = useGetEventsByCategoryQuery({ category: '6746967ea29a6822d7fa1e5a' })
    return (
        <div className='container mx-auto'>
            <h2 className='h2-black mb-5'>Promotions</h2>
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
