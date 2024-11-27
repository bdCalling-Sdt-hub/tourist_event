
import Profile from '@/components/ProfilePage/Client/Profile'
import React, { Suspense } from 'react'

const ProfilePage = () => {
    return (
        <div className='container mx-auto'>
            <Suspense fallback={``}>
                <Profile />
            </Suspense>
        </div>
    )
}

export default ProfilePage
