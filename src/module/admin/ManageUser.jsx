import React from "react";
import styled from "styled-components";
import UserTable from '../../components/table/UserTable';

const AdminStyles = styled.div``;
const ManageUser = () => {
    return (
        <AdminStyles>
            <div className="container-fluid">
                <h1 className="text-xl uppercase font-bold mt-8 mb-3 ml-1">
                    User Management
                </h1>
                <UserTable/>
            </div>
        </AdminStyles>
    );
};

export default ManageUser;
