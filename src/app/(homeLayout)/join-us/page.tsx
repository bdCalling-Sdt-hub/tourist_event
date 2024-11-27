'use client'
import VendorRequest from '@/components/JoinUsPage/Client/VendorRequest'
import { Suspense } from 'react'
const JoinRequestPage = () => {
    return (
        <div className='container mx-auto'>
            <Suspense fallback={<div>Loading...</div>}>
                <VendorRequest />
            </Suspense>
        </div>
    )
}

export default JoinRequestPage
