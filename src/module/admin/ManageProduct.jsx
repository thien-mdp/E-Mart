import React from "react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ProductTable from './../../components/table/ProductTable';
import { AiOutlineFileAdd, AiOutlinePayCircle, AiOutlineShoppingCart, AiOutlineUnorderedList } from "react-icons/ai";


const AdminStyles = styled.div``;
const ManageProduct = () => {
    return (
            <div className="container-fluid">
                <div className="bg-no-repeat bg-cover bg-center flex w-full justify-between">
                    <div className="flex justify-around items-center bg-amber-400 rounded-xl !w-1/3 lg:w-80 p-8 pt-9 my-3 mr-2 h-44">
                        <div>
                            <p className="font-bold text-black text-[16px]">Tiền nhập hàng</p>
                            <p className="text-2xl hover:text-white cursor-pointer">$63,448</p>
                        </div>
                        <AiOutlinePayCircle className="w-10 h-10 text-white"/>
                    </div>
                    <div className="flex justify-around items-center bg-green-500 rounded-xl !w-1/3 lg:w-80 p-8 pt-9 my-3 mr-2 h-44">
                        <div>
                            <p className="font-bold text-white text-[16px]">Số lượng hàng bán ra</p>
                            <p className="text-2xl hover:text-white cursor-pointer">3,448</p>
                        </div>
                        <AiOutlineShoppingCart className="w-10 h-10 text-white"/>
                    </div>
                    <div className="flex justify-around items-center bg-green-500 rounded-xl !w-1/3 lg:w-80 p-8 pt-9 my-3 mr-2 h-44">
                        <div>
                            <p className="font-bold text-white text-[16px]">Hàng tồn kho</p>
                            <p className="text-2xl hover:text-white cursor-pointer">5,202</p>
                        </div>
                        <AiOutlineShoppingCart className="w-10 h-10 text-white"/>
                    </div>
                </div>
                
                <h1 className=" flex items-center justify-between text-xl uppercase font-bold mt-8 mb-3 ml-1">
                    Product Management
                </h1>
                <ProductTable/>
            </div>
    );
};
export default ManageProduct;

