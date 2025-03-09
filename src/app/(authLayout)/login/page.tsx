"use client";
import React from "react";
import loginImage from "@/Asset/login.png";
import Image from "next/image";
import { Checkbox, Form, FormProps, Input } from "antd";
import Link from "next/link";
import { useLoginMutation } from "@/Redux/Apis/authapis";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};
const loginPage = () => {
  const router = useRouter();
  const [login] = useLoginMutation();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    toast.dismiss();
    const { remember, ...otherData } = values;
    const data = {
      ...otherData,
    };
    login(data)
      .unwrap()
      .then((result) => {
        Cookies.set("_token", result?.data?.accessToken);
        localStorage.setItem("_token", result?.data?.accessToken);
        if (!Cookies.get("_token")) {
          return toast.error("Please enable cookie to login this website");
        }
        toast.success(result?.message || "Login successfully");
        window.location.href = "/";
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
          className="img-contain hidden md:block"
        />
        <div className="flex justify-center items-start h-full w-full flex-col bg-[var(--color-blue-200)] p-4">
          <div className="max-w-[600px] w-full mx-auto">
            <p className="text-3xl font-bold mb-2">Login</p>
            <p className="text-gray">Login to access your Globe account</p>
            <Form
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input className="h-[42px]" />
              </Form.Item>
              <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password className="h-[42px]" />
              </Form.Item>
              <Form.Item<FieldType> name="remember" valuePropName="checked">
                <div className="between-center gap-2">
                  <Checkbox>Remember me</Checkbox>
                  <Link
                    href={`/forget-password`}
                    className="text-[var(--color-red-500)] hover:text-[var(--color-blue-500)]"
                  >
                    Forget Password
                  </Link>
                </div>
              </Form.Item>
              <button className="button-blue">Sign In</button>
            </Form>
            <p className="text-end text-sm mt-4">
              Don’t have an account?{" "}
              <Link
                href={`/join-us`}
                className="text-[var(--color-red-500)] hover:text-[var(--color-blue-500)]"
              >
                Request for An account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
