'use client'
import { MoreButtonProps } from '@/InterFaces/Props'
import React from 'react'
import { MdDelete } from 'react-icons/md'

const DeleteButton = ({ _id }: MoreButtonProps) => {
    return (
        <button className='text-[var(--color-white)] absolute top-1 right-10 bg-[var(--color-red-500)] text-xl p-1 rounded-md'>
            <MdDelete />
        </button>
    )
}


export default DeleteButton
