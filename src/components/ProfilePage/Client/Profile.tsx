'use client'

import { Form, FormProps } from "antd"
import { useEffect, useState } from "react";
import Vendor from "./Vendor";
import PasswordChange from "./PasswordChange";
import { useUser } from "@/Provider/UserContext";
type FieldType = {
    name?: string;
    email?: string;
    phone_number?: string;
    address?: string;
    location?: string;
    desc?: string;
    banner: File | null
    profile_image: File | null
};
const Profile = () => {
    // const [form] = Form.useForm()
    // const { user: data, } = useUser()
    // const [profileImage, setProfileImage] = useState<File | null>(null)
    // const [coverImage, setCoverImage] = useState<File | null>(null)
    const [Tab, setTab] = useState<string>('vendor profile')
    // const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    //     if (coverImage) {
    //         values.banner = coverImage
    //     }
    //     if (profileImage) {
    //         values.profile_image = profileImage
    //     }
    //     const formData = new FormData()
    //     Object.keys(values).forEach((key) => {
    //         const value = values[key as keyof typeof values];
    //         if (value) {
    //             formData.append(key, value);
    //         }
    //     })
    //     formData?.forEach(element => {
    //         console.log(element)
    //     })
    // };
    // useEffect(() => {
    //     form.setFieldsValue({
    //         name: data?.data?.name,
    //         email: data?.data?.authId?.email,
    //         phone_number: data?.data?.phone_number,
    //         address: data?.data?.address
    //     })
    // }, [data?.data])
    const OptionArray = ['vendor profile', 'change password']//'profile',
    return (
        <div className="container mx-auto">
            <div className="center-center gap-2 mt-6">
                {
                    OptionArray?.map(item => <button onClick={() => {
                        // setCoverImage(null)
                        // setProfileImage(null)
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
            {/* {
                Tab == 'profile' && <Form
                    form={form}
                    onFinish={onFinish}
                    layout="vertical"
                    className="max-w-[700px] w-full mx-auto mt-6"
                >
                    <div style={{
                        background: coverImage ? `url(${URL.createObjectURL(coverImage)})` : data?.data?.banner ? `url(${imageUrl(data?.data?.banner)})` : 'url(https://i.ibb.co.com/MVcwBWm/1600w-1-NYTq34-QR6-I.webp)'
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
                        }} src={profileImage ? URL.createObjectURL(profileImage) : data?.data?.profile_image ? `url(${imageUrl(data?.data?.profile_image)})` : `https://i.ibb.co.com/bHTrR2R/blank-profile-picture-973460-1280.webp`} height={140} width={140} className='h-30 w-30 absolute left-[50%] translate-x-[-50%] -bottom-10 border-2 object-cover border-[var(--color-blue-900)] rounded-full' unoptimized alt='profile' />
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
                            name={`name`}
                            label={`Full Name`}
                            rules={[
                                {
                                    message: 'Name is required',
                                    required: true
                                }
                            ]}
                        >
                            <Input placeholder="Full name" className="h-[42px]" />
                        </Form.Item>
                        <Form.Item<FieldType>
                            name={`email`}
                            rules={[
                                {
                                    message: 'Email is required',
                                    required: true
                                }
                            ]}
                            label={`Email`}
                        >
                            <Input disabled placeholder="Email" className="h-[42px]" />
                        </Form.Item>
                        <Form.Item<FieldType>
                            name={`phone_number`}
                            label={`Phone Number`}
                            rules={[
                                {
                                    message: 'Phone Number is required',
                                    required: true
                                }
                            ]}
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
            } */}
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
