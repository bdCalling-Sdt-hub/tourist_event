"use client"
import { Popover } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaFilter } from 'react-icons/fa';

const TodaysEvent = () => {
    const router = useRouter()
    const Options = [
        { name: "LIVE MUSIC", value: 'LIVE MUSIC' },
        { name: "COMEDY", value: 'COMEDY' },
        { name: "Outdoor Activites", value: 'Outdoor Activites' },
        { name: "Arts &Culture", value: 'Arts &Culture' },
        { name: "RESTAURANT", value: 'RESTAURANT' },
    ]
    const updateSearchParams = (key: string, value: string) => {
        const currentParams = new URLSearchParams(window.location.search);
        currentParams.set(key, value);
        router.replace(`?${currentParams.toString()}`, { scroll: false });
    };
    const content = (
        <div className='bg-blue-900 p-2 rounded-sm flex flex-col gap-1'>
            {
                Options?.map(item => <button onClick={() => updateSearchParams('test', item?.name)} className='hover:bg-[var(--color-blue-500)]' key={item?.name}>
                    {item?.name}
                </button>)
            }
        </div>
    );

    return (
        <div className="bg-blue-900 px-2 md:py-6 py-4 mt-5 w-full">
            <div className="between-center gap-2 container mx-auto">
                <p className="h2-white">Today's EVENT IN Costa Rica</p>
                <Popover placement="bottom" title="" content={content}>
                    <button className='button-blue whitespace-nowrap'>
                        <FaFilter />  All Event
                    </button>
                </Popover>
            </div>
        </div>
    );
};

export default TodaysEvent;