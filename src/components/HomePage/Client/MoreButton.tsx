'use client'
import { MoreButtonProps } from '@/InterFaces/Props'
import { useRouter } from 'next/navigation'
import React from 'react'

const MoreButton = ({ _id }: MoreButtonProps) => {
    const router = useRouter()
    return (
        <button onClick={() => router.push(`/details?${_id}`)} className='text-[var(--color-blue-500)] ml-auto block'>
            more...
        </button>
    )
}

export default MoreButton
