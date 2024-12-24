const GetCoordinateMap = dynamic(() => import('@/components/shared/Client/GetCoordinateMap'), {
    ssr: false,
});
const Jodit = dynamic(() => import("@/components/shared/Client/Jodit"))
import { CategoryType } from '@/components/JoinUsPage/Client/VendorRequest';
import { useUser } from '@/Provider/UserContext';
import { useGetCategoryQuery } from '@/Redux/Apis/categoryApis';
import { Form, FormProps, Input, DatePicker, TimePicker, Select, Upload, Modal, Checkbox } from 'antd';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
import dayjs from 'dayjs';
import toast from 'react-hot-toast';
import { useCreateEventMutation, useUpdateEventMutation } from '@/Redux/Apis/eventApis';
type FieldType = {
    name?: string;
    category?: string;
    date?: string | Date;
    time?: string;
    end_date?: string | Date;
    option?: string[];
    social_media?: string;
    address?: string;
    description?: string;
    event_image?: any;
    img?: any;
    featured: string | Date | null;
    featuredDate: string;
    recurrence: string;
    recurrence_end: string | Date;
    tag: string[];
    latitude: string;
    longitude: string;
    id: string;
};

const EventAddEditForm = ({ selectedData, closeModal }: { selectedData: any, closeModal: any }) => {
    const { user: data } = useUser();
    const [form] = Form.useForm();
    const [Loading, setLoading] = useState<boolean>(false);
    const [text, setText] = useState<string>('');
    const [locationData, setLocationData] = useState<any>();
    const [open, setOpen] = useState<boolean>(false);
    const { data: category, isLoading } = useGetCategoryQuery(undefined);
    const [renew, setRenew] = useState('none');
    const [isFeatured, setIsFeatured] = useState<boolean>(false);
    const [createEvent] = useCreateEventMutation();
    const [updateEvent] = useUpdateEventMutation();

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        if (!selectedData && values?.img?.length <= 0) {
            toast.error('Please select event image');
        }
        // values.event_image = values.event_image?.[0]?.originFileObj;
        values.date = new Date(dayjs(values?.date).toDate().toISOString());
        values.recurrence_end = dayjs(values?.recurrence_end).toDate().toISOString();
        values.end_date = dayjs(values?.end_date).toDate().toISOString();
        values.time = dayjs(values?.time).format('hh:mm A');
        values.latitude = locationData?.lat;
        values.longitude = locationData?.lng;
        values.description = text;
        values.recurrence = renew
        if (isFeatured) {
            values.featured = dayjs(values?.featuredDate).toDate().toISOString();
        }
        const { img, tag, featuredDate, ...otherFields } = values
        const formData = new FormData();
        Object.keys(otherFields)?.map(key => {
            const value = otherFields[key as keyof typeof otherFields];
            if (value) {
                formData.append(key, value);
            }
        });
        if (values?.tag) {
            values?.tag?.map((item: any) => {
                formData.append('option[]', item);
            })
            formData.append('event_image', values?.img?.[0]?.originFileObj)
        }
        formData.append('event_image', values?.img?.[0]?.originFileObj)
        if (selectedData?._id) {
            updateEvent({ id: selectedData._id, data: formData }).unwrap()
                .then(res => {
                    toast.success(res?.message || 'Event Create Successfully')
                    closeModal()
                }).catch(err => {
                    toast.error(err?.data?.message || 'Something went wrong')
                });
        } else {
            createEvent(formData).unwrap()
                .then(res => {
                    toast.success(res?.message || 'Event Updated Successfully')
                    closeModal()
                }).catch(err => {
                    toast.error(err?.data?.message || 'Something went wrong')
                });
        }
    };

    const handleFeaturedChange = (e: any) => {
        setIsFeatured(e.target.checked);
    };

    useEffect(() => {
        if (selectedData) {
            form.setFieldsValue({
                name: selectedData?.name,
                category: selectedData?.category?._id,
                date: dayjs(selectedData?.date),
                time: dayjs(selectedData?.time),
                end_date: dayjs(selectedData?.end_date),
                description: selectedData?.description,
                address: selectedData?.address,
                social_media: selectedData?.social_media,
                tag: selectedData?.option,
                recurrence: selectedData?.recurrence,
                recurrence_end: dayjs(selectedData?.recurrence_end),
                featured: selectedData.featured,
                featuredDate: selectedData.featured ? dayjs(selectedData?.featured) : dayjs(selectedData?.featuredDate),
                // img: imageUrl(selectedData?.event_image)
            });
            setText(selectedData?.description)
            setLocationData({
                lat: selectedData.latitude,
                lng: selectedData.longitude,
                display_name: selectedData.address,
            });
            setIsFeatured(!!selectedData.featured);
        }
    }, [selectedData]);
    useEffect(() => {
        // if (data?.data?.address) {
        //     form.setFieldsValue({ address: data?.data?.address })
        // }
        setLocationData({ lat: data?.data?.location_map?.coordinates?.[0], lng: data?.data?.location_map?.coordinates?.[1], display_name: data?.data?.address });
    }, [form, data?.data])
    useEffect(() => {
        if (locationData) {
            form.setFieldsValue({ address: locationData?.display_name })
        }

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
                        className=""
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
                    <TimePicker use12Hours format="h:mm a" style={{ width: '100%' }} />
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
                    label="Recurrence"
                    name="recurrence"
                >
                    <Select
                        defaultValue={renew}
                        value={renew}
                        onChange={(value) => setRenew(value)}
                        options={[
                            { label: 'Unavailable', value: 'none' },
                            { label: 'Monthly', value: 'monthly' },
                            { label: 'Weekly', value: 'weekly' },
                            { label: 'Yearly', value: 'yearly' },
                        ]}
                    />
                </Form.Item>

                <Form.Item<FieldType>
                    label={`Recurrence ${renew == 'none' ? 'Unavailable' : 'Until'} `}
                    name="recurrence_end"
                    rules={[{ required: renew != 'none', message: 'Please select a featured date!' }]}
                >
                    <DatePicker style={{ width: '100%' }} disabled={renew == 'none'} />
                    {/* {
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
                        /> :''  } */}
                </Form.Item>

                <Form.Item<FieldType> className={`col-span-2`}
                    label="Image"
                    name="img"
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
                    <button type="submit" className='button-blue'>
                        {selectedData?._id ? 'Update' : 'Create'}
                    </button>
                    {/* {selectedData?._id && (
                        <button
                            type="button"
                            className='button-blue'
                            onClick={() => {
                                // Duplicate logic
                                const duplicateData = { ...selectedData, _id: undefined };
                                form.setFieldsValue({
                                    ...duplicateData,
                                    name: duplicateData.name,
                                });
                                createEvent(duplicateData);
                            }}
                        >
                            Duplicate
                        </button>
                    )} */}
                    <button
                        type="button"
                        style={{ background: 'var(--color-red-500)' }}
                        className='button-blue'
                        onClick={() => form.resetFields()}
                    >
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
