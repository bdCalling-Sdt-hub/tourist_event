// TopEvents.tsx
import Image from 'next/image';
import React from 'react';
import { FaLayerGroup } from 'react-icons/fa';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import FavoriteButton from './Client/FavoriteButton';
import { FaLocationDot } from 'react-icons/fa6';
import Link from 'next/link';

const TopEvents = () => {
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
            "name": "Italy"
        },
        {
            "image": "https://i.ibb.co/9pmdtnt/Block-Back.png",
            "category": "Adventure Sports",
            "location": "Queenstown",
            "favorite": false,
            "description": "Engage in thrilling sports in Queenstown.",
            "name": "New Zealand"
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
            <h2 className='h2-black mb-5'>Top Event</h2>
            <div className='grid-4'>
                {data?.map((item, i) => (
                    <Link href={`/details/${item?.name}`} className='w-full h-full bg-[var(--color-white)] card-shadow rounded-md' key={i}>
                        <div className='w-full h-[300px] rounded-md overflow-hidden'>
                            <Image src={item?.image} alt='image' height={600} width={600} className='img-cover' unoptimized />
                        </div>
                        <div className='p-3 relative text-gray'>
                            <FavoriteButton
                                icon={item?.favorite ? <MdFavorite /> : <MdFavoriteBorder />}
                                favorite={item?.favorite}
                                _id={null}
                            />
                            <span className='start-center gap-3 '>
                                <FaLayerGroup />
                                {item?.category}
                            </span>
                            <p className='mt-1'>{item?.name}</p>
                            <hr className='w-full h-[1px] my-2' />
                            <span className='start-center gap-3 '>
                                <FaLocationDot className='text-[var(--color-blue-500)]' />
                                {item?.location}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
            <Link href={'/'} className='button-blue whitespace-nowrap mx-auto mt-6'>
                View All
            </Link>
        </div>
    );
};

export default TopEvents;