import { Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import FavoriteButton from '../HomePage/Client/FavoriteButton'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { FaLayerGroup } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { EventCardProps } from '@/InterFaces/Props'
import MoreButton from '../HomePage/Client/MoreButton'

const EventCard = ({ item }: EventCardProps) => {
    return (
        <div className='w-full h-full bg-[var(--color-white)] card-shadow rounded-md'>
            <div className='w-full h-[300px] rounded-md overflow-hidden'>
                <Image src={item?.image} alt='image' height={600} width={600} className='img-cover' unoptimized />
            </div>
            <div className='p-3 relative text-gray'>
                {/* <FavoriteButton
                    icon={item?.favorite ? <MdFavorite /> : <MdFavoriteBorder />}
                    favorite={item?.favorite}
                    _id={null}
                /> */}
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
            <MoreButton _id={'52448241'} />
        </div>
    )

}

export default EventCard
