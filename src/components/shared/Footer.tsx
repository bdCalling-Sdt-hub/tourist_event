import React from 'react'
import logo from '@/Asset/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import ContactsButton from './Client/ContactsButton'
import LanguageChange from './Client/LanguageChange'
const Footer = () => {
    return (
        <div className='bg-blue-900 p-3 py-10 mt-24'>
            <div style={{
                justifyContent: 'start',
                alignItems: 'start'
            }} className='grid-3 container mx-auto'>
                <div className='w-full start-start flex-col gap-2'>
                    <Image src={logo} height={100} width={200} alt='logo' unoptimized />
                    <p style={{
                        color:'var(--color-white)'
                    }} className='text-gray'>
                        From St. Mark's Church, 50m to the west and 100m to the north, gray colored house San José, San José, Desamparados 30508 - Costa Rica
                    </p>
                    <p style={{
                        color:'var(--color-white)'
                    }} className='text-gray'>Phone: (405) 555-0128</p>
                    <p style={{
                        color:'var(--color-white)'
                    }} className='text-gray'>Mail: Matt@gmail.com</p>
                </div>
                <div className='w-full start-start flex-col gap-2'>
                    <h4>Support</h4>
                    <Link href={`/about`}>
                        About Us
                    </Link>
                    <Link href={`/privacy`}>
                        Terms and Conditions
                    </Link>
                    <Link href={`/terms`}>
                        Privacy Policy
                    </Link>
                    <Link href={``}>
                        FAQs
                    </Link>
                </div>
                <div className='w-full start-start flex-col gap-2'>
                    <ContactsButton />
                    <LanguageChange />
                </div>
            </div>
        </div>
    )
}

export default Footer