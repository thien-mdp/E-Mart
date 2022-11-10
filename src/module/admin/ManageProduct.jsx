import React from "react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ProductTable from './../../components/table/ProductTable';
import { AiOutlineFileAdd } from "react-icons/ai";


const AdminStyles = styled.div``;
const ManageProduct = () => {
    return (
            <div className="container-fluid">
                <h1 className=" flex items-center justify-between text-xl uppercase font-bold mt-8 mb-3 ml-1">
                    Product Management <AiOutlineFileAdd className="cursor-pointer w-6 h-6 hover:text-blue-500 ml-5"/>
                </h1>
                <ProductTable/>
            </div>
    );
};
export default ManageProduct;

