import Banner from '@/components/AuthorPage/Client/Banner'
import SeeMoreButton from '@/components/AuthorPage/Client/SeeMoreButton';
import Featured from '@/components/HomePage/Featured';
import EventCard from '@/components/shared/EventCard';
import React from 'react'

const AuthorPage = () => {
    const data = [
        {
            "image": "https://i.ibb.co/gZnsjn6/Block-Back-3.png",
            "category": "Restaurants",
            "location": "Costa Rica",
            "favorite": false,
            "description": "Popular restaurants and eateries in Costa Rica.",
            "name": "Costa Rica"
        },
        {
            "image": "https://i.ibb.co/NsjK7ZS/Block-Back-2.png",
            "category": "Beaches",
            "location": "Cancun",
            "favorite": true,
            "description": "Beautiful beach spots to visit in Cancun.",
            "name": "Mexico"
        },
        {
            "image": "https://i.ibb.co/vqjMH8w/Block-Back-1.png",
            "category": "Festivals",
            "location": "Ibiza",
            "favorite": false,
            "description": "Experience the vibrant festivals in Ibiza.",
            "name": "Spain"
        },
        {
            "image": "https://i.ibb.co/CVYtSkk/Block.png",
            "category": "Nightlife",
            "location": "Bangkok",
            "favorite": true,
            "description": "Enjoy the energetic nightlife in Bangkok.",
            "name": "Thailand"
        },
        {
            "image": "https://i.ibb.co/9pmdtnt/Block-Back.png",
            "category": "Hiking",
            "location": "Kathmandu",
            "favorite": false,
            "description": "Explore hiking trails around Kathmandu.",
            "name": "Nepal"
        },
        {
            "image": "https://i.ibb.co/gZnsjn6/Block-Back-3.png",
            "category": "Shopping",
            "location": "Dubai",
            "favorite": false,
            "description": "Top shopping destinations in Dubai.",
            "name": "UAE"
        },
        {
            "image": "https://i.ibb.co/NsjK7ZS/Block-Back-2.png",
            "category": "Museums",
            "location": "Paris",
            "favorite": true,
            "description": "Discover famous museums in Paris.",
            "name": "France"
        },
        {
            "image": "https://i.ibb.co/vqjMH8w/Block-Back-1.png",
            "category": "Food Festivals",
            "location": "Tokyo",
            "favorite": false,
            "description": "Taste delicious foods at festivals in Tokyo.",
            "name": "Japan"
        },
        {
            "image": "https://i.ibb.co/CVYtSkk/Block.png",
            "category": "Historic Sites",
            "location": "Rome",
            "favorite": true,
            "description": "Visit historic landmarks in Rome.",
            "name": "Italy2"
        },
        {
            "image": "https://i.ibb.co/9pmdtnt/Block-Back.png",
            "category": "Adventure Sports",
            "location": "Queenstown",
            "favorite": false,
            "description": "Engage in thrilling sports in Queenstown.",
            "name": "New Zealand2"
        },
        {
            "image": "https://i.ibb.co/CVYtSkk/Block.png",
            "category": "Historic Sites",
            "location": "Rome",
            "favorite": true,
            "description": "Visit historic landmarks in Rome.",
            "name": "Italy"
        },
        {
            "image": "https://i.ibb.co/9pmdtnt/Block-Back.png",
            "category": "Adventure Sports",
            "location": "Queenstown",
            "favorite": false,
            "description": "Engage in thrilling sports in Queenstown.",
            "name": "New Zealand"
        }
    ];
    return (
        <div className='container mx-auto'>
            <Banner />
            <p className='text-3xl mt-4'>Description:</p>
            <div className='text-gray'>
                <strong>   Live Music at 5:00 PM</strong>
                <br />
                We would like to invite you to taste, discover, and learn about more than 60 premium whiskey brands and cocktails–the best of Bourbon, American, Irish, Scotch, Rye, Single Malt, and more as part of our WhiskyX event in Austin! We’ve curated an unprecedented selection of innovative and world-class whiskies.
            </div>
            <h2 className='h2-black mb-5 mt-10'>This Author Events</h2>
            <div className='grid-4 mt-4'>
                {data?.map((item, i) => (
                    <EventCard
                        item={item}
                        key={i}
                    />
                ))}
            </div>
            <SeeMoreButton />
            <div className='mt-10'>
                <Featured />
            </div>
        </div>
    )
}

export default AuthorPage
