"use client";
import React from "react";
import loginImage from "@/Asset/login.png";
import Image from "next/image";
import { Form, FormProps, Input } from "antd";
import { useVerifyOtpMutation } from "@/Redux/Apis/authapis";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
type FieldType = {
  otp?: string;
};

const OtpPage = () => {
  const router = useRouter();
  const [verify] = useVerifyOtpMutation();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    toast.dismiss();
    const data = {
      code: values?.otp,
      email: localStorage.getItem("email"),
    };
    verify(data)
      .unwrap()
      .then((result) => {
        toast.success(result?.message || "Account Verified Successfully");
        router.push("/reset-password");
      })
      .catch((err) => {
        toast.error(err?.data?.message || "something went wrong");
      });
  };
  const onChange = (text: string) => {};
  const sharedProps = {
    onChange,
  };
  return (
    <div className="mx-auto center-center h-screen w-full">
      <div className="w-full h-full grid-2">
        <Image
          src={loginImage}
          height={600}
          width={1000}
          alt="login image"
          className="img-contain hidden md:block"
        />
        <div className="flex justify-center items-start h-full w-full flex-col bg-[var(--color-blue-200)] p-4">
          <div className="max-w-[600px] w-full mx-auto">
            <p className="text-3xl font-bold mb-2">Check your email</p>
            <p className="text-gray">
              We send a OTP code for verify your email to contact@dscode...com
              enter 5 digit code that mentioned in the email.
            </p>
            <Form
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                label="Verification Code"
                name="otp"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input.OTP length={6} className="h-[42px]" {...sharedProps} />
              </Form.Item>
              <button className="button-blue">Verify Otp</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
