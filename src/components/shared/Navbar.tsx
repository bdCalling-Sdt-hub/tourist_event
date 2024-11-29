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
import { MdDateRange, MdOutlineStorefront } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'
import { RiMenuUnfold2Fill } from 'react-icons/ri'
import { Drawer } from 'antd'
import Headroom from "react-headroom";
import { useRouter } from 'next/navigation'
import { CiCalendar, CiUser } from 'react-icons/ci'
import { IoIosLogOut } from 'react-icons/io'
import { CgWebsite } from 'react-icons/cg'
import { useUser } from '@/Provider/UserContext'
import useUpdateSearchParams from '@/Utils/SetParams'
import { imageUrl } from '@/Utils/serverUrl'
import Cookies from 'js-cookie';
import { useGetCategoryQuery } from "@/Redux/Apis/categoryApis";
import { useMemo } from "react";
import { FaFilter } from "react-icons/fa";
import { CategoryType } from "../JoinUsPage/Client/VendorRequest";
import { useSearchParams } from "next/navigation";
import { Popover as Pops } from "antd";
const Navbar = () => {
    const { user: data, } = useUser()
    const [date, setDate] = React.useState<Date>()
    const [open, setOpen] = React.useState<boolean | undefined>(false);
    const router = useRouter()
    const updateSearchParams = useUpdateSearchParams();
    const handleSignOut = () => {
        localStorage.removeItem('_token')
        Cookies.remove('_token')
        window.location.href = '/login';
    }
    const searchParams = useSearchParams();
    const SelectedCategory = searchParams.get('cat')
    const option = searchParams.get('option')
    const { data: category, isLoading } = useGetCategoryQuery(undefined);
    const Options = useMemo(() => {
        if (!category?.data || !Array.isArray(category?.data)) {
            console.warn("Category data is not an array or is undefined.");
            return [{ label: "All Event", value: "" }];
        }

        const categoryOption = category.data.map((item: CategoryType) => ({
            label: item.name,
            value: item._id,
        }));

        return [{ label: "All Event", value: "" }, ...categoryOption];
    }, [category?.data]);

    const Options2 = [
        { name: "Family Friendly", value: "Family Friendly" },
        { name: "Free", value: "Free" },
        { name: "All", value: "" },
    ];
    const content = useMemo(() => {
        return (
            <div className="bg-blue-900 p-2 rounded-sm flex flex-col gap-1">
                {Options.map((item: any) => (
                    <button
                        onClick={() => {
                            const currentParams = new URLSearchParams(window.location.search);
                            currentParams.set('category', item.value);
                            currentParams.set('cat', item.label);
                            router.push(`/search?${currentParams.toString()}`)
                        }}
                        className="hover:bg-[var(--color-blue-500)] p-1 rounded-sm"
                        key={item.value}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        );
    }, [Options, updateSearchParams]);

    const content2 = (
        <div className="bg-blue-900 p-2 rounded-sm flex flex-col gap-1">
            {Options2.map((item) => (
                <button
                    onClick={() => {
                        const currentParams = new URLSearchParams(window.location.search);
                        currentParams.set('option', item.value);
                        router.push(`/search?${currentParams.toString()}`)
                    }}
                    className="hover:bg-[var(--color-blue-500)] p-1 rounded-sm"
                    key={item.value}
                >
                    {item.name}
                </button>
            ))}
        </div>
    );

    return (
        <Headroom>
            <div className='bg-blue-900 px-2 md:py-2 z-[50]'>
                <div className='container mx-auto between-center'>
                    <div className='start-center  gap-6 '>
                        <Image onClick={() => router.push('/')} className='md:block hidden cursor-pointer w-28' src={logo} height={200} width={200} alt='logo' />
                        <Image onClick={() => router.push('/')} className='md:hidden block w-12 cursor-pointer' src={logo} height={400} width={600} alt='logo' />
                        <Popover>
                            <PopoverTrigger asChild>
                                <button
                                    className={`button-blue `}
                                >
                                    {date ? <div className='start-center gap-2'>{format(date, "PPP")}<RxCross2 onClick={() => {
                                        updateSearchParams('date', '')
                                        setDate(undefined)
                                    }} size={24} className='text-[var(--color-red-500)]' /> </div> : <>Event< MdDateRange /></>}
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={(date) => {
                                        // updateSearchParams('date', new Date(date ?? "")?.toISOString()?.split('T')?.[0])
                                        const currentParams = new URLSearchParams(window.location.search);
                                        currentParams.set('date', new Date(date ?? "")?.toISOString()?.split('T')?.[0]);
                                        router.push(`/search?${currentParams.toString()}`)
                                        setDate(date)
                                    }}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className='end-center gap-2 '>
                        <div className='md:end-center gap-2 hidden'>
                            <Pops placement="bottom" title="" content={content}>
                                <button className="button-blue whitespace-nowrap">
                                    <FaFilter /> {SelectedCategory || 'All Event'}
                                </button>
                            </Pops>
                            <Pops placement="bottom" title="" content={content2}>
                                <button className="button-blue whitespace-nowrap">
                                    <FaFilter /> {option || 'Tags'}
                                </button>
                            </Pops>
                        </div>
                        <Link className='md:block hidden' href={`/search`}>
                            <FaSearch size={24} />
                        </Link>
                        {/* <Link className='md:block hidden' href={`/past-event`}>
                            <FaList size={24} />
                        </Link> */}
                        {/* @ts-ignore */}
                        {
                            data?.data?.authId?.email && <Popover>
                                <PopoverTrigger asChild>
                                    <button>
                                        <Image src={data?.data?.profile_image ? imageUrl(data?.data?.profile_image) : `https://i.ibb.co.com/bHTrR2R/blank-profile-picture-973460-1280.webp`} height={40} width={40} className='h-10 w-10 rounded-full' alt='profile' />
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <div className='rounded-md p-2 bg-[var(--color-white)] min-w-[300px] max-w-[500px] w-full'>
                                        <div style={{
                                            background: data?.data?.banner ? `url(${imageUrl(data?.data?.banner)})` : 'url(https://i.ibb.co.com/MVcwBWm/1600w-1-NYTq34-QR6-I.webp)'
                                        }} className='w-full h-[100px] bg-cover bg-no-repeat rounded-md relative'>
                                            <Image src={data?.data?.profile_image ? imageUrl(data?.data?.profile_image) : `https://i.ibb.co.com/bHTrR2R/blank-profile-picture-973460-1280.webp`} height={140} width={140} className='h-24 w-24 absolute left-[50%] translate-x-[-50%] -bottom-6 rounded-full' alt='profile' />
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
                                                    <Link href={`/details/author?id=${data?.data?._id}`} className='start-center gap-2 hover:bg-[var(--color-blue-200)] p-2 rounded-md'>
                                                        <CgWebsite size={20} />My Landing Page
                                                    </Link>
                                                    <Link href={`/my-event`} className='start-center gap-2 hover:bg-[var(--color-blue-200)] p-2 rounded-md'>
                                                        <CiCalendar size={20} /> My Event
                                                    </Link>
                                                    {/* <Link href={`/subscription`} className='start-center gap-2 hover:bg-[var(--color-blue-200)] p-2 rounded-md'>
                                                        <MdOutlinePlaylistAddCheck size={20} />My subscription
                                                    </Link> */}
                                                </>
                                            }

                                            {
                                                data?.data?.authId?.role === 'USER' && <Link href={`/join-us`} className='start-center gap-2 hover:bg-[var(--color-blue-200)] p-2 rounded-md w-full'>
                                                    <MdOutlineStorefront size={20} />Become a vendor
                                                </Link>
                                            }

                                            <button onClick={() => handleSignOut()} className='start-center gap-2 hover:bg-[var(--color-red-500)] hover:text-[var(--color-white)] p-2 rounded-md w-full'>
                                                <IoIosLogOut size={20} /> Sign Out
                                            </button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        }


                        <div className='md:block hidden'>
                            {/* <DowerLinks data={data} /> */}
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
                    {/* <Link className='block md:hidden text-white m-1' href={`/past-event`}>
                        <FaList size={24} />
                    </Link> */}
                    <Pops className='my-2' placement="bottom" title="" content={content}>
                        <button className="button-blue whitespace-nowrap">
                            <FaFilter /> {SelectedCategory || 'All Event'}
                        </button>
                    </Pops>
                    <Pops placement="bottom" title="" content={content2}>
                        <button className="button-blue whitespace-nowrap">
                            <FaFilter /> {option || 'Tags'}
                        </button>
                    </Pops>
                    {/* <DowerLinks data={data} /> */}

                </Drawer>
            </div >
        </Headroom>
    )
}

export default Navbar


export const DowerLinks = ({ data }: any) => {
    return (
        <div className='md:end-center start-start md:flex-row flex-col gap-2'>
            {
                !data?.data?.authId?.email && <>

                    <Link className='button-blue card-shadow whitespace-nowrap' href={`/login`}>
                        Sign In
                    </Link>
                    {/* <Link className='button-blue card-shadow whitespace-nowrap' href={`/register`}>
                        Sign Up
                    </Link> */}
                </>
            }
            {
                data?.data?.authId?.role != 'VENDOR' && <Link className='button-blue card-shadow whitespace-nowrap' href={`/join-us`}>
                    Advertise With Us
                </Link>
            }

        </div>
    )
}
