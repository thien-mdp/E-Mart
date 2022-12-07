import {Form, Input } from "antd";
import React from "react";

import {useSelector} from "react-redux";
import {useModal} from "../../context/ModalContext";


const Infomation = ({title}) => {
    const [form] = Form.useForm();
    const {closeModal} = useModal();
    const [loading, setLoading] = React.useState(false);
    const {user} = useSelector((state) => state.authReducer);
    console.log(user)
    return (
            <Form
            form={form}
            autoComplete="off"
            className="shadow-xl p-3 w-full flex flex-col border-2 border-solid border-gray-300 rounded-[10px]"
            >
            <h3 className="text-center mb-5 font-medium text-lg">{title}</h3>
            <Form.Item name="fullname" >
                <div className="w-full flex items-center">
                    <label className="w-[100px]">Họ và tên</label>
                    <Input
                    className="w-full h-[40px] px-2 py-1 bg-gray-100 border-none outline-none"
                    placeholder="Tên"
                    defaultValue={user.fullname}
                    readOnly
                    />
                </div>
            </Form.Item>
            <Form.Item name="email">
                <div className="w-full flex items-center">
                    <label className="w-[100px]">Email</label>
                    <Input
                    className="w-full h-[40px] px-2 py-1 bg-gray-100 border-none outline-none"
                    placeholder="Email"
                    defaultValue={user.email}
                    readOnly
                    />
                </div>
            </Form.Item>
            <Form.Item name="address">
                <div className="w-full flex items-center">
                    <label className="w-[100px]">Email</label>
                    <Input
                    className="w-full h-[40px] px-2 py-1 bg-gray-100 border-none outline-none"
                    defaultValue={user.address}
                    placeholder="Địa chỉ"
                    readOnly
                    />
                </div>
            </Form.Item>
            <Form.Item name="phoneNumber">
                <div className="w-full flex items-center">
                    <label className="w-[100px]">Email</label>
                    <Input
                    className="w-full h-[40px] px-2 py-1 bg-gray-100 border-none outline-none"
                    placeholder="Số điện thoại"
                    defaultValue={user.phoneNumber}
                    readOnly
                    />
                </div>
            </Form.Item>
            
            </Form>
    );
};

export default Infomation;
