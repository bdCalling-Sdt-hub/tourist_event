'use client'
const GetCoordinateMap = dynamic(() => import('@/components/shared/Client/GetCoordinateMap'), {
    ssr: false,
});
const Jodit = dynamic(() => import("@/components/shared/Client/Jodit"), {
    ssr: false,
})
import { useUser } from '@/Provider/UserContext';
import { useUpdateRequestMutation } from '@/Redux/Apis/vendorApis';
import { imageUrl } from '@/Utils/serverUrl';
import { Form, FormProps, Input, Modal, Select } from 'antd';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { CiEdit, CiImageOn } from 'react-icons/ci';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
type FieldType = {
    username?: string;
    email?: string;
    phone?: string;
    address?: string;
    location?: string;
    description?: string;
    longitude: string,
    latitude: string,
    name?: string;
    phone_number: string,
    social_link: [
        {
            name: string,
            link: string
        }
    ]
    social_media: string
    banner: File | null,
    profile_image: File | null,

};
const Vendor = () => {
    const [form] = Form.useForm()
    const { user: data, } = useUser()
    const [profileImage, setProfileImage] = useState<File | null>(null)
    const [coverImage, setCoverImage] = useState<File | null>(null)
    const [Loading, setLoading] = useState<boolean>(false)
    const [locationData, setLocationData] = useState<any>()
    const [text, setText] = useState<string>('')
    const [open, setOpen] = useState<boolean>(false)
    const [social, setSocial] = useState<Array<string>>([]);
    const [update] = useUpdateRequestMutation()
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        const data = {
            ...values,
            description: text,
            latitude: locationData?.lat,
            longitude: locationData?.lng,
            social_media: JSON.stringify(values?.social_link ?? []),
        }
        if (profileImage) {
            data.profile_image = profileImage
        }
        if (coverImage) {
            data.banner = coverImage
        }
        const { social_link, ...otherFields } = data
        const formData = new FormData()
        Object.keys(otherFields).map(key => {
            const value = otherFields[key as keyof typeof otherFields]
            if (value) {
                formData.append(key, value)
            }
        })
        update(formData).unwrap()
            .then(res => {
                toast.success(res.message)
                console.log(res)
            }).catch(err => {
                toast.error(err?.data?.message)
                console.log(err)
            })
    };
    useEffect(() => {
        if (data) {
            const formValues = {
                name: data?.data?.name || '',
                email: data?.data?.authId?.email || '',
                phone: data?.data?.phone_number || '',
                address: data?.data?.address || '',
                phone_number: data?.data?.phone_number || '',
                social_link: data?.data?.social_media
            };
            form.setFieldsValue(formValues)
            if (data?.data?.description) {
                setText(data?.data?.description || '')
            }
            if (data?.data?.social_media) {
                const media = data?.data?.social_media?.map(item => item?.name)
                setSocial(media)
            }
        }
    }, [data?.data])
    useEffect(() => {
        if (locationData) {
            form.setFieldsValue({ address: locationData?.display_name })
        }
    }, [form, locationData])
    return <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        className="max-w-[700px] w-full mx-auto mt-6"
        initialValues={{
            social_link: [{
                name: '',
                link: ''
            }]
        }}
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
            }} src={profileImage ? URL.createObjectURL(profileImage) : data?.data?.profile_image ? imageUrl(data?.data?.profile_image) : `https://i.ibb.co.com/bHTrR2R/blank-profile-picture-973460-1280.webp`} height={140} width={140} className='h-30 w-30 absolute left-[50%] translate-x-[-50%] -bottom-10 border-2 object-cover border-[var(--color-blue-900)] rounded-full' unoptimized alt='profile' />
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
                <Input placeholder="Business Name" className="h-[42px]" />
            </Form.Item>
            <Form.Item<FieldType>
                name={`phone_number`}
                label={`Phone Number`}
                rules={[{ required: true, message: 'Phone Number is required' }]}
            >
                <Input placeholder="Phone" className="h-[42px]" />
            </Form.Item>
            <div className="relative">
                <Form.Item<FieldType>
                    name={`address`}
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
                // name={`desc`}
                label={`Description`}
            // rules={[{ required: true, message: 'Description is required' }]}
            >
                <Jodit
                    text={text} setText={setText}
                />

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
                                        name={[name, 'name']}
                                        rules={[{ required: true, message: 'Missing Medea Name' }]}
                                    >
                                        <Select onChange={(value: string) => {
                                            const selectedField = form.getFieldValue('social_link')
                                            if (selectedField) {
                                                const media = selectedField?.map((item: any) => item?.name)
                                                setSocial(media)
                                            }
                                        }} className="h-[42px]" placeholder="Social Media Link" options={[
                                            { label: 'Facebook', value: 'Facebook' },
                                            { label: 'Instagram', value: 'Instagram' },
                                            { label: 'TikTok', value: 'TikTok' },
                                            { label: 'Website', value: 'Website' },
                                        ].filter(item => !social.includes(item?.value))} />
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
                            <button disabled={fields?.length >= 4} type="button" className="button-blue ml-auto disabled:cursor-not-allowed disabled:bg-gray-300" style={{
                                padding: '5px 10px'
                            }} onClick={() => {
                                if (fields?.length >= 4) {
                                    return
                                }
                                add()
                            }}>
                                <FaPlus /> Add Social Links
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

export default Vendor
