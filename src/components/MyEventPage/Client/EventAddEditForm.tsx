const GetCoordinateMap = dynamic(() => import('@/components/shared/Client/GetCoordinateMap'), {
    ssr: false,
});
const Jodit = dynamic(() => import("@/components/shared/Client/Jodit"))
import { Form, FormProps, Input, DatePicker, TimePicker, Select, Button, Upload, Modal } from 'antd';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
const { TextArea } = Input;

type FieldType = {
    eventName?: string;
    category?: string;
    date?: string;
    time?: string;
    duration?: string;
    option?: string;
    socialMediaLink?: string;
    location?: string;
    description?: string;
    image?: any;
};

const EventAddEditForm = () => {
    const [Loading, setLoading] = useState<boolean>(false)
    const [locationData, setLocationData] = useState<any>()
    const [open, setOpen] = useState<boolean>(false)
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    return (
        <div className='p-4 '>
            <p className='text-2xl text-center mb-2'>Add Event</p>
            <Form className=' grid-2' layout="vertical" onFinish={onFinish}>

                <Form.Item<FieldType>
                    label="Event Name"
                    name="eventName"
                    rules={[{ required: true, message: 'Please input the event name!' }]}
                >
                    <Input placeholder="Enter auction item name" />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Category"
                    name="category"
                    rules={[{ required: true, message: 'Please select a category!' }]}
                >
                    <Select placeholder="Select category">
                        <Select.Option value="Live Music">Live Music</Select.Option>
                        <Select.Option value="Art">Art</Select.Option>
                        <Select.Option value="Workshop">Workshop</Select.Option>
                        {/* Add more options as needed */}
                    </Select>
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
                    label="Duration"
                    name="duration"
                >
                    <Input placeholder="e.g., 3h 45m" />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Option"
                    name="option"
                >
                    <Select placeholder="Select your option">
                        <Select.Option value="Option 1">Option 1</Select.Option>
                        <Select.Option value="Option 2">Option 2</Select.Option>
                        {/* Add more options as needed */}
                    </Select>
                </Form.Item>

                <Form.Item<FieldType>
                    label="Social Media Link"
                    name="socialMediaLink"
                >
                    <Input placeholder="Select your media link" />
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
                    <Jodit />
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
                        background:'var(--color-blue-900)'
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
