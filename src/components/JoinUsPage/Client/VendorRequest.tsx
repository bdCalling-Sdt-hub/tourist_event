'use client'
const GetCoordinateMap = dynamic(() => import('@/components/shared/Client/GetCoordinateMap'), {
    ssr: false,
});
const Jodit = dynamic(() => import("@/components/shared/Client/Jodit"), {
    ssr: false,
})
import { Checkbox, Form, FormProps, Input, Modal, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useState } from 'react'
import { CiEdit, CiImageOn } from 'react-icons/ci';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
type FieldType = {
    username?: string;
    email?: string;
    phone?: string;
    address?: string;
    location?: string;
    desc?: string;
    name?: string;
    password?: string;
    confirmPassword?: string;
    sendMail?: string;
};
const VendorRequest = () => {
    const [profileImage, setProfileImage] = useState<File | null>(null)
    const [coverImage, setCoverImage] = useState<File | null>(null)
    const [Loading, setLoading] = useState<boolean>(false)
    const [locationData, setLocationData] = useState<any>()
    const [open, setOpen] = useState<boolean>(false)
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };
    return <Form
        onFinish={onFinish}
        layout="vertical"
        className="max-w-[800px] w-full mx-auto mt-6"
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

        <div className=" mt-12">
            <Form.Item<FieldType>
                name={`name`}
                label={`Business Name`}
                rules={[{ required: true, message: 'Business Name is required' }]}
            >
                <Input placeholder="location" className="h-[42px]" />
            </Form.Item>
            <div className="relative">
                <Form.Item<FieldType>
                    name={`location`}
                    label={`Location`}
                    rules={[{ required: true, message: 'Location is required' }]}
                >
                    <Input placeholder="location" className="h-[42px]" />
                </Form.Item>
                <button type="button" className="button-blue ml-auto absolute top-10 right-2" style={{
                    padding: '5px 5px'
                }} onClick={() => { setOpen(true) }}>
                    <FaLocationPin />
                </button>
            </div>
            <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input className='h-[42px]' />
            </Form.Item>
            <div className='grid-2'>
                <Form.Item<FieldType>
                    label="Email"
                    name="email"
                    className='w-full'
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input className='h-[42px]' />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Phone Number"
                    name="phone"
                    className='w-full'
                    rules={[{ required: true, message: 'Please input your Phone Number!' }]}
                >
                    <Input className='h-[42px]' />
                </Form.Item>
            </div>
            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password className='h-[42px]' />
            </Form.Item>
            <Form.Item<FieldType>
                label="Confirm Password"
                name="confirmPassword"
                rules={[{ required: true, message: 'Please input your Confirm Password!' }]}
            >
                <Input.Password className='h-[42px]' />
            </Form.Item>
            <Form.Item<FieldType>
                name={`desc`}
                label={`Description`}
            // rules={[{ required: true, message: 'Description is required' }]}
            >
                <Jodit />
            </Form.Item>
            <Form.Item<FieldType>
                name="sendMail"
                valuePropName="checked"
            >
                <Checkbox>Send emails featuring the best event in Tourist  Platform. </Checkbox>
            </Form.Item>
            <Form.List name="social_link">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <div>
                                <p className="mb-1">Social Links</p>
                                <div className="grid-2 relative">
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'medea']}
                                        rules={[{ required: true, message: 'Missing Medea Name' }]}
                                    >
                                        <Select className="h-[42px]" placeholder="Social Media Link" options={[
                                            { label: 'Facebook', value: 'Facebook' },
                                            { label: 'Instagram', value: 'Instagram' }
                                        ]} />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'link']}
                                        rules={[{ required: true, message: 'Missing link' }]}
                                    >
                                        <Input className="h-[42px]" placeholder="Link" type="url" />
                                    </Form.Item>
                                    <FaMinus className="bg-[var(--color-red-500)] text-[var(--color-white)] rounded-full p-1 absolute right-2  top-2 cursor-pointer" size={24} onClick={() => remove(name)} />
                                </div>
                            </div>
                        ))}
                        <Form.Item>
                            <button type="button" className="button-blue ml-auto" style={{
                                padding: '5px 10px'
                            }} onClick={() => add()}>
                                <FaPlus /> Add
                            </button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </div>
        <button className="button-blue mx-auto">
            Update Vendor Profile
        </button>
        <Modal
            onCancel={() => setOpen(false)}
            open={open}
            footer={false}
            centered
            width={800}
        >
            <GetCoordinateMap
                setLoading={setLoading}
                setLocationData={setLocationData}
                close_modal={() => setOpen(false)}
            />
        </Modal>
    </Form>
}

export default VendorRequest
