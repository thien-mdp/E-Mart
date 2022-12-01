import React from "react";
import {Table} from "antd";

import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {deleteDoc, doc} from "firebase/firestore";
import {db} from "../../firebase";
import Swal from "sweetalert2";

const ProductTable = ({data, fetchData}) => {
  const handleSelectDelete = React.useCallback(async (selectedRowKeys) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteDoc(doc(db, "products", selectedRowKeys));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetchData();
    }
    });
  }, []);
  const columns = [
    {
      title: "title",
      dataIndex: "title",
      ellipsis: true,
      width: 50,
    },
    {
      title: "image",
      dataIndex: "image",
      ellipsis: true,
      width: 40,
      render: (text, record) => (
        <img
          src={record?.image}
          alt="img"
          style={{width: "100px", height: "100px"}}
        />
      ),
    },
    {
      title: "amount",
      dataIndex: "amount",
      ellipsis: true,
      width: 20,
    },
    {
      title: "description",
      dataIndex: "description",
      ellipsis: true,
      width: 60,
    },
    {
      title: "Action",
      render: (record) => {
        return (
          <>
            <div>
              <DeleteOutlined
                style={{color: "red", marginLeft: "1rem"}}
                onClick={() => handleSelectDelete(record.idDoc)}
              />
              <EditOutlined
                style={{color: "red", marginLeft: "1rem"}}
                onClick={() => {
                  console.log("edit");
                }}
              />
            </div>
          </>
        );
      },
      width: 25,
    },
  ];
  return (
    <>
      <Table
        size="small"
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: "10",
        }}
        bordered
      ></Table>
    </>
  );
};
export default ProductTable;
