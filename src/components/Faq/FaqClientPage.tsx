'use client'
import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { useGetFaqsQuery } from '@/Redux/Apis/settingApis';


const FaqClientPage = () => {
    const { data } = useGetFaqsQuery(undefined)
    const items: CollapseProps['items'] = data?.data?.map((item: any) => ({
        key: item?._id,
        label: item?.questions,
        children: <p>{item?.answer}</p>,
    }))
    return (
        <div className=' container mx-auto'>
            <h3 className='text-3xl text-[var(--color-blue-900)] mt-10 mb-6'>FAQs</h3>
            <Collapse accordion items={items} />
        </div>
    )
}

export default FaqClientPage
