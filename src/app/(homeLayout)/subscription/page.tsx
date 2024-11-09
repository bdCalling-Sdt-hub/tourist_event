import BillingHistory from '@/components/Subscription/Client/BillingHistory'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const SubscriptionPage = () => {
    const data = [
        {
            name: 'Free',
            price: '$0',
            benefits: [
                'Business Name & Image',
            ]
        },
        {
            name: 'Basic',
            price: '$15',
            benefits: [
                'Business Name & Image',
                '3 Events/Specials',
                'Contact Info & Location',
                'Social Media & Website Link',
            ]
        },
        {
            name: 'Value',
            price: '$45',
            benefits: [
                'Business Name & Image',
                '10 Monthly Events/Specials',
                '2 Featured Events',
                'Contact Info & Location',
                'Social Media & Website Link',
            ]
        },
        {
            name: 'Premium',
            price: '$100',
            benefits: [
                'Business Name & Image',
                'Unlimited Events',
                '5 Featured Events',
                'Contact Info & Location',
                'Social Media & Website Links',
            ]
        },
    ];

    return (
        <div className='container mx-auto mt-6'>
            <BillingHistory />
            <h2 className='h3-black'>Subscription Packages</h2>
            <div className='grid-4 gap-4 mt-6'>
                {
                    data?.map(item => <div
                        style={{
                            background: item?.name == 'Basic' ? 'var(--color-blue-300)' : 'var(--color-blue-200)'
                        }}
                        className='w-full h-full between-center gap-4 flex-col p-4 py-8 card-shadow rounded-md' key={item?.name}>
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
                            {
                                item?.name == 'Basic' ? 'Current Package' : 'Buy'
                            }
                        </button>
                    </div>)
                }
            </div>
        </div>
    )
}

export default SubscriptionPage
