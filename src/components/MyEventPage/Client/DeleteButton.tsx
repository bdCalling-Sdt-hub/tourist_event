'use client'
import { MoreButtonProps } from '@/InterFaces/Props'
import { useDeleteEventMutation } from '@/Redux/Apis/eventApis'
import React from 'react'
import toast from 'react-hot-toast'
import { MdDelete } from 'react-icons/md'

const DeleteButton = ({ _id }: MoreButtonProps) => {
    const [deleteEvent] = useDeleteEventMutation()
    return (
        <button onClick={() => {
            deleteEvent(_id).unwrap().then(res => {
                toast.success(res?.message || 'Event Deleted')
            }).catch(err => {
                toast.success(err?.data?.message || 'something went wrong')
            })
        }} className='z-[9] text-[var(--color-white)] absolute top-1 right-20 bg-[var(--color-red-500)] text-xl p-1 rounded-md'>
            <MdDelete />
        </button>
    )
}


export default DeleteButton
