import { Popover } from 'antd'
import React from 'react'
import { IoLanguageSharp } from 'react-icons/io5'

const LanguageChange = () => {
    const Options = [
        { name: "Spanish", value: 'Spanish' },
        { name: "English ", value: 'English ' },
    ]
    const content = (
        <div className='bg-blue-900 p-2 rounded-sm flex flex-col gap-1'>
            {
                Options?.map(item => <button className='hover:bg-[var(--color-blue-500)]' key={item?.name}>
                    {item?.name}
                </button>)
            }
        </div>
    );

    return <>
        <Popover placement="bottom" title="" content={content}>
            <button style={{
                background: 'var(--color-blue-200)',
                color:'var(--color-blue-900)'
            }} className='button-blue whitespace-nowrap'>
               <IoLanguageSharp />  English
            </button>
        </Popover>
    </>
}

export default LanguageChange
