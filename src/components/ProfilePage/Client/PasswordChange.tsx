import { useChangePasswordMutation } from "@/Redux/Apis/authapis";
import { Form, FormProps, Input } from "antd";
import toast from "react-hot-toast";

type FieldType = {
    oldPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
};

const PasswordChange = () => {
    const [change] = useChangePasswordMutation()
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
        change(values).unwrap()
            .then(res => {
                toast.success(res?.message)
            }).catch(err => {
                toast.error(err?.data?.message)
            })
    };
    return (
        <Form
            onFinish={onFinish}
            layout="vertical"
            className="max-w-[700px] w-full mx-auto mt-6"
        >

            <div className=" mt-12">
                <Form.Item<FieldType>
                    name={`oldPassword`}
                    label={`Old Password`}
                    rules={[{ required: true, message: 'Old Password is required' }]}
                >
                    <Input.Password placeholder="Old password" className="h-[42px]" />
                </Form.Item>
                <Form.Item<FieldType>
                    name={`newPassword`}
                    label={`Password`}
                    rules={[{ required: true, message: 'Password is required' }]}
                >
                    <Input.Password placeholder="New Password" className="h-[42px]" />
                </Form.Item>
                <Form.Item<FieldType>
                    name={`confirmPassword`}
                    label={`Confirm Password`}
                    rules={[{ required: true, message: 'Confirm Password is required' }]}
                >
                    <Input.Password placeholder="Confirm New Password" className="h-[42px]" />
                </Form.Item>
            </div>
            <button className="button-blue mx-auto">
                Update Password
            </button>
        </Form>
    )
}

export default PasswordChange
