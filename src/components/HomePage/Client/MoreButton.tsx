'use client'
import { MoreButtonProps } from '@/InterFaces/Props'
import { useRouter } from 'next/navigation'
import React from 'react'

const MoreButton = ({ _id }: MoreButtonProps) => {
    const router = useRouter()
    return (
        <div onClick={() => router.push(`/details/${_id}`)} className='w-full h-full left-0 top-0 absolute cursor-pointer'>
        </div>
    )
}

export default MoreButton
