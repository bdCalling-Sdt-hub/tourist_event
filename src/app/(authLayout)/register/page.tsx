'use client'
import React from 'react'
import loginImage from '@/Asset/login.png'
import Image from 'next/image'
import { Checkbox, Form, FormProps, Input } from 'antd'
import Link from 'next/link'
type FieldType = {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  sendMail?: string;
  phone?: string;
};

const RegisterPage = () => {
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };
  return (
    <div className='mx-auto center-center h-screen w-full'>
      <div className='w-full h-full grid-2'>
        <Image src={loginImage} height={600} width={1000} alt='login image' className='img-contain  ' />
        <div className='flex justify-center items-start h-full w-full flex-col bg-[var(--color-blue-200)] p-4'>
          <div className='max-w-[600px] w-full mx-auto'>
            <p className='text-3xl font-bold mb-2'>Sign Up</p>
            <p className='text-gray'>Let’s get you all st up so you can access your personal account.</p>
            <Form
              layout='vertical'
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off">
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
                name="sendMail"
                valuePropName="checked"
              >
                <Checkbox>Send emails featuring the best event in Tourist  Platform. </Checkbox>
              </Form.Item>
              <button className='button-blue'>
                Sign Up
              </button>
            </Form>
            <p className='text-end text-sm mt-4'>
              Already have an account? <Link href={`/login`} className='text-[var(--color-red-500)] hover:text-[var(--color-blue-500)]'>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
