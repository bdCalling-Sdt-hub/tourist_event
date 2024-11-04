'use client'

import { Form, FormProps, Input, Modal, Select } from "antd"
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";
import { useState } from "react";
import { CiEdit, CiImageOn } from "react-icons/ci";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import Vendor from "./Vendor";
import PasswordChange from "./PasswordChange";
type FieldType = {
    username?: string;
    email?: string;
    phone?: string;
    address?: string;
    location?: string;
    desc?: string;
};
const Profile = () => {
    const [profileImage, setProfileImage] = useState<File | null>(null)
    const [coverImage, setCoverImage] = useState<File | null>(null)
    const [Tab, setTab] = useState<string>('profile')
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };
    const OptionArray = ['profile', 'vendor profile', 'change password']
    return (
        <div className="container mx-auto">
            <div className="center-center gap-2 mt-6">
                {
                    OptionArray?.map(item => <button onClick={() => {
                        setCoverImage(null)
                        setProfileImage(null)
                        setTab(item)
                    }}
                        style={{
                            background: Tab == item ? '' : 'var(--color-white)',
                            color: Tab == item ? '' : 'var(--color-blue-900)'
                        }}
                        key={item} className="button-blue">
                        {item}
                    </button>)
                }
            </div>
            {
                Tab == 'profile' && <Form
                    onFinish={onFinish}
                    layout="vertical"
                    className="max-w-[700px] w-full mx-auto mt-6"
                >
                    <div style={{
                        background: coverImage ? `url(${URL.createObjectURL(coverImage)})` : 'url(https://i.ibb.co.com/MVcwBWm/1600w-1-NYTq34-QR6-I.webp)'
                    }} className='w-full h-[200px] bg-cover bg-no-repeat rounded-md relative'>
                        <label htmlFor="cover_image">
                            <input type="file" className="hidden" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const file = e.target.files ? e.target.files[0] : null;
                                setCoverImage(file);
                            }} style={{
                                display: 'none'
                            }} name="cover_image" id="cover_image" />
                            <CiEdit size={32} style={{
                                padding: '3px'
                            }} className="text-[var(--color-blue-900)] bg-[var(--color-white)] cursor-pointer absolute right-0 top-0 rounded-full" />
                        </label>
                        <Image style={{
                            height: '120px',
                            width: '120px'
                        }} src={profileImage ? URL.createObjectURL(profileImage) : `https://i.ibb.co.com/bHTrR2R/blank-profile-picture-973460-1280.webp`} height={140} width={140} className='h-30 w-30 absolute left-[50%] translate-x-[-50%] -bottom-10 border-2 object-cover border-[var(--color-blue-900)] rounded-full' unoptimized alt='profile' />
                        <label htmlFor="profile_image">
                            <input type="file" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const file = e.target.files ? e.target.files[0] : null;
                                setProfileImage(file);
                            }} className="hidden" style={{
                                display: 'none'
                            }} name="profile_image" id="profile_image" />
                            <CiImageOn size={32} style={{
                                padding: '3px'
                            }} className="text-[var(--color-blue-900)] bg-[var(--color-white)] absolute left-[55%] cursor-pointer translate-x-[-44%] -bottom-10  rounded-full" />
                        </label>
                    </div>

                    <div className="grid-2 mt-12">
                        <Form.Item<FieldType>
                            name={`username`}
                            label={`Full Name`}
                        >
                            <Input placeholder="Full name" className="h-[42px]" />
                        </Form.Item>
                        <Form.Item<FieldType>
                            name={`email`}
                            label={`Email`}
                        >
                            <Input placeholder="Email" className="h-[42px]" />
                        </Form.Item>
                        <Form.Item<FieldType>
                            name={`phone`}
                            label={`Phone Number`}
                        >
                            <Input placeholder="Phone Number" className="h-[42px]" />
                        </Form.Item>
                        <Form.Item<FieldType>
                            name={`address`}
                            label={`Address`}
                        >
                            <Input placeholder="Address" className="h-[42px]" />
                        </Form.Item>
                    </div>
                    <button className="button-blue mx-auto">
                        Update Profile
                    </button>
                </Form>
            }
            {
                Tab == 'vendor profile' && <Vendor />
            }
            {
                Tab == 'change password' && <PasswordChange />
            }
        </div>
    )
}

export default Profile
