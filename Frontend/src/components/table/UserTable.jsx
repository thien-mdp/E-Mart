import "antd/dist/antd.css";
import {Button, Input, Table} from "antd";
import {SearchOutlined, DeleteOutlined} from "@ant-design/icons";
import {deleteDoc, doc} from "firebase/firestore";
import Swal from "sweetalert2";
import {db} from "../../firebase";

const UserTable = ({data, fetchData}) => {
  const handleDeleteUser = async (id) => {
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
        await deleteDoc(doc(db, "users", id));
        await fetchData();
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      render: (text, record) => <span>{record?.fullname}</span>,
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      sorter: (record1, record2) => {
        return record1.birthday > record2.birthday;
      },
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Action",
      render: (record) => {
        return (
          <>
            <DeleteOutlined
              style={{color: "red", marginLeft: "1rem"}}
              onClick={() => handleDeleteUser(record.idDoc)}
            />
          </>
        );
      },
    },
  ];

  return (
    <Table
      size="small"
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: "10",
      }}
    ></Table>
  );
};

export default UserTable;
