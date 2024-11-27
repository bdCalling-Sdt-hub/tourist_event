'use client'
import BillingHistory from '@/components/Subscription/Client/BillingHistory'
import { useGetPackagesQuery } from '@/Redux/Apis/packageApis'
import { useCreatePaymentIntentMutation } from '@/Redux/Apis/paymentApis'
import React, { Suspense } from 'react'
import toast from 'react-hot-toast'
import { FaCheck } from 'react-icons/fa'

const SubscriptionHome = () => {
    const [pay, { isLoading }] = useCreatePaymentIntentMutation()
    const { data: packages } = useGetPackagesQuery(undefined)
    return (
        <div className='container mx-auto mt-6'>
            <BillingHistory />
            <h2 className='h3-black'>Subscription Packages</h2>
            <div className='grid-4 gap-4 mt-6'>
                {
                    packages?.data?.packages && packages?.data?.packages?.map((item: any) => <div
                        style={{
                            background: packages?.data?.userplan == item?._id ? 'var(--color-blue-300)' : 'var(--color-blue-200)'
                        }}
                        className='w-full h-full between-center gap-4 flex-col p-4 py-8 card-shadow rounded-md' key={item?.name}>
                        <div className='text-center'>
                            <h3 className='h3-black'>{item?.name}</h3>
                            <p className='text-lg'>{item?.price}</p>
                            {
                                // packages?.
                            }
                            <p className='start-center gap-2 my-3'><FaCheck /> Business Name & Image </p>

                            {item?.contactInfoLocation && (
                                <p className='start-center gap-2 my-3'><FaCheck /> Contact Info & Location </p>
                            )}

                            {Number(item?.eventsOrSpecials) > 1 && (
                                <p className='start-center gap-2 my-3'><FaCheck /> {Number(item?.eventsOrSpecials) >= 5000 ? "Unlimited Events" : `${item?.eventsOrSpecials} Events/Specials`}  </p>
                            )}

                            {Number(item?.featuredEvents) > 1 && (
                                <p className='start-center gap-2 my-3'><FaCheck /> {item?.featuredEvents} Featured Events </p>
                            )}

                        </div>
                        <button onClick={() => {
                            if (item?.price == 0) return
                            pay(item?._id).unwrap()
                                .then(res => {
                                    window.location.href = res?.data?.url
                                }).catch(err => {
                                    toast.error(err?.data?.message)
                                })
                        }} className='button-blue' style={{
                            width: '100%'
                        }}>
                            {
                                packages?.data?.userplan == item?._id ? 'Current Package' : item?.price == 0 ? 'Free' : 'Buy'
                            }
                        </button>
                    </div>)
                }
            </div>
        </div>
    )
}

export default SubscriptionHome
