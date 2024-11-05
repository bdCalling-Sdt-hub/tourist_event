import BillingHistory from '@/components/Subscription/Client/BillingHistory'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const SubscriptionPage = () => {
    const data = [
        {
            name: 'Free',
            price: '0',
            benefits: [
                'Free Business Profile',
                'Business Profile with description',
                'This Includes all features of Basic',
                'Unlimited event uploads/month.',
                'Business Profile with description'
            ]
        },
        {
            name: 'Basic',
            price: '20',
            benefits: [
                'Free Business Profile',
                'Business Profile with description',
                'This Includes all features of Basic',
                'Unlimited event uploads/month.',
                'Business Profile with description'
            ]
        },
        {
            name: 'Value',
            price: '50',
            benefits: [
                'Free Business Profile',
                'Business Profile with description',
                'This Includes all features of Basic',
                'Unlimited event uploads/month.',
                'Business Profile with description'
            ]
        },
        {
            name: 'Premium',
            price: '60',
            benefits: [
                'Free Business Profile',
                'Business Profile with description',
                'This Includes all features of Basic',
                'Unlimited event uploads/month.',
                'Business Profile with description'
            ]
        },
    ]
    return (
        <div className='container mx-auto mt-6'>
            <BillingHistory />
            <h2 className='h3-black'>Subscription Packages</h2>
            <div className='grid-4 gap-4 mt-6'>
                {
                    data?.map(item => <div className='w-full h-full between-center gap-4 flex-col p-4 py-8 card-shadow bg-[var(--color-blue-200)] rounded-md' key={item?.name}>
                        <div className='text-center'>
                            <h3 className='h3-black'>{item?.name}</h3>
                            <p className='text-lg'>{item?.price}</p>
                            {
                                item?.benefits?.map(b => <p key={b} className='start-center gap-2 my-3'><FaCheck /> {b}</p>)
                            }
                        </div>
                        <button className='button-blue' style={{
                            width: '100%'
                        }}>
                            Buy
                        </button>
                    </div>)
                }
            </div>
        </div>
    )
}

export default SubscriptionPage
