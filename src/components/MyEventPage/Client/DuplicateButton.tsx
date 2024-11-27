'use client'
import { MoreButtonProps } from '@/InterFaces/Props'
import { useDuplicateEventMutation } from '@/Redux/Apis/eventApis'
import { Modal } from 'antd'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { FaPlus } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'
const DuplicateButton = ({ _id }: MoreButtonProps) => {
    const [duplicateEvent] = useDuplicateEventMutation();
    return (
        <>
            <button onClick={() => {
                duplicateEvent(_id).unwrap()
                    .then(res => {
                        toast.success(res?.message || 'event duplicate successfully')
                    }).catch(err => {
                        toast.error(err?.data?.message || 'something went wrong')
                    })
            }} className='z-[9] text-[var(--color-white)] absolute top-1 right-11 bg-[var(--color-blue-500)] text-xl p-1 rounded-md'>
                <FaPlus />
            </button>
        </>
    )
}

export default DuplicateButton
