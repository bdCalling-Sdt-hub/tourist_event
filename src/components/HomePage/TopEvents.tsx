'use client'
import React from 'react';
import Link from 'next/link';
import EventCard from '../shared/EventCard';
import { useGetEventsByCategoryQuery, useGetPopularEventsQuery } from '@/Redux/Apis/eventApis';
import { useParams, useSearchParams } from 'next/navigation';
import { Pagination } from 'antd';
import useUpdateSearchParams from '@/Utils/SetParams';
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
const TopEvents = () => {
    const updateSearchParams = useUpdateSearchParams();
    const searchParams = useSearchParams();
    const category = searchParams.get('category')
    const option = searchParams.get('option')
    const date = searchParams.get('date')
    const { data: events } = useGetEventsByCategoryQuery({ category: category || '', option: option || '', date: date || '' })
    return (
        <div className='container mx-auto'>
            <h2 className='h2-black mb-5'>{`Event's`}</h2>
            <div className='grid-4'>
                {events?.data?.result?.map((item: EventData) => (
                    <EventCard
                        item={item}
                        key={item?._id}
                    />
                ))}
            </div>
            <div className='flex justify-center items-center mt-6'>
                <Pagination
                    pageSize={events?.data?.meta?.limit || 0}
                    onChange={(page) => updateSearchParams('page', page.toString())}
                    showSizeChanger={false}
                    total={events?.data?.meta?.total || 0}
                />
            </div>
        </div>
    );
};

export default TopEvents;
