const GetCoordinateMap = dynamic(() => import('@/components/shared/Client/GetCoordinateMap'), {
    ssr: false,
});
const Jodit = dynamic(() => import("@/components/shared/Client/Jodit"))
import { CategoryType } from '@/components/JoinUsPage/Client/VendorRequest';
import { useUser } from '@/Provider/UserContext';
import { useGetCategoryQuery } from '@/Redux/Apis/categoryApis';
import { Form, FormProps, Input, DatePicker, TimePicker, Select, Button, Upload, Modal, Checkbox } from 'antd';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
const { TextArea } = Input;

type FieldType = {
    name?: string;
    category?: string;
    date?: string;
    time?: string;
    end_date?: string;
    option?: string;
    social_media?: string;
    location?: string;
    description?: string;
    image?: any;
    featured: string;
    featuredDate: string;
    renew: string;
    renewDate: string;
    tag: string[];
};

const EventAddEditForm = () => {
    const { user: data, } = useUser()
    const [form] = Form.useForm()
    const [Loading, setLoading] = useState<boolean>(false)
    const [text, setText] = useState<string>('')
    const [locationData, setLocationData] = useState<any>()
    const [open, setOpen] = useState<boolean>(false)
    const { data: category, isLoading } = useGetCategoryQuery(undefined)
    const [renew, setRenew] = useState('unavailable')
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };
    const [isFeatured, setIsFeatured] = useState<boolean>(false);
    const handleFeaturedChange = (e: any) => {
        setIsFeatured(e.target.checked);
    };

    useEffect(() => {
        if (data?.data?.address) {
            form.setFieldsValue({ location: data?.data?.address })
        }
    }, [form, data?.data])
    useEffect(() => {
        if (locationData) {
            form.setFieldsValue({ location: locationData?.display_name })
        }
        // latitude: locationData?.lat,
        // longitude: locationData?.lng,
    }, [form, locationData])
    return (
        <div className='p-4'>
            <p className='text-2xl text-center mb-2'>Add Event</p>
            <Form form={form} className='grid-2' layout="vertical" onFinish={onFinish}>

                <Form.Item<FieldType>
                    label="Event Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input the event name!' }]}
                >
                    <Input placeholder="Enter auction item name" />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Category"
                    name="category"
                    rules={[{ required: true, message: 'Please select a category!' }]}
                >
                    <Select
                        className="h-[42px]"
                        placeholder="Select Category"
                        options={category?.data?.map((item: CategoryType) => ({ label: item?.name, value: item?._id })) || []}
                    />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Date"
                    name="date"
                    rules={[{ required: true, message: 'Please select the date!' }]}
                >
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Time"
                    name="time"
                    rules={[{ required: true, message: 'Please select the time!' }]}
                >
                    <TimePicker style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item<FieldType>
                    label="End Date"
                    name="end_date"
                    rules={[{ required: true, message: 'Please select the End date!' }]}
                >
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                {/* 
                <Form.Item<FieldType>
                    label="Duration"
                    name="duration"
                >
                    <Input placeholder="e.g., 3h 45m" />
                </Form.Item> */}

                <Form.Item<FieldType> className={``}
                    label="Tag"
                    name="tag"
                    rules={[{ required: false, message: 'Please select a Tag!' }]}
                >
                    <Select mode="multiple" placeholder="Select Tag">
                        <Select.Option value="Family Friendly">Family Friendly</Select.Option>
                        <Select.Option value="Free">Free</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item<FieldType>
                    label="Social Media Link"
                    name="social_media"
                >
                    <Input type='url' placeholder="Select your media link" />
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

                <Form.Item<FieldType> className={`col-span-2`}
                    label="Description"
                    name="description"
                // rules={[{ required: true, message: 'Please enter a description!' }]}
                >
                    <Jodit
                        text={text} setText={setText}
                    />
                </Form.Item>
                <Form.Item<FieldType>
                    name="featured"
                    valuePropName="checked"
                >
                    <Checkbox onChange={handleFeaturedChange}>Make this Featured </Checkbox>
                </Form.Item>

                <Form.Item<FieldType>
                    label="Featured End Date"
                    name="featuredDate"
                    rules={[{ required: isFeatured, message: 'Please select a featured date!' }]}
                >
                    <DatePicker style={{ width: '100%' }} disabled={!isFeatured} />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Renew"
                    name="renew"
                    valuePropName="checked"
                >
                    <Select
                        value={renew}
                        onChange={(value) => setRenew(value)}
                        options={[
                            { label: 'Unavailable', value: 'unavailable' },
                            { label: 'Monthly', value: 'monthly' },
                            { label: 'Weekly', value: 'weekly' },
                            { label: 'Yearly', value: 'yearly' },
                        ]}
                    />
                </Form.Item>

                <Form.Item<FieldType>
                    label={`Renew ${renew == 'unavailable' ? 'Unavailable' : renew == 'weekly' ? 'Week' : 'Date'} `}
                    name="renewDate"
                    rules={[{ required: isFeatured, message: 'Please select a featured date!' }]}
                >
                    {
                        renew == 'weekly' ? < Select
                            placeholder='please select day'
                            defaultValue={`Friday`}
                            options={[
                                { label: 'Monday', value: 'monday' },
                                { label: 'Tuesday', value: 'tuesday' },
                                { label: 'Wednesday', value: 'wednesday' },
                                { label: 'Thursday', value: 'thursday' },
                                { label: 'Friday', value: 'friday' },
                                { label: 'Saturday', value: 'saturday' },
                                { label: 'Sunday', value: 'sunday' }
                            ]}
                        /> : <DatePicker style={{ width: '100%' }} disabled={renew == 'unavailable'} />
                    }
                </Form.Item>

                <Form.Item<FieldType> className={`col-span-2`}
                    label="Image"
                    name="image"
                    valuePropName="fileList"
                    getValueFromEvent={(e) => Array.isArray(e) ? e : e?.fileList}
                >
                    <Upload listType="picture-card" maxCount={1}>
                        <div className='center-center flex-col'>
                            <FaUpload />
                            <div style={{ marginTop: 8 }}>Add Image</div>
                        </div>
                    </Upload>
                </Form.Item>

                <div className='col-span-2 center-center gap-2 w-full'>
                    <button className='button-blue'>
                        Save
                    </button>
                    <button style={{
                        background: 'var(--color-blue-900)'
                    }} className='button-blue'>
                        Duplicate
                    </button>
                    <button style={{
                        background: 'var(--color-red-500)'
                    }} className='button-blue'>
                        Cancel
                    </button>
                </div>
            </Form>
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
        </div>
    );
};

export default EventAddEditForm;
