import {Button, Form,Input} from "antd";
import {signInWithEmailAndPassword} from "firebase/auth";
import React from "react";
import {auth} from "../../firebase";
import {useSelector} from "react-redux";
import Swal from "sweetalert2";
import {useModal} from "../../context/ModalContext";


const ChangePassword = ({title}) => {
    const [form] = Form.useForm();
    const {closeModal} = useModal();
    const [loading, setLoading] = React.useState(false);
    const {user} = useSelector((state) => state.authReducer);
    const onFinish = async (values) => {
        setLoading(true);
        try {
        await signInWithEmailAndPassword(auth, values.email, values.password);
        closeModal();
        } catch (error) {
        Swal.fire({
            icon: "success",
            title: "Congratulations",
            text: 'Change Password is Success',
        });
        closeModal();
        } finally {
        setLoading(false);
        }
    };
    return (<Form
            form={form}
            onFinish={onFinish}
            autoComplete="off"
            className="shadow-xl p-3 w-full flex flex-col border-2 border-solid border-gray-300 rounded-[10px]"
            >
            <h3 className="text-center mb-5 font-medium text-lg">{title}</h3>
            <Form.Item name="mk">
                <Input.Password
                className="w-full h-[40px] px-2 py-1 bg-gray-100 border-none outline-none"
                placeholder="New Password"
                />
            </Form.Item>
            <Form.Item name="re-password">
                <Input.Password
                className="w-full h-[40px] px-2 py-1 bg-gray-100 border-none outline-none"
                placeholder="Re-input New Password"
                />
            </Form.Item>
            <div className="w-full h-[40px] flex justify-center">
                <Button
                loading={loading}
                disabled={loading}
                htmlType="submit"
                className="text-white text-[12px] h-[40px] w-1/2 bg-blue-700 hover:bg-white rounded-[10px]"
                >
                Change
                </Button>
            </div>
            </Form>
    );
};

export default ChangePassword;
