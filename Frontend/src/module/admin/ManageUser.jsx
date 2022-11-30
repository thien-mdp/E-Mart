import React from "react";
import styled from "styled-components";
import UserTable from '../../components/table/UserTable';
import { Pie } from '@ant-design/plots';

const AdminStyles = styled.div``;
const ManageUser = () => {
    const data = [
        {
            type: 'Người dùng mới',
            value: 300,
        },
        {
            type: 'Khách hàng tiềm năng',
            value: 171,
        },
        {
            type: 'Người dùng đã xóa',
            value: 95,
        }
    ];
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
            type: 'inner',
            offset: '-30%',
            content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
            style: {
                fontSize: 18,
                textAlign: 'center',
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };
    return (
        <AdminStyles>
            <div className="container-fluid">
                <div className="bg-no-repeat bg-cover bg-center flex w-full justify-between">
                    <div className="flex flex-col justify-center items-center bg-teal-200 rounded-xl !w-2/3 !h-auto lg:w-80 p-8 pt-9 my-3 mr-9 h-44">
                        <div className="text-center">
                            <p className="font-bold text-black text-[16px]">Tổng số người dùng</p>
                            <p className="text-2xl hover:text-white cursor-pointer">566</p>
                        </div>
                        <Pie {...config} className="w-full"/>
                    </div>
                    <div className="flex flex-col !w-1/3">
                        <div className="flex justify-around items-center bg-blue-400 rounded-xl !w-full lg:w-80 p-8 pt-9 my-3 mr-2 h-44">
                            <div className="text-center">
                                <p className="font-bold text-white text-[16px]">Người dùng mới</p>
                                <p className="text-2xl hover:text-white cursor-pointer">300</p>
                            </div>
                            {/* <AiOutlineShoppingCart className="w-10 h-10 text-white"/> */}
                        </div>
                        <div className="flex justify-around items-center bg-[#66748c] rounded-xl !w-full lg:w-80 p-8 pt-9 my-3 mr-2 h-44">
                            <div className="text-center">
                                <p className="font-bold text-white text-[16px]">Người dùng đã xóa</p>
                                <p className="text-2xl hover:text-white cursor-pointer">95</p>
                            </div>
                            {/* <AiOutlineShoppingCart className="w-10 h-10 text-white"/> */}
                        </div>
                        <div className="flex justify-around items-center bg-[#6ad7a3] rounded-xl !w-full lg:w-80 p-8 pt-9 my-3 mr-2 h-44">
                            <div className="text-center">
                                <p className="font-bold text-white text-[16px]">Khách hàng tiềm năng</p>
                                <p className="text-2xl hover:text-white cursor-pointer">171</p>
                            </div>
                            {/* <AiOutlineShoppingCart className="w-10 h-10 text-white"/> */}
                        </div>
                    </div>
                </div>
                <h1 className="text-xl uppercase font-bold mt-8 mb-3 ml-1">
                    User Management
                </h1>
                <UserTable />
            </div>
        </AdminStyles>
    );
};

export default ManageUser;
