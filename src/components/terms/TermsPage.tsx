'use client'
import { useGetTermsQuery } from '@/Redux/Apis/settingApis'
import React from 'react'

const TermsPageClient = () => {
    const { data } = useGetTermsQuery(undefined)
    const description = data?.data?.description;
    return (
        <div className='container mx-auto mt-10'>
            {description && (
                <div
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            )}
        </div>
    )
}

export default TermsPageClient
