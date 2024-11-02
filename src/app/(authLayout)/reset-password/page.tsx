'use client'
import React from 'react'
import loginImage from '@/Asset/login.png'
import Image from 'next/image'
import { Checkbox, Form, FormProps, Input } from 'antd'
import Link from 'next/link'
type FieldType = {
    password?: string;
    confirmPassword?: string;
};
const ResetPassword = () => {
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };
    return (
        <div className='mx-auto center-center h-screen w-full'>
            <div className='w-full h-full grid-2'>
                <Image src={loginImage} height={600} width={1000} alt='login image' className='img-contain  ' />
                <div className='flex justify-center items-start h-full w-full flex-col bg-[var(--color-blue-200)] p-4'>
                    <div className='max-w-[600px] w-full mx-auto'>
                        <p className='text-3xl font-bold mb-2'>Set a new password</p>
                        <p className='text-gray'>Your previous password has been reseted. Please set a new password for your account.</p>
                        <Form
                            layout='vertical'
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            autoComplete="off">
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
                            <button className='button-blue'>
                                Reset Password
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword