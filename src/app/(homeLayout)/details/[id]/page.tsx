import Banner from '@/components/DetailsPage/client/Banner'
import Map from '@/components/shared/Client/Map'
import React from 'react'

const DetailsPage = () => {
    return (
        <div className='container mx-auto'>
            <Banner />
            <div>
                <p className='text-3xl mt-4'>Description:</p>
                <div className='text-gray'>
                    <strong>   Live Music at 5:00 PM</strong>
                    <br />
                    We would like to invite you to taste, discover, and learn about more than 60 premium whiskey brands and cocktails–the best of Bourbon, American, Irish, Scotch, Rye, Single Malt, and more as part of our WhiskyX event in Austin! We’ve curated an unprecedented selection of innovative and world-class whiskies.
                </div>
            </div>
            <div className='mt-10'>
                <Map />
            </div>
        </div>
    )
}

export default DetailsPage
