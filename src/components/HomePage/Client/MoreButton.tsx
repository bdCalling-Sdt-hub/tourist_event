'use client'
import { MoreButtonProps } from '@/InterFaces/Props'
import { useSaveEventClickMutation } from '@/Redux/Apis/eventApis'
import { useRouter } from 'next/navigation'
import React from 'react'

const MoreButton = ({ _id }: MoreButtonProps) => {
    const router = useRouter()
    const [saveClicked] = useSaveEventClickMutation()
    return (
        <div onClick={() => {
            saveClicked(_id)
            router.push(`/details/${_id}`)
        }} className='w-full h-full left-0 top-0 absolute cursor-pointer'>
        </div>
    )
}

export default MoreButton
