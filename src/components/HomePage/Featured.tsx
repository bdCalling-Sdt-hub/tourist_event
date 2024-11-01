import { Carousel } from 'antd'
import Image from 'next/image'
import React from 'react'
import { FaLayerGroup } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import MoreButton from './Client/MoreButton'

const Featured = () => {
    const images = [
        "https://i.ibb.co/gZnsjn6/Block-Back-3.png",
        "https://i.ibb.co/NsjK7ZS/Block-Back-2.png",
        "https://i.ibb.co/vqjMH8w/Block-Back-1.png"
    ]
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
            <h2 className='h2-black mb-5'>FEATURED</h2>
            <div className='md:grid grid-cols-3 gap-16'>
                <div className='col-span-2'>
                    <Carousel
                        autoplay
                        autoplaySpeed={2000}
                    >
                        {
                            images?.map(item => <div className='w-full h-[600px]' key={item}>
                                <Image src={item} height={1800} width={2000} className='img-cover' alt='featured' unoptimized />
                            </div>)
                        }
                    </Carousel>
                </div>
                <div className='start-start gap-2 flex-col w-full h-[600px] overflow-y-scroll'>
                    {

                        data?.map(item => <div className='start-start p-2 gap-2 bg-[var(--color-blue-200)] rounded-md w-full' key={item?.name}>
                            <Image src={item?.image} className='h-20 w-20 rounded' alt='featured' unoptimized height={300} width={300} />
                            <div className='p-3 text w-full'>
                                <p className='mb-1'>{item?.name}</p>
                                <span className='start-center gap-1 '>
                                    <FaLocationDot className='text-[var(--color-blue-500)]' />
                                    {item?.location}
                                </span>
                            <MoreButton _id={''} />
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>

    )
}

export default Featured
