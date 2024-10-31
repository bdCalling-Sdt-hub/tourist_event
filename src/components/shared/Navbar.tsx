'use client'
import logo from '@/Asset/logo.png'
import shortLogo from '@/Asset/shortLogo.png'
import Image from 'next/image'
import * as React from "react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { MdDateRange } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import Link from 'next/link'
import { FaList, FaSearch } from 'react-icons/fa'
import { RiMenuUnfold2Fill } from 'react-icons/ri'
import { Drawer } from 'antd'
const Navbar = () => {
    const [date, setDate] = React.useState<Date>()
    const [open, setOpen] = React.useState<boolean | undefined>(false);
    {/* <ButtonBlue
                        handler={() => setOpenDatePicker(true)}
                        text={`Event`}
                        classNames={null}
                        icon={<MdDateRange />}
                        styles={null}
                    /> */}
    return (
        <div className='bg-blue-900 px-2 md:py-6 py-4'>
            <div className='container mx-auto between-center'>
                <div className='start-center  gap-6 '>
                    <Image className='md:block hidden' src={logo} height={200} width={200} alt='logo' />
                    <Image className='md:hidden block w-10 h-10' src={shortLogo} height={400} width={600} alt='logo' />
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
                    <Link href={`/search`}>
                        <FaSearch size={24} />
                    </Link>
                    <Link href={`/pastEvents`}>
                        <FaList size={24} />
                    </Link>
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
                    <Image className='' src={logo} height={200} width={200} alt='logo' />
                </div>
            }
                onClose={() => setOpen(false)} open={open}>
                <DowerLinks />
            </Drawer>
        </div >
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
            <Link className='button-blue card-shadow whitespace-nowrap' href={`/joinUs`}>
                Advertise With Us
            </Link>
        </div>
    )
}
