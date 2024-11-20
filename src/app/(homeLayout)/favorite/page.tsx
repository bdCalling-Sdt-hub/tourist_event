import EventCard from '@/components/shared/EventCard'
import { Pagination } from 'antd';
import React from 'react'


const page = () => {
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
        <div className='container mx-auto mt-6'>
            <h2 className='h2-black mb-5'>Favorite Event</h2>
            <div className='grid-4'>
                {/* {data?.map((item, i) => (
                    <EventCard
                        item={item}
                        key={i}
                    />
                ))} */}
            </div>
            <div className='mt-3'>
                <Pagination />
            </div>
        </div>
    )
}

export default page
