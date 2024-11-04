'use client'
import useUpdateSearchParams from '@/Utils/SetParams'
import React from 'react'

const SeeMoreButton = () => {
    const updateSearchParams = useUpdateSearchParams()
    return <button onClick={() => {
        if (typeof window !== "undefined") {
            const currentParams = new URLSearchParams(window.location.search);
            updateSearchParams('limit', currentParams.get('limit') ? `${Number(currentParams.get('limit')) + 10}` : '10')
        }
    }} className='button-blue whitespace-nowrap mx-auto mt-6'>
        See More
    </button>
}

export default SeeMoreButton
