import { Form, FormProps, Input } from "antd";

type FieldType = {
    OldPassword?: string;
    password?: string;
    confirmPassword?: string;
};

const PasswordChange = () => {
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };
    return (
        <Form
            onFinish={onFinish}
            layout="vertical"
            className="max-w-[700px] w-full mx-auto mt-6"
        >

            <div className=" mt-12">
                <Form.Item<FieldType>
                    name={`OldPassword`}
                    label={`Old Password`}
                    rules={[{ required: true, message: 'Old Password is required' }]}
                >
                    <Input placeholder="Full name" className="h-[42px]" />
                </Form.Item>
                <Form.Item<FieldType>
                    name={`password`}
                    label={`Password`}
                    rules={[{ required: true, message: 'Password is required' }]}
                >
                    <Input placeholder="Email" className="h-[42px]" />
                </Form.Item>
                <Form.Item<FieldType>
                    name={`confirmPassword`}
                    label={`Confirm Password`}
                    rules={[{ required: true, message: 'Confirm Password is required' }]}
                >
                    <Input placeholder="Phone Number" className="h-[42px]" />
                </Form.Item>
            </div>
            <button className="button-blue mx-auto">
                Update Password
            </button>
        </Form>
    )
}

export default PasswordChange
