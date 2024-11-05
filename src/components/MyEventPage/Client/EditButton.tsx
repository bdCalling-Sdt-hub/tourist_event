'use client'
import { EventCardProps } from '@/InterFaces/Props'
import { Modal } from 'antd'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { MdEdit } from 'react-icons/md'
import EventAddEditForm from './EventAddEditForm'

const EditButton = ({ item }: EventCardProps) => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <>
            <button onClick={()=>setOpen(true)} className='text-[var(--color-blue-500)] absolute top-1 right-1 bg-[var(--color-white)] text-xl p-1 rounded-md'>
                <MdEdit />
            </button>
            <Modal
                open={open}
                centered
                onCancel={() => setOpen(false)}
                footer={false}
                width={800}
            >
                <EventAddEditForm />
            </Modal>
        </>
    )
}

export default EditButton
