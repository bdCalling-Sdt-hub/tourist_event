'use client'
import SearchFields from '@/components/SearchPage/Client/SearchFields'
import EventCard from '@/components/shared/EventCard';
import { useGetEventsByCategoryQuery } from '@/Redux/Apis/eventApis';
import useUpdateSearchParams from '@/Utils/SetParams';
import { Pagination } from 'antd';
import { useSearchParams } from 'next/navigation';
import React from 'react'
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

const SearchPageClient = () => {
    const updateSearchParams = useUpdateSearchParams();
    const searchParams = useSearchParams();
    const search = searchParams.get('search')
    const category = searchParams.get('category')
    const option = searchParams.get('option')
    const date = searchParams.get('date')
    const { data: events } = useGetEventsByCategoryQuery({ category: category || '', option: option || '', date: date || '', searchTerm: search || '' })
    return (
        <div className='container mx-auto mt-6'>
            <div className='max-w-[600px] mx-auto'>
                <SearchFields />
            </div>
            <div className='grid-4 mt-10'>
                {events?.data?.result?.map((item: EventData,) => (
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
    )
}

export default SearchPageClient
