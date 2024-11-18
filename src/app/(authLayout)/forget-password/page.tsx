'use client'
import React from 'react'
import loginImage from '@/Asset/login.png'
import Image from 'next/image'
import { Form, FormProps, Input } from 'antd'
import { useForgotPasswordMutation } from '@/Redux/Apis/authapis'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
type FieldType = {
    email?: string;
};
const ForgetPasswordPage = () => {
    const router = useRouter()
    const [forget] = useForgotPasswordMutation()
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        toast.dismiss()
        forget(values).unwrap()
            .then(result => {
                localStorage.setItem('email', values?.email ?? "")
                toast.success(result?.message || "Otp Sent")
                router.push('/verify-otp')
            }).catch(err => {
                toast.error(err?.data?.message || "something went wrong")
            });
    };
    return (
        <div className='mx-auto center-center h-screen w-full'>
            <div className='w-full h-full grid-2'>
                <Image src={loginImage} height={600} width={1000} alt='login image' className='img-contain hidden md:block' />
                <div className='flex justify-center items-start h-full w-full flex-col bg-[var(--color-blue-200)] p-4'>
                    <div className='max-w-[600px] w-full mx-auto'>
                        <p className='text-3xl font-bold mb-2'>Enter Your Email</p>
                        <p className='text-gray'>We will send a OTP code for verify your email</p>
                        <Form
                            layout='vertical'
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            autoComplete="off">
                            <Form.Item<FieldType>
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Please input your Email!' }]}
                            >
                                <Input className='h-[42px]' />
                            </Form.Item>
                            <button className='button-blue'>
                                Verify Otp
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPasswordPage
