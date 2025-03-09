"use client";
import React from "react";
import loginImage from "@/Asset/login.png";
import Image from "next/image";
import { Form, FormProps, Input } from "antd";
import { useResetPasswordMutation } from "@/Redux/Apis/authapis";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
type FieldType = {
  newPassword?: string;
  confirmPassword?: string;
};
const ResetPassword = () => {
  const router = useRouter();
  const [reset] = useResetPasswordMutation();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    toast.dismiss();
    console.log("Success:", values);
    reset({ email: localStorage.getItem("email"), data: values })
      .unwrap()
      .then((result) => {
        toast.success(result?.message || "Account Verified Successfully");
        localStorage.removeItem("email");
        router.push("/login");
      })
      .catch((err) => {
        toast.error(err?.data?.message || "something went wrong");
      });
  };
  return (
    <div className="mx-auto center-center h-screen w-full">
      <div className="w-full h-full grid-2">
        <Image
          src={loginImage}
          height={600}
          width={1000}
          alt="login image"
          className="img-contain  "
        />
        <div className="flex justify-center items-start h-full w-full flex-col bg-[var(--color-blue-200)] p-4">
          <div className="max-w-[600px] w-full mx-auto">
            <p className="text-3xl font-bold mb-2">Set a new password</p>
            <p className="text-gray">
              Your previous password has been reseed. Please set a new password
              for your account.
            </p>
            <Form
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                label="Password"
                name="newPassword"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password className="h-[42px]" />
              </Form.Item>
              <Form.Item<FieldType>
                label="Confirm Password"
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your Confirm Password!",
                  },
                ]}
              >
                <Input.Password className="h-[42px]" />
              </Form.Item>
              <button className="button-blue">Reset Password</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
