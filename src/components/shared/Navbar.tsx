'use client'
import logo from '@/Asset/logo.png'
import Image from 'next/image'
import * as React from "react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { MdDateRange, MdFavoriteBorder, MdOutlinePlaylistAddCheck, MdOutlineStorefront } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import Link from 'next/link'
import { FaList, FaSearch } from 'react-icons/fa'
import { RiMenuUnfold2Fill } from 'react-icons/ri'
import { Drawer } from 'antd'
import Headroom from "react-headroom";
import { useRouter } from 'next/navigation'
import { CiCalendar, CiUser } from 'react-icons/ci'
import { IoIosLogOut } from 'react-icons/io'
import { CgWebsite } from 'react-icons/cg'
import { useUser } from '@/Provider/UserContext'
const Navbar = () => {
    const { user: data, } = useUser()
    const [date, setDate] = React.useState<Date>()
    const [open, setOpen] = React.useState<boolean | undefined>(false);
    const router = useRouter()
    return (
        <Headroom>
            <div className='bg-blue-900 px-2 md:py-2'>
                <div className='container mx-auto between-center'>
                    <div className='start-center  gap-6 '>
                        <Image onClick={() => router.push('/')} className='md:block hidden cursor-pointer w-28' src={logo} height={200} width={200} alt='logo' />
                        <Image onClick={() => router.push('/')} className='md:hidden block w-12 cursor-pointer' src={logo} height={400} width={600} alt='logo' />
                        <Popover>
                            <PopoverTrigger asChild>
                                <button
                                    className={`button-blue `}
                                >
                                    {date ? <div className='start-center gap-2'>{format(date, "PPP")}<RxCross2 onClick={() => setDate(undefined)} size={24} className='text-[var(--color-red-500)]' /> </div> : <>Event< MdDateRange /></>}
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className='end-center gap-2 '>
                        <Link className='md:block hidden' href={`/search`}>
                            <FaSearch size={24} />
                        </Link>
                        <Link className='md:block hidden' href={`/past-event`}>
                            <FaList size={24} />
                        </Link>
                        {/* @ts-ignore */}
                        {
                            data?.data?.authId?.email && <Popover>
                                <PopoverTrigger asChild>
                                    <button>
                                        <Image src={`https://i.ibb.co.com/bHTrR2R/blank-profile-picture-973460-1280.webp`} height={40} width={40} className='h-10 w-10 rounded-full' unoptimized alt='profile' />
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <div className='rounded-md p-2 bg-[var(--color-white)] min-w-[300px] max-w-[500px] w-full'>
                                        <div style={{
                                            background: 'url(https://i.ibb.co.com/MVcwBWm/1600w-1-NYTq34-QR6-I.webp)'
                                        }} className='w-full h-[100px] bg-cover bg-no-repeat rounded-md relative'>
                                            <Image src={`https://i.ibb.co.com/bHTrR2R/blank-profile-picture-973460-1280.webp`} height={140} width={140} className='h-24 w-24 absolute left-[50%] translate-x-[-50%] -bottom-6 rounded-full' unoptimized alt='profile' />
                                        </div>
                                        <div className='mt-4 p-4'>
                                            <Link href={`/profile`} className='start-center gap-2 hover:bg-[var(--color-blue-200)] p-2 rounded-md'>
                                                <CiUser size={20} /> Profile
                                            </Link>
                                            {/* <Link href={`/favorite`} className='start-center gap-2 hover:bg-[var(--color-blue-200)] p-2 rounded-md'>
                                            <MdFavoriteBorder size={20} />Favorites
                                        </Link> */}
                                            {
                                                data?.data?.authId?.role !== 'USER' && <>
                                                    <Link href={`/details/author`} className='start-center gap-2 hover:bg-[var(--color-blue-200)] p-2 rounded-md'>
                                                        <CgWebsite size={20} />My Landing Page
                                                    </Link>
                                                    <Link href={`/my-event`} className='start-center gap-2 hover:bg-[var(--color-blue-200)] p-2 rounded-md'>
                                                        <CiCalendar size={20} /> My Event
                                                    </Link>
                                                    <Link href={`/subscription`} className='start-center gap-2 hover:bg-[var(--color-blue-200)] p-2 rounded-md'>
                                                        <MdOutlinePlaylistAddCheck size={20} />My subscription
                                                    </Link>
                                                </>
                                            }

                                            {
                                                data?.data?.authId?.role === 'USER' && <Link href={`/join-us`} className='start-center gap-2 hover:bg-[var(--color-blue-200)] p-2 rounded-md w-full'>
                                                    <MdOutlineStorefront size={20} />Become a vendor
                                                </Link>
                                            }

                                            <button className='start-center gap-2 hover:bg-[var(--color-red-500)] hover:text-[var(--color-white)] p-2 rounded-md w-full'>
                                                <IoIosLogOut size={20} /> Sign Out
                                            </button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        }


                        <div className='md:block hidden'>
                            <DowerLinks />
                        </div>
                        <RiMenuUnfold2Fill
                            onClick={() => setOpen(true)}
                            size={24}
                            className={`cursor-pointer md:hidden block ${open ? 'rotate-90' : 'rotate-0'} transition-all`} />
                    </div>
                </div>
                <Drawer closeIcon={false} style={{
                    background: 'var(--color-blue-900)'
                }} title={
                    <div className='start-center gap-2'>
                        <RxCross2 onClick={() => setOpen(false)} size={24} className='text-[var(--color-white)] cursor-pointer' />
                        <Image className='w-16' src={logo} height={200} width={200} alt='logo' />
                    </div>
                }
                    onClose={() => setOpen(false)} open={open}>
                    <Link className='block md:hidden text-white m-1' href={`/search`}>
                        <FaSearch size={24} />
                    </Link>
                    <Link className='block md:hidden text-white m-1' href={`/past-event`}>
                        <FaList size={24} />
                    </Link>
                    <DowerLinks />

                </Drawer>
            </div >
        </Headroom>
    )
}

export default Navbar


const DowerLinks = () => {
    return (
        <div className='md:end-center start-start md:flex-row flex-col gap-2'>
            <Link className='button-blue card-shadow whitespace-nowrap' href={`/login`}>
                Sign In
            </Link>
            <Link className='button-blue card-shadow whitespace-nowrap' href={`/register`}>
                Sign Up
            </Link>
            <Link className='button-blue card-shadow whitespace-nowrap' href={`/join-us`}>
                Advertise With Us
            </Link>
        </div>
    )
}
