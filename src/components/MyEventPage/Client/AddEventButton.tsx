'use client'
import { Modal } from 'antd'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import EventAddEditForm from './EventAddEditForm'

const AddEventButton = () => {
    const [open, setOpen] = useState<boolean>(false)
    const closeModal = () => {
        setOpen(false)
    }
    return (
        <>
            <button onClick={() => setOpen(true)} className='button-blue'>
                <FaPlus /> Add Event
            </button>
            <Modal
                open={open}
                centered
                onCancel={() => setOpen(false)}
                footer={false}
                width={800}
            >
                <EventAddEditForm selectedData={null} closeModal={() => closeModal()} />
            </Modal>
        </>
    )
}

export default AddEventButton
